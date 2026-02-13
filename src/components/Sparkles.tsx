import { useEffect, useState } from "react";

const Sparkles = () => {
    const [sparkles, setSparkles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

    useEffect(() => {
        const generateSparkles = () => {
            const newSparkles = Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                    opacity: Math.random(),
                    transform: `scale(${Math.random() * 0.5 + 0.5})`,
                },
            }));
            setSparkles(newSparkles);
        };

        generateSparkles();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {sparkles.map((sparkle) => (
                <div
                    key={sparkle.id}
                    className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-pulse shadow-[0_0_8px_2px_rgba(255,255,200,0.6)]"
                    style={sparkle.style}
                />
            ))}
        </div>
    );
};

export default Sparkles;
