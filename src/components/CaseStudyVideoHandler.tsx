import { useState, useEffect, useRef } from "react";
import VideoPreview from "./VideoPreview";

const MIN_SCREEN_WIDTH = 768;

export default function CaseStudyVideoHandler() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    isVisible: boolean;
  }>({ src: "", isVisible: false });
  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);
  const [allVideos, setAllVideos] = useState<string[]>([]);

  useEffect(() => {
    function checkScreenSize() {
      setIsLargeScreen(window.innerWidth >= MIN_SCREEN_WIDTH);
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isLargeScreen) {
      return;
    }

    const caseStudyItems = document.querySelectorAll(".case-study-item");
    const videosFound = new Set<string>();

    caseStudyItems.forEach((item) => {
      const videoSrc = item.getAttribute("data-video");
      if (videoSrc) {
        videosFound.add(videoSrc);
      }
    });

    setAllVideos(Array.from(videosFound));
  }, [isLargeScreen]);

  useEffect(() => {
    if (!isLargeScreen) {
      return;
    }

    function handleMouseEnter(e: Event) {
      const target = e.currentTarget as HTMLElement;
      const videoSrc = target.getAttribute("data-video");
      if (videoSrc) {
        setActiveVideo({ src: videoSrc, isVisible: true });
        setActiveElement(target);
      }
    }

    function handleMouseLeave() {
      setActiveVideo({ src: "", isVisible: false });
      setActiveElement(null);
    }

    const caseStudyItems = document.querySelectorAll(".case-study-item");
    caseStudyItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      caseStudyItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isLargeScreen]);

  if (!isLargeScreen) {
    return null;
  }

  return (
    <VideoPreview
      videoSrc={activeVideo.src}
      allVideos={allVideos}
      isVisible={activeVideo.isVisible}
      targetElement={activeElement}
    />
  );
}
