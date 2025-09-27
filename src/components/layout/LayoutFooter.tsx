import { SendOutlined } from "@ant-design/icons"
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, Building2, Mountain, Waves, Landmark, Building, Theater, UtensilsCrossed, HeartPulse 

} from "lucide-react";
import layout_footer from '@/components/layout/LayoutFooter.module.css'

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 mt-12">
            <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
                
                <div>
                    <h2 className="text-2xl font-bold text-white">Sắc Việt Travel</h2>
                    <p className="mt-2 text-slate-400 text-sm">
                        Khám phá Việt Nam – Văn hóa, Thiên nhiên, Con người.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <Link className={layout_footer.link} href="#"><Facebook size={22} /></Link>
                        <Link className={layout_footer.link} href="#"><Instagram size={22} /></Link>
                        <Link className={layout_footer.link} href="#"><Youtube size={22} /></Link>
                        <Link className={layout_footer.link} href="#"><Twitter size={22} /></Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-3">Điểm đến</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link 
                                href="/diem-den/bac/ha-noi" 
                                className={layout_footer.link} 
                                title="Khám phá Hà Nội - điểm đến nổi bật"
                            >
                                <Building2 size={18}/> Hà Nội.
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/diem-den/bac/ninh-binh" 
                                className={layout_footer.link}
                                title="Khám phá Ninh Bình - điểm đến nổi bật"
                            >
                                <Mountain size={18}/> Ninh Bình.
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/diem-den/trung/da-nang" 
                                className={layout_footer.link}
                                title="Khám phá Đà Nẵng - điểm đến nổi bật"
                            >
                                <Waves size={18}/> Đà Nẵng.
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/diem-den/trung/hue" 
                                className={layout_footer.link}
                                title="Khám phá Huế - điểm đến nổi bật"
                            >
                                <Landmark size={18}/> Huế.
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/diem-den/nam/tp-hcm" 
                                className={layout_footer.link}
                                title="Khám phá HCM - điểm đến nổi bật"
                            >
                                <Building size={18}/> TP.HCM.
                            </Link>
                        </li>
                        <li >
                            <Link 
                                href="/diem-den/nam/kien-giang" 
                                className={layout_footer.link}
                                title="Khám phá Phú Quốc - điểm đến nổi bật"
                            >
                                <Waves size={18}/> Phú Quốc.
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-3">Chủ đề trải nghiệm</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link 
                                href="/chu-de/bien" 
                                className={layout_footer.link}
                                title="Khám phá Biển & Đảo"
                            >
                                <Waves size={18}/> Biển & Đảo.
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/chu-de/nui" 
                                className={layout_footer.link}
                                title="Khám phá núi & phiêu lưu"
                            >
                                <Mountain size={18}/>Núi & Phiêu lưu.
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/chu-de/van-hoa" 
                                className={layout_footer.link}
                                title="Khám phá văn hóa - lễ hội"
                            >
                                <Theater size={18}/>Văn hóa – Lễ hội.
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/chu-de/am-thuc" 
                                className={layout_footer.link}
                                title="Khám phá ẩm thực"
                            >
                                <UtensilsCrossed size={18}/> Ẩm thực.
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/chu-de/healing" 
                                className={layout_footer.link}
                                title="Chăm sóc & chữa lành"
                            >
                                <HeartPulse size={18}/>Chăm sóc & Chữa lành.
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-white mb-3">Đăng ký nhận tin</h3>
                    <p className="text-sm text-slate-400 mb-3">
                        Nhận thông tin du lịch & ưu đãi mới nhất.
                    </p>
                   
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Nhập email..."
                            className="px-3 py-2 rounded-l-md w-full bg-gray-800 text-white border border-gray-700 focus:outline-none"
                        />
                        <button className="bg-orange-500 px-4 rounded-r-md hover:bg-orange-600 transition cursor-pointer">
                            <SendOutlined className="text-white" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-slate-800 border-t border-slate-700">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-400">

                    <div>
                        <span>Email: </span><a href="mailto:nxthanh.nb2002@gmail.com" className="hover:text-white">nxthanh.nb2002@gmail.com</a> | 
                        <span className="ml-2">Hotline: </span><a href="tel:0377648322" className="hover:text-white">0377 648 322</a>
                    </div>

                    <div className="flex gap-4">
                        <Link href="/chinh-sach-bao-mat" className="hover:text-white">Chính sách bảo mật</Link>
                        <Link href="/dieu-khoan-su-dung" className="hover:text-white">Điều khoản</Link>
                        <Link href="/ban-quyen-hinh-anh" className="hover:text-white">Bản quyền hình ảnh</Link>
                    </div>

                    <div>
                        © 2025 Sắc Việt Travel. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
