import type {Source} from "~/interfaces/Source";
import type {Price} from "~/interfaces/Price";

export interface Thing {
    name: string;
    slug: string;
    icon: string;
    price: Price;
    sources: Source[];
}
