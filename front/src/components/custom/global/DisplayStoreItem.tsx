import { Link } from "react-router";

type DisplayStoreItemProps = {
    name: string;
    img_src?: string;
    avg_time: number[];
    description?: string;
    id: number;
    category?: string[];
};

export default function DisplayStoreItem({ name, img_src, description = "", id, category }: DisplayStoreItemProps) {
    return (
        <Link
            to={`/user/store/${id}`}
            className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow transition-shadow hover:shadow-lg"
        >
            <div className="relative h-40 w-full overflow-hidden bg-purple-800">
                {img_src ? (
                    <img src={img_src} alt={name} className="h-full w-full object-cover" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-white">No image</div>
                )}
            </div>
            <div className="flex flex-1 flex-col gap-2 px-4 py-3">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                {category && category.length > 0 && (
                    <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                        {category.map(cat => (
                            <span key={`${id}-${cat}`} className="rounded-full border border-gray-200 px-2 py-1">
                                {cat}
                            </span>
                        ))}
                    </div>
                )}
                {description && <p className="line-clamp-2 text-sm text-gray-600">{description}</p>}
            </div>
        </Link>
    );
}