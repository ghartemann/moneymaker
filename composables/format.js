export default function useFormat() {
    function formatPrice(number) {
        return new Intl.NumberFormat(
            'en-CA',
            { style: 'currency', currency: 'EUR' }
        ).format(number);
    }

    // la pire fonction que j'ai jamais écrite mdr
    function formatHours(
        hours,
        short = false,
        roughly = false,
        noPerSecond = false
    ) {
        const parts = [];

        if (roughly) {
            parts.unshift('~');
        }

        const nbHoursInYear = 365.25 * 24;
        const years = Math.floor(hours / nbHoursInYear);

        if (years > 0) {
            const unit = years > 1 ? 'years' : 'year';
            parts.push(`${formatNumberNice(years, true)} ${unit}`);

            if (roughly && years >= 10) {
                return parts;
            }
        }

        hours %= nbHoursInYear;

        const nbHoursInMonth = (365.25 / 12) * 24;
        const months = Math.floor(hours / nbHoursInMonth);

        if (roughly && months === 0 && parts.length > 1) {
            return parts;
        } else if (months > 0) {
            const unit = months > 1 ? 'months' : 'month';
            parts.push(`${months} ${unit}`);
        }

        hours %= nbHoursInMonth;

        const nbHoursInWeek = 7 * 24;
        const weeks = Math.floor(hours / nbHoursInWeek);

        if (roughly && weeks === 0 && parts.length > 1) {
            return parts;
        } else if (weeks > 0) {
            const unit = weeks > 1 ? 'weeks' : 'week';
            parts.push(`${weeks} ${unit}`);
        }

        hours %= nbHoursInWeek;

        const days = Math.floor(hours / 24);

        if (roughly && days === 0 && parts.length > 1) {
            return parts;
        } else if (days > 0) {
            const unit = days > 1 ? 'days' : 'day';
            parts.push(`${days} ${unit}`);
        }

        hours %= 24;

        const h = Math.floor(hours);

        if (roughly && h === 0 && parts.length > 1) {
            return parts;
        } else if (h > 0) {
            const unit = short ? 'h' : (h > 1 ? 'hours' : 'hour');
            parts.push(`${h} ${unit}`);
        }

        const minutes = Math.floor((hours % 1) * 60);

        if (roughly && minutes === 0 && parts.length > 1) {
            return parts;
        } else if (minutes > 0) {
            const unit = short ? 'min' : (minutes > 1 ? 'minutes' : 'minute');
            parts.push(`${minutes} ${unit}`);
        }

        const seconds = Math.floor(((hours % 1) * 60 % 1) * 60);
        const secondsUnrounded = ((hours % 1) * 60 % 1) * 60;

        if (roughly && seconds === 0 && parts.length > 1) {
            return parts;
        } else if (seconds > 0) {
            const unit = short ? 's' : (seconds > 1 ? 'seconds' : 'second');
            parts.push(`${seconds} ${unit}`);
        }

        if (seconds === 0 && parts.length === 0) {
            if (noPerSecond === false) {
                const perSecond = (1 / secondsUnrounded).toFixed(2);
                return [`${formatNumberNice(perSecond)} per second`];
            } else {
                return ['0 s'];
            }
        }

        if (roughly) {
            parts.splice(3);
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


    return {
        formatPrice,
        formatNumberNice,
        formatHours
    };
}
