import useFormat from "~/composables/useFormat.js";
import currencies from '~/constants/currencies.js';
import thingsData from "~/constants/thingsData.js";

export default function useThings() {
    function getThings() {
        return thingsData.map(thing => ({
            ...thing,
            icon: 'lucide-' + thing.icon,
            price: useFormat().convertCurrency(thing.price.value, thing.price.currency),
            sources: [
                ...thing.sources,
                ...(
                    thing.price.currency !== 'EUR'
                        ? [{
                            text: `Price has been converted from ${thing.price.currency}.<br>` +
                                `Original price: ${useFormat().formatPrice(thing.price.value, 0, 2, thing.price.currency)}<br>` +
                                `Conversion rate: price * ${currencies[thing.price.currency.toLowerCase() + 'ToEur']}`
                        }]
                        : []
                )
            ]
        })).sort((a, b) => a.price - b.price);
    }

    return {
        getThings
    };
}