import type { Source } from "~/constants/interfaces/Source";

export interface Thing {
    name: string;
    slug: string;
    icon: string;
    price: number;
    sources: Source[];
}
