import HomeCategory from "./home-category";
import DisplayStores from "@/components/custom/global/DisplayStore.tsx";
import type { Store } from "@/index";
import GrabBanner from "@/assets/home/grab-banner.png";

export default function HomeAllStore({
  popularStores = [],
  trendingStores = [],
  isLoading = false,
}: {
  popularStores?: Store[];
  trendingStores?: Store[];
  isLoading?: boolean;
}) {
    return (
        <div className="flex flex-col gap-8">
            <HomeCategory />
            <a
                href="https://youtu.be/dQw4w9WgXcQ?si=uNjbh50AirwHZqqI"
                target="_blank"
                rel="noreferrer noopener"
            >
                <div className="flex justify-center">
                    <div className="h-52 w-full max-w-4xl overflow-hidden rounded-2xl bg-blue-400 sm:h-60">
                        <img src={GrabBanner} alt="Grab promotion" className="h-full w-full object-cover" />
                    </div>
                </div>
            </a>

            <DisplayStores title="Popular Now" stores_list={popularStores} isLoading={isLoading} />
            <DisplayStores title="Trending Now" stores_list={trendingStores} isLoading={isLoading} />
            
        </div>

    );
}