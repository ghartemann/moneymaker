import type {Source} from "./Source";

export interface Wage {
    name: string;
    subName?: string;
    hourlyWage: number;
    displayed: boolean;
    sources: Source[];
}
