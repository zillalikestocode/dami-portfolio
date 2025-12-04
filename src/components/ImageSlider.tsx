import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";

export interface SlideImage {
  src: string;
  darkSrc?: string;
  alt: string;
  caption?: string;
}

interface ImageSliderProps {
  images: SlideImage[];
  id: string;
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  id,
  className = "",
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrevious = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  useEffect(() => {
    if (swiperRef.current) {
    }
  }, []);

  const prevButtonClass = `slider-prev-${id}`;
  const nextButtonClass = `slider-next-${id}`;

  return (
    <div className={`image-slider-wrapper ${className}`}>
      <div className="slider-container">
        {/* Previous Button */}
        <button
          // onClick={handlePrevious}
          className={`slider-nav-button ${prevButtonClass} !py-2 !px-2.5 slider-nav-prev dark:hover:!bg-[#FFFFFF0D] hover:!bg-white dark:disabled:bg-transparent disabled:bg-[#EBEBEB] disabled:!border-0 disabled:!text-soft !text-dark-text dark:disabled:!border !gap-1.5 !text-sm !leading-5`}
          aria-label="Previous slide"
          // disabled={isBeginning}
        >
          <LucideArrowLeft className="!w-[18px] !h-[18px]" strokeWidth={2.5} />
          Back
        </button>

        {/* Swiper */}
        <div className="swiper-wrapper-container max-w-180 w-full">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: `.${nextButtonClass}`,
              prevEl: `.${prevButtonClass}`,
            }}
            pagination={{ clickable: true }}
            autoHeight={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // setTimeout(() => {
              //   setIsBeginning(swiper.isBeginning);
              //   setIsEnd(swiper.isEnd);
              // }, 0);
            }}
            onSlideChange={(swiper) => {
              // setIsBeginning(swiper.isBeginning);
              // setIsEnd(swiper.isEnd);
            }}
            className="rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-auto object-cover rounded-lg ${image.darkSrc ? "dark:hidden" : ""}`}
                  />
                  {image.darkSrc && (
                    <img
                      src={image.darkSrc}
                      alt={image.alt}
                      className="w-full h-auto object-cover rounded-lg hidden dark:block"
                    />
                  )}
                  {image.caption && (
                    <p className="mt-2 uppercase font-medium leading-4 tracking-[1.2px] text-[11px] text-soft">
                      {image.caption}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Next Button */}
        <button
          // onClick={handleNext}
          className={`slider-nav-button slider-nav-next !py-2 !px-2.5 !gap-1.5 !text-sm !leading-5 !text-dark-text dark:hover:!bg-[#FFFFFF0D] hover:!bg-white dark:disabled:!border dark:disabled:bg-transparent disabled:bg-[#EBEBEB] disabled:!border-0 disabled:!text-soft ${nextButtonClass}`}
          aria-label="Next slide"
          // disabled={isEnd}
        >
          Next
          <LucideArrowRight
            // size={18}
            className="!w-[18px] !h-[18px]"
            strokeWidth={2.5}
            // color="var(--color-dark-text)"
          />
        </button>
      </div>

      <style>{`
        .image-slider-wrapper {
          width: 100%;
          margin: 0 auto;
        }

        .slider-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
        }

        .swiper-wrapper-container {
          flex: 1;
          overflow: hidden;
        }

        .swiper {
          width: 100%;
          height: auto;
        }

        .swiper-wrapper {
          transition-property: height, transform;
          transition-duration: 0.3s;
          transition-timing-function: ease-in-out;
        }

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
        }

        .slide-content {
          width: 100%;
        }

        .slider-nav-button {
          flex-shrink: 0;
          padding: 8px 10px;
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--color-text, #000);
          z-index: 10;
        }

        .slider-nav-button:active {
          transform: scale(0.95);
        }

        .slider-nav-button.disabled {
          opacity: 0.3;
          cursor: not-allowed;
          pointer-events: none;
        }

        .slider-nav-button.disabled svg {
          opacity: 0.5;
        }

        .slider-nav-button svg {
          width: 24px;
          height: 24px;
        }

        .swiper-pagination-bullet {
          background: var(--color-text, #000);
          opacity: 0.3;
          width: 10px;
          height: 10px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: var(--color-text, #000);
        }

        .swiper-pagination {
          bottom: 10px !important;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .slider-container {
            gap: 0.5rem;
          }

          .slider-nav-button {
            width: 40px;
            height: 40px;
          }

          .slider-nav-button svg {
            width: 20px;
            height: 20px;
          }
        }

        @media (max-width: 480px) {
          .slider-nav-button {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
