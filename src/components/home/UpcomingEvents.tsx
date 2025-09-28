"use client";
import { motion } from "framer-motion";

const events = [
    { title: "Festival Huế", date: "Tháng 4", img: "/event-hue.jpg" },
    { title: "Lễ hội Đền Hùng", date: "Tháng 3", img: "/event-denhung.jpg" },
    { title: "Tết Trung Thu", date: "Tháng 9", img: "/event-trungthu.jpg" },
];

export default function UpcomingEvents() {
    return (
        <section className="py-16 bg-gradient-to-r from-yellow-100 to-orange-100">
            <h2 className="text-3xl font-bold text-center mb-10">Lễ hội & Sự kiện</h2>
            <div className="flex gap-6 overflow-x-auto px-6">
                {events.map((e, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="min-w-[250px] bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                        <img src={e.img} alt={e.title} className="h-40 w-full object-cover" />
                        <div className="p-4">
                            <span className="text-sm text-orange-600 font-bold">{e.date}</span>
                            <h3 className="text-lg font-semibold">{e.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
