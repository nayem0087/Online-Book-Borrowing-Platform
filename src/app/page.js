import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import ReadingHacks from "@/components/ReadingHacks";
import TopBooks from "@/components/TopBooks";

export default function Home() {
  return (
    <div>
      <Banner/>
      <FeaturedBooks/>
      <TopBooks/>
      <ReadingHacks/>
    </div>
  );
}
