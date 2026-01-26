
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const Iota = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        // Reveal cursor logic can go here if needed, for now just static styling as per screenshot
        const timer = setTimeout(() => setShowCursor(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white text-black selection:bg-brand-red selection:text-white font-sans">
            <Navbar />

            <div className="pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center text-center">

                {/* INTRODUCING Gradient Text */}
                <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F57] via-[#D84C98] to-[#6C5CE7]">
                        INTRODUCING
                    </span>
                </h1>

                <div className="relative mb-4 inline-block">
                    <h2 className="text-8xl md:text-9xl font-black tracking-tighter text-black">
                        .iota
                    </h2>
                </div>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl font-light text-black mb-16 tracking-wide">
                    Internet of Things Applications
                </p>

                {/* Serif Description */}
                <div className="max-w-3xl mx-auto space-y-4 mb-20">
                    <p className="text-3xl md:text-4xl font-serif italic text-black leading-tight">
                        Opensource Framework to leverage connectivity
                    </p>
                    <p className="text-3xl md:text-4xl font-serif italic text-black leading-tight">
                        with
                    </p>
                    <p className="text-3xl md:text-4xl font-serif italic text-black leading-tight">
                        Agents and Hardware
                    </p>
                </div>

                {/* Footer / Preview */}
                <div className="mt-auto pt-20">
                    <p className="text-xl font-bold bg-black text-white px-4 py-1 inline-block mb-2">
                        Preview on <span className="text-[#4A90E2]">28 Feb</span>
                    </p>
                    <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                        To power varticas to communicate with hardware enable agents
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Iota;
