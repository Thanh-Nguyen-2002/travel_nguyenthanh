import Link from "next/link";
import Image from "next/image";
import { InfoCircleOutlined, MailOutlined, MenuOutlined } from "@ant-design/icons";

const LayoutHeader = () => {

    return (
        <header className="w-full shadow-sm">

            <div className="bg-gradient-to-r from-orange-500 to-pink-500">
                <div className="max-w-[1400px] mx-auto text-white text-xs sm:text-sm flex justify-between items-center px-3 sm:px-4 h-8 gap-3 sm:gap-5">
                    <div className="flex-1 overflow-hidden">
                        <span className="marquee">
                        CHÀO HÈ 2025 - GIẢM GIÁ 50% TOUR MIỀN BẮC, GIÁ ƯU ĐÃI CHO KHÁCH ĐOÀN. LIÊN HỆ TƯ VẤN NGAY.
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-5 text-xs sm:text-sm">
                        <Link href="/about" className="flex items-center gap-1 hover:text-black font-bold">
                            <InfoCircleOutlined /> Về chúng tôi
                        </Link>
                        <Link href="/contact" className="flex items-center gap-1 hover:text-black font-bold">
                            <MailOutlined /> Liên hệ
                        </Link>
                        <Link href="/blog" className="flex items-center gap-1 hover:text-black font-bold">
                            ✈ Blog Cẩm nang du lịch
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="h-16 flex justify-between items-center px-3 sm:px-6 max-w-[1400px] mx-auto">
                    <Link href="/" className="flex items-center">
                        <Image src="/images/logo.png" alt="Logo CODEC" width={80} height={40} />
                    </Link>

                    <nav className="hidden lg:flex gap-5 text-blue-900 font-semibold text-sm">
                        <Link href="/">Tour Hà Nội</Link>
                        <Link href="/">Tour Hạ Long</Link>
                        <Link href="/">Tour Ninh Bình</Link>
                        <Link href="/">Tour Sapa</Link>
                        <Link href="/">Tour Hà Giang</Link>
                        <Link href="/">Tour Đông Tây Bắc</Link>
                        <Link href="/">Tour Liên Tuyến</Link>
                        <Link href="/about">Giới thiệu</Link>
                    </nav>

                    {/* <button
                        onClick={() => setMobileMenu(true)}
                        className="lg:hidden text-xl text-blue-900"
                    >
                        <MenuOutlined />
                    </button> */}
                </div>
            </div>

        </header>
    );
};

export default LayoutHeader;
