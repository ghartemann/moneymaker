import type { Source } from "~/interfaces/Source";

export interface Thing {
    name?: string;
    slug: string;
    icon: string;
    price: number;
    sources: Source[];
}
