import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    label?: string;
}

export const Counter: React.FC<CounterProps> = ({
    end,
    duration = 1800,
    suffix = "",
    prefix = "",
    label,
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    let start = 0;
                    const frameDuration = 1000 / 60;
                    const totalFrames = Math.round(duration / frameDuration);
                    const increment = end / totalFrames;
                    let currentFrame = 0;

                    const animate = () => {
                        currentFrame++;
                        start += increment;
                        if (currentFrame < totalFrames) {
                            setCount(Math.floor(start));
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <div ref={ref} className="text-center text-md-start">
            <div className="font-display display-5 fw-bold text-gradient mb-0" style={{ letterSpacing: "-0.03em" }}>
                {prefix}
                {count}
                {suffix}
            </div>
            {label && (
                <div className="text-muted font-mono small text-uppercase mt-1" style={{ letterSpacing: "0.05em", fontSize: "0.8rem" }}>
                    {label}
                </div>
            )}
        </div>
    );
};

export default Counter;
