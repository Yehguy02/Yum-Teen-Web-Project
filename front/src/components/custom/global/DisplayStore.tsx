import DisplayStoreItem from "@/components/custom/global/DisplayStoreItem.tsx";
import type { Store } from "@/index";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

type DisplayStoreProps = {
    title: string;
    stores_list?: Store[];
    isLoading?: boolean;
};

export default function DisplayStore({ title, stores_list = [], isLoading = false }: DisplayStoreProps) {
    const shouldShowSkeleton = isLoading && stores_list.length === 0;
    const skeletonItems = Array.from({ length: 4 });

    return (
        <section className="w-full">
            <div className="px-4 sm:px-0">
                <Label className="text-2xl font-semibold text-gray-900">{title}</Label>
            </div>
            <div className="mt-4 grid w-full gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
                {shouldShowSkeleton
                    ? skeletonItems.map((_, index) => (
                        <Skeleton key={`skeleton-${index}`} className="h-64 w-full rounded-2xl" />
                    ))
                    : stores_list.map(store => (
                        <DisplayStoreItem
                            key={store.id}
                            name={store.name}
                            avg_time={store.avg_time}
                            description={store.description ?? ""}
                            id={store.id}
                            category={store.category}
                            img_src={store.img_src}
                        />
                    ))}
            </div>
        </section>
    );
}