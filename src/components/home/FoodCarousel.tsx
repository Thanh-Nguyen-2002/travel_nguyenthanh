"use client";
const foods = [
    { name: "Phở Hà Nội", img: "/food-pho.jpg" },
    { name: "Bánh Mì Hội An", img: "/food-banhmi.jpg" },
    { name: "Bún Bò Huế", img: "/food-bunbo.jpg" },
    { name: "Gỏi Cuốn", img: "/food-goicuon.jpg" },
];

export default function FoodCarousel() {
    return (
        <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-10">Ẩm thực Việt</h2>
            <div className="flex gap-6 overflow-x-auto px-6">
                {foods.map((f, i) => (
                    <div
                        key={i}
                        className="min-w-[200px] flex flex-col items-center bg-white shadow-lg rounded-xl overflow-hidden"
                    >
                        <img src={f.img} alt={f.name} className="h-40 w-full object-cover" />
                        <p className="p-3 font-semibold">{f.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

