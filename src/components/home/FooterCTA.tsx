import React from 'react'

export default function FooterCTA() {
    return (
        <section className="relative py-20 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Sẵn sàng lên đường chưa?</h2>
            <p className="mb-8 text-lg">Khám phá điểm đến, lưu lịch trình và chia sẻ với bạn bè ngay hôm nay!</p>
            <button className="px-8 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition">
                Tìm điểm đến ngay
            </button>
        </section>
    )
}
