export default function useFormat() {
    function formatNumber(number) {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(number);
    }

    function formatHours(hours) {
        const parts = [];

        const years = Math.floor(hours / 8760);
        if (years > 0) parts.push(`${years} year` + (years > 1 ? 's' : ''));
        hours %= 8760;

        const months = Math.floor(hours / 730);
        if (months > 0) parts.push(`${months} month` + (months > 1 ? 's' : ''));
        hours %= 730;

        const weeks = Math.floor(hours / 168);
        if (weeks > 0) parts.push(`${weeks} week` + (weeks > 1 ? 's' : ''));
        hours %= 168;

        const days = Math.floor(hours / 24);
        if (days > 0) parts.push(`${days} day` + (days > 1 ? 's' : ''));
        hours %= 24;

        const h = Math.floor(hours);
        if (h > 0) parts.push(`${h} hour` + (h > 1 ? 's' : ''));

        const minutes = Math.floor((hours % 1) * 60);
        if (minutes > 0) parts.push(`${minutes} minute` + (minutes > 1 ? 's' : ''));

        const seconds = Math.floor(((hours % 1) * 60 % 1) * 60);
        if (seconds > 0 || parts.length === 0) parts.push(`${seconds} second` + (seconds > 1 ? 's' : ''));

        return parts.join(', ');
    }

    return {
        formatNumber,
        formatHours
    };
}