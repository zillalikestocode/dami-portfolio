import { useState, useEffect, useRef } from "react";

interface VideoPreviewProps {
  videoSrc: string;
  allVideos?: string[];
  isVisible: boolean;
  targetElement: HTMLElement | null;
}

const VIDEO_WIDTH = 600;
const OFFSET = 20;

export default function VideoPreview({
  videoSrc,
  allVideos = [],
  isVisible,
  targetElement,
}: VideoPreviewProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && targetElement) {
      const updatePosition = () => {
        const rect = targetElement.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const estimatedVideoHeight = 225;

        // Position on the right side of the element
        let x = rect.right + OFFSET;
        let y = rect.top + rect.height / 2; // Center vertically with the element

        // If video would overflow on the right, position it on the left instead
        if (x + VIDEO_WIDTH > viewportWidth) {
          x = rect.left - OFFSET - VIDEO_WIDTH;
        }

        // Ensure video stays within viewport bounds
        if (x < 0) {
          x = OFFSET;
        }

        // Adjust vertical position if video would overflow
        if (y + estimatedVideoHeight / 2 > viewportHeight) {
          y = viewportHeight - estimatedVideoHeight / 2;
        }
        if (y - estimatedVideoHeight / 2 < 0) {
          y = estimatedVideoHeight / 2;
        }

        setPosition({ x, y });
      };

      updatePosition();

      // Update position on scroll and resize
      const handleUpdate = () => {
        if (isVisible && targetElement) {
          updatePosition();
        }
      };

      window.addEventListener("scroll", handleUpdate, true);
      window.addEventListener("resize", handleUpdate);

      return () => {
        window.removeEventListener("scroll", handleUpdate, true);
        window.removeEventListener("resize", handleUpdate);
      };
    }
  }, [isVisible, targetElement]);

  useEffect(() => {
    const videos = containerRef.current?.querySelectorAll("video");
    videos?.forEach((video) => {
      const src = video.getAttribute("src");
      if (isVisible && src === videoSrc) {
        video.style.display = "block";
        video.play().catch(() => {});
      } else {
        video.style.display = "none";
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [isVisible, videoSrc, allVideos]);

  const videosToRender =
    allVideos.length > 0 ? allVideos : videoSrc ? [videoSrc] : [];

  return (
    <div
      ref={containerRef}
      className="fixed pointer-events-none z-50 w-[600px] rounded-4xl overflow-hidden shadow-2xl bg-background"
      style={{
        right: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translateY(-50%) scale(${isVisible ? 1 : 0.85})`,
        opacity: isVisible ? 1 : 0,
        transition:
          "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        pointerEvents: "none",
      }}
    >
      {videosToRender.map((src) => (
        <video
          key={src}
          src={src}
          className="w-full h-auto"
          loop
          muted
          playsInline
          preload="auto"
          style={{ display: "none" }}
        />
      ))}
    </div>
  );
}
