import type {Source} from "~/interfaces/Source";

export interface Wage {
    name: string;
    slug: string;
    subName?: string;
    hourlyWage: number|null;
    displayed: boolean;
    sources: Source[];
}
