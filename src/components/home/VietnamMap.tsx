export default function VietnamMap() {
    return (
        <section className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Khám phá theo Vùng</h2>
            <div className="flex justify-center">
                <img src="/vietnam-map.svg" alt="Bản đồ Việt Nam" className="max-h-96" />
            </div>
            <p className="text-center text-gray-600 mt-4">
                Click vào từng vùng để xem điểm đến nổi bật
            </p>
        </section>
    );
}
