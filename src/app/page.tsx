import FoodCarousel from "@/components/home/FoodCarousel";
import FooterCTA from "@/components/home/FooterCTA";
import HeroSection from "@/components/home/HeroSection";
import QuickGuides from "@/components/home/QuickGuides";
import TopExperiences from "@/components/home/TopExperiences";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import VietnamMap from "@/components/home/VietnamMap";

export default function Home() {
    return (
        <>
            <div>
                <HeroSection />
            </div>
            <div>
                <TopExperiences />
            </div>
            <div>
                <VietnamMap />
            </div>
            <div>
                <UpcomingEvents />
            </div>
            <div>
                <FoodCarousel/>
            </div>
            <div>
                <QuickGuides />
            </div>
            <div>
                <FooterCTA/>
            </div>
        </>
    );
}
