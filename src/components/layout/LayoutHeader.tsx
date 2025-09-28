import Link from "next/link";
import Image from "next/image";
import { InfoCircleOutlined, MailOutlined } from "@ant-design/icons";
import { ChevronDown } from "lucide-react";

const LayoutHeader = () => {

    return (
        <header className="w-full shadow-sm">

            <div className="bg-gradient-to-r from-orange-500 to-pink-500">
                <div className="max-w-[1400px] mx-auto text-white text-xs sm:text-sm flex justify-between items-center px-3 sm:px-4 h-8 gap-3 sm:gap-5">
                    <div className="flex-1 overflow-hidden">
                        <span className="marquee">
                            CHÀO HÈ 2025 - GIẢM GIÁ 50% TOUR MIỀN BẮC, ƯU ĐÃI KHÁCH ĐOÀN. LIÊN HỆ NGAY!
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-5 text-xs sm:text-sm">
                        <Link href="/ve-chung-toi" className="flex items-center gap-1 hover:text-black font-bold">
                            <InfoCircleOutlined /> Về chúng tôi
                        </Link>
                        <Link href="/lien-he" className="flex items-center gap-1 hover:text-black font-bold">
                            <MailOutlined /> Liên hệ
                        </Link>
                        <Link href="/blog" className="flex items-center gap-1 hover:text-black font-bold">
                            ✈ Blog
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="h-16 flex justify-between items-center px-3 sm:px-6 max-w-[1400px] mx-auto">
                    <Link href="/" className="flex items-center">
                        <Image src="/images/logo.png" alt="Logo Sắc Việt Travel" width={80} height={40} />
                    </Link>

                    <nav className="hidden md:flex gap-6 text-slate-700 font-medium">
                        <Link href="/">Trang chủ</Link>

                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-blue-600">
                                Điểm đến <ChevronDown size={16}/>
                            </button>
                            <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-lg rounded-md mt-2 w-48">
                                <ul className="py-2 text-sm">
                                    <li><Link href="/diem-den/bac" className="block px-4 py-2 hover:bg-slate-100">Miền Bắc</Link></li>
                                    <li><Link href="/diem-den/trung" className="block px-4 py-2 hover:bg-slate-100">Miền Trung</Link></li>
                                    <li><Link href="/diem-den/nam" className="block px-4 py-2 hover:bg-slate-100">Miền Nam</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-blue-600">
                                Chủ đề <ChevronDown size={16}/>
                            </button>
                            <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-lg rounded-md mt-2 w-56">
                                <ul className="py-2 text-sm">
                                    <li><Link href="/chu-de/bien" className="block px-4 py-2 hover:bg-slate-100">Biển & Đảo</Link></li>
                                    <li><Link href="/chu-de/nui" className="block px-4 py-2 hover:bg-slate-100">Núi & Rừng</Link></li>
                                    <li><Link href="/chu-de/van-hoa" className="block px-4 py-2 hover:bg-slate-100">Văn hóa – Lễ hội</Link></li>
                                    <li><Link href="/chu-de/am-thuc" className="block px-4 py-2 hover:bg-slate-100">Ẩm thực</Link></li>
                                    <li><Link href="/chu-de/healing" className="block px-4 py-2 hover:bg-slate-100">Chăm sóc & Chữa lành</Link></li>
                                    <li><Link href="/chu-de/adventure" className="block px-4 py-2 hover:bg-slate-100">Phiêu lưu</Link></li>
                                    <li><Link href="/chu-de/family" className="block px-4 py-2 hover:bg-slate-100">Gia đình</Link></li>
                                </ul>
                            </div>
                        </div>

                        <Link href="/lich-trinh">Lịch trình</Link>
                        <Link href="/am-thuc">Ẩm thực</Link>
                        <Link href="/le-hoi">Lễ hội</Link>
                        <Link href="/cam-nang/thoi-tiet">Cẩm nang</Link>
                        <Link href="/blog">Blog</Link>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default LayoutHeader;