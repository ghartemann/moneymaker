import type {Wage} from "~/interfaces/Wage";
import wagesData from "~/constants/wagesData";

export function useWagesCollection(): { wages: Wage[] } {
    const {t} = useI18n();

    const wages: Wage[] = wagesData.map((wage) => ({
        ...wage,
        name: t(`wages.${wage.slug}.name`),
        subName: wage.subName ? t(`wages.${wage.slug}.subName`) : undefined
    }));

    return {
        wages
    };
}