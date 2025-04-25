import en from "~/i18n/locales/en.json";
import fr from "~/i18n/locales/fr.json";

const translations = { en, fr };

let currentLocale = "en"; // Langue par défaut

export function setLocale(locale: string) {
    if (translations[locale]) {
        currentLocale = locale;
    } else {
        console.warn(`Locale ${locale} not found, falling back to default.`);
    }
}

export function t(key: string): string {
    const keys = key.split(".");
    let value: any = translations[currentLocale];

    for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
            console.warn(`Translation key "${key}" not found for locale "${currentLocale}".`);
            return key;
        }
    }

    return value;
}