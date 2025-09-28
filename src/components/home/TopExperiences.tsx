"use client";
import { motion } from "framer-motion";

const experiences = [
    { title: "Biển Đảo", img: "/exp-beach.jpg", icon: "🌊" },
    { title: "Núi Rừng", img: "/exp-mountain.jpg", icon: "🏔️" },
    { title: "Văn hóa", img: "/exp-culture.jpg", icon: "🎭" },
    { title: "Ẩm thực", img: "/exp-food.jpg", icon: "🍜" },
    { title: "Wellness", img: "/exp-healing.jpg", icon: "🌿" },
    { title: "Adventure", img: "/exp-adventure.jpg", icon: "🧗" },
];

export default function TopExperiences() {
    return (
        <section className="max-w-6xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Top Trải Nghiệm</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                    >
                        <img src={exp.img} alt={exp.title} className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <span className="text-2xl">{exp.icon}</span>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
