"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white overflow-hidden">

            <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-70"></div>
            <div className="absolute inset-0 bg-black/40"></div>


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-4"
            >
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 drop-shadow-lg">
                    Khám phá Việt Nam – Một hành trình, vạn trải nghiệm
                </h1>
                <div className="flex justify-center gap-4">
                    <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition">
                        Khám phá theo Vùng
                    </button>
                    <button className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white hover:text-black transition">
                        Khám phá theo Chủ đề
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
