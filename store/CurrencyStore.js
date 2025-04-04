export const useCurrencyStore = defineStore('currency', () => {
    const selectedCurrency = ref('eur');

    const selectedCurrencySymbol = computed(() => {
        switch (selectedCurrency.value) {
            case 'cad':
                return 'CAD$';
            case 'eur':
                return '€';
            case 'gbp':
                return '£';
            case 'usd':
                return 'USD$';
            default:
                return '';
        }
    });

    function setSelectedCurrency(currency) {
        if (!['cad', 'eur', 'gbp', 'usd'].includes(currency)) {
            throw new Error('Invalid currency');
        }

        selectedCurrency.value = currency;
    }

    return {
        selectedCurrency,
        selectedCurrencySymbol,
        setSelectedCurrency
    }
})