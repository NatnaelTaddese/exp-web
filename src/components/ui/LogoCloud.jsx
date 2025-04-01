import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";
// Progressive blur component for edge fading
const ProgressiveBlur = ({
  direction = "left",
  blurIntensity = 1,
  className = "",
  ...props
}) => {
  const gradientDirection = direction === "left" ? "to right" : "to left";

  return (
    <div
      className={`${className}`}
      style={{
        background: `linear-gradient(${gradientDirection}, 
          rgba(3, 3, 2, 1) 0%, 
          rgba(3, 3, 2, ${0.9 * blurIntensity}) 30%, 
          rgba(3, 3, 2, ${0.4 * blurIntensity}) 60%, 
          rgba(3, 3, 2, 0) 100%)`,
      }}
      {...props}
    />
  );
};

// Simplified infinite slider with hover effect

const InfiniteSlider = ({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className = "",
  ...props
}) => {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={`overflow-hidden ${className}`} {...props}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default function LogoCloud() {
  const logos = [
    {
      src: "/partners/partner-1.png",
      alt: "Client 1 Logo",
      height: "h-24",
    },
    {
      src: "/partners/partner-2.png",
      alt: "Client 2 Logo",
      height: "h-24",
    },
    {
      src: "/partners/partner-3.png",
      alt: "Client 3 Logo",
      height: "h-24",
    },
    {
      src: "/partners/partner-4.png",
      alt: "Client 4 Logo",
      height: "h-24",
    },
    {
      src: "/partners/partner-5.png",
      alt: "Client 5 Logo",
      height: "h-24",
    },
  ];

  return (
    <section className="bg-[#030302] overflow-hidden py-16 w-dvw">
      <div className="group relative mx-auto px-6">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="mb-6 md:mb-0 md:max-w-44 md:border-r md:border-gray-800 md:pr-6">
            <p className="text-center md:text-end text-gray-300 text-sm font-light">
              TRUSTED BY COMPANIES ACROSS ETHIOPIA
            </p>
          </div>

          <div className="relative py-6 max-w-2xl md:w-[calc(100%-11rem)]">
            <InfiniteSlider
              speed={40}
              speedOnHover={20}
              gap={80}
              className="relative py-6 w-full"
            >
              {logos.map((logo, index) => (
                <div key={index} className="flex flex-shrink-0 items-center">
                  <img
                    className="w-[30px] md:w-[60px] object-fill brightness-95 opacity-80 grayscale invert hover:invert-0 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    src={logo.src}
                    alt={logo.alt}
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Gradient fades */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030302] to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030302] to-transparent"></div>

            {/* Progressive blur effect */}
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
