const guides = [
    { title: "Thời tiết", desc: "Tháng 1–3: mát mẻ, 6–8: nắng đẹp", icon: "🌤️" },
    { title: "Chi phí", desc: "Trung bình 700k–1tr/ngày", icon: "💰" },
    { title: "Ứng xử", desc: "Mỉm cười, chào hỏi, mặc lịch sự", icon: "🤝" },
];

export default function QuickGuides() {
    return (
        <section className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10">Cẩm nang nhanh</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
                {guides.map((g, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <span className="text-4xl">{g.icon}</span>
                        <h3 className="text-xl font-bold mt-4">{g.title}</h3>
                        <p className="text-gray-600 mt-2">{g.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
