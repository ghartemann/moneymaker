import type {Source} from "~/constants/interfaces/Source";
import type {Price} from "~/constants/interfaces/Price";

export interface Thing {
    name: string;
    slug: string;
    icon: string;
    price: Price;
    sources: Source[];
}
