import type {Source} from "~/interfaces/Source";

export interface Wage {
    name: string;
    subName?: string;
    hourlyWage: number;
    displayed: boolean;
    sources: Source[];
}
