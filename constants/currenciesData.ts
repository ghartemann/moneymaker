import type {Currency} from "~/constants/interfaces/Currency";

//TODO: ALL THESE VALUES ARE WRONG

const currenciesData: Currency[] = [
    {
        name: 'Euro',
        symbol: '€',
        code: 'EUR',
        toEur: 1,
        toUsd: 1.08,
        toCad: 1,
        toGbp: 0.86
    },
    {
        name: 'US Dollar',
        symbol: '$',
        code: 'USD',
        toEur: 0.93,
        toUsd: 1,
        toCad: 1,
        toGbp: 0.80
    },
    {
        name: 'Canadian Dollar',
        symbol: '$',
        code: 'CAD',
        toEur: 0.93,
        toUsd: 1,
        toCad: 1,
        toGbp: 0.80
    },
    {
        name: 'British Pound',
        symbol: '£',
        code: 'GBP',
        toEur: 1.16,
        toUsd: 1.25,
        toCad: 1,
        toGbp: 1
    }
];