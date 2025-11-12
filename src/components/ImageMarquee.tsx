import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

interface ImageMarqueeProps {
  images: string[];
}

export default function ImageMarquee({ images }: ImageMarqueeProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="h-[324px]">
      <div className="w-[100vw] absolute left-1/2 -translate-x-1/2 overflow-hidden h-[324px] sm:overflow-x-auto sm:overflow-y-hidden">
        {isSmallScreen ? (
          <Marquee speed={50} gradient={false} pauseOnHover={false}>
            {images.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={`Slider ${index + 1}`}
                className="h-[324px] w-[303px] object-cover flex-shrink-0"
              />
            ))}
          </Marquee>
        ) : (
          <div className="flex overflow-hidden h-full justify-center">
            {images.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={`Slider ${index + 1}`}
                className="h-full w-[303px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
