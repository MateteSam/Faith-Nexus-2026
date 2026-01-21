"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const bgColor = useTransform(scrollY, [0, 100], ["rgba(0,0,0,0)", "rgba(0,0,0,0)"]); // True 0 opacity
    const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(8px)"]);
    const borderOpacity = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.03)"]);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            style={{
                backgroundColor: bgColor,
                backdropFilter: backdropBlur,
                borderBottom: `1px solid ${borderOpacity.get()}` // useTransform doesn't work directly in inline styles for complex strings easily
            }}
            className="fixed top-0 w-full z-[100] transition-all duration-300"
        >
            {/* We'll use a wrapper div for the border to handle the transform better if needed, but for now we'll just keep it simple */}
            <div className={`container mx-auto px-6 py-6 transition-all duration-500 ${isScrolled ? 'md:py-4' : 'md:py-8'}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/nexus-globe-v3.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
                        <span className="text-white font-serif text-xl md:text-2xl tracking-tight">Faith Nexus 2026</span>
                    </div>

                    <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.2em] font-bold text-white/60">
                        <a href="#" className="hover:text-white transition-colors">Vision</a>
                        <a href="#" className="hover:text-white transition-colors">Summit</a>
                        <a href="#" className="hover:text-white transition-colors">Launch</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 md:px-8 md:py-3 bg-white text-black rounded-full font-bold text-sm tracking-tight shadow-lg"
                    >
                        Register
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
