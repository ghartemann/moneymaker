import currencies from "~/constants/currencies.js";

export default function useFormat() {
    function formatPrice(number, minimumFractionDigits = 0, maximumFractionDigits = 2) {
        return new Intl.NumberFormat(
            'en-CA',
            {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: !Number.isFinite(number) || !Number.isInteger(number) ? 2 : minimumFractionDigits,
                maximumFractionDigits
            }
        ).format(number);
    }

    // la pire fonction que j'ai jamais écrite mdr
    function formatHours(hours, short = false, roughly = false, noPerSecond = false) {
        const parts = [];
        const formatNumberNice = useFormat().formatNumberNice;

        const years = Math.floor(hours / 8760);
        const yearsNice = formatNumberNice(years, true);

        if (years > 0) {
            if (roughly && years > 1) {
                parts.unshift('~');
                parts.push(`${yearsNice} years`);
                return parts;
            }

            const unit = years > 1 ? 'years' : 'year';
            parts.push(`${yearsNice} ${unit}`);
        }

        hours %= 8760;

        const months = Math.floor(hours / 730);
        if (months > 0) {
            const unit = months > 1 ? 'months' : 'month';
            parts.push(`${months} ${unit}`);

            if (roughly && months > 0 ) {
                parts.unshift('~');
                return parts;
            }
        }

        hours %= 730;

        const weeks = Math.floor(hours / 168);
        if (weeks > 0) {
            const unit = weeks > 1 ? 'weeks' : 'week';
            parts.push(`${weeks} ${unit}`);

            if (roughly && months > 0 && weeks > 0) {
                parts.unshift('~');
                return parts;
            }
        }

        hours %= 168;

        const days = Math.floor(hours / 24);
        if (days > 0) {
            if (roughly && years >= 1 && months === 0 && days > 0) {
                parts.unshift('~');
                return parts;
            }

            if (roughly && weeks > 0 && days > 0) {
                parts.unshift('~');
                return parts;
            }

            const unit = days > 1 ? 'days' : 'day';
            parts.push(`${days} ${unit}`);
        }

        hours %= 24;

        const h = Math.floor(hours);
        if (h > 0) {
            const unit = short ? 'h' : (h > 1 ? 'hours' : 'hour');
            parts.push(`${h} ${unit}`);
        }

        const minutes = Math.floor((hours % 1) * 60);
        if (minutes > 0) {
            if (roughly && days > 0 && h > 0) {
                parts.unshift('~');
                return parts;
            }

            const unit = short ? 'min' : (minutes > 1 ? 'minutes' : 'minute');
            parts.push(`${minutes} ${unit}`);
        }

        const seconds = Math.floor(((hours % 1) * 60 % 1) * 60);
        const secondsUnrounded = ((hours % 1) * 60 % 1) * 60;

        if (seconds > 0 || parts.length === 0) {
            if (seconds === 0) {
                if (noPerSecond === false) {
                    const perSecond = (1 / secondsUnrounded).toFixed(2);
                    parts.push(`${formatNumberNice(perSecond)} per second`);
                } else {
                    parts.push('0 s');
                }
            } else {
                if (roughly && h > 0 && minutes > 0) {
                    parts.unshift('~');
                    return parts;
                }

                const unit = short ? 's' : (seconds > 1 ? 'seconds' : 'second');
                parts.push(`${seconds} ${unit}`);
            }
        }

        return parts;
    }

    function formatNumberNice(number, noSuffix = false) {
        let formattedNumber;

        if (noSuffix) {
            return new Intl.NumberFormat('fr-FR').format(Math.floor(number));
        }

        switch (true) {
            case number < 1000000:
                formattedNumber = new Intl.NumberFormat('fr-FR').format(Math.floor(number));

                break;
            case number < 1000000000:
                formattedNumber = new Intl.NumberFormat('en-US', {
                    maximumFractionDigits: 1,
                    minimumFractionDigits: 1
                }).format(Math.floor(number) / 1000000) + ' M';

                break;
            case number < 1000000000000:
                formattedNumber = new Intl.NumberFormat('en-US', {
                    maximumFractionDigits: 1,
                    minimumFractionDigits: 1
                }).format(Math.floor(number) / 1000000000) + ' B';

                break;
            default:
                formattedNumber = new Intl.NumberFormat('fr-FR').format(Math.floor(number));

                break;
        }

        return formattedNumber;
    }

    function convertCurrency(value, currency) {
        if (!value || !currency || currency === 'EUR') {
            return value;
        }

        const conversionRate = currencies[`${currency.toLowerCase()}ToEur`];

        if (!conversionRate) {
            console.warn(`No conversion rate found for currency: ${currency}`);
            return value;
        }

        return value * conversionRate;
    }

    return {
        formatNumber: formatPrice,
        formatNumberNice,
        formatHours,
        convertCurrency
    };
}