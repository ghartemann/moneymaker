import type {Source} from "./Source";
import type {Price} from "./Price";

export interface Thing {
    name: string;
    slug: string;
    icon: string;
    price: Price;
    sources: Source[];
}
