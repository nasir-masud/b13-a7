import BannerStats from "./components/BannerStats";
import FriendsSection from "./components/FriendsSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Hero />
      <BannerStats />
      <FriendsSection />
    </div>
  );
}
