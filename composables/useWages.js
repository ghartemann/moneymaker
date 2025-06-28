import wagesData from "~/constants/wagesData.js";

export default function useWages() {
    function getWages() {
        return wagesData;
    }

    return {
        getWages
    };
}