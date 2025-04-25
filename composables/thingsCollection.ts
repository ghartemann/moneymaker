import type {Thing} from "~/interfaces/Thing";
import thingsData from "~/constants/thingsData";

export function useThingsCollection(): { things: Thing[] } {
    const {t} = useI18n();

    const things: Thing[] = thingsData.map((thing) => ({
        ...thing,
        name: t(`things.${thing.slug}`),
    }));

    return {
        things
    };
}