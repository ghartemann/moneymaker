import useFormat from "~/composables/useFormat.js";
import currencies from "~/constants/currencies.js";
import type { Wage } from "~/interfaces/Wage";

const wagesData: Wage[] = [
    {
        name: 'Bengali minimum wage',
        hourlyWage: 0.24 * currencies.usdToEur,
        displayed: false,
        sources: [
            {
                name: 'FairLabor.org',
                text: '<i>The hourly wage for garment workers in Bangladesh varies, but the legal minimum is based on a ' +
                    'monthly wage. The current minimum wage for the garment sector is 12,500 Bangladeshi taka (BDT) per ' +
                    'month, which is roughly equivalent to $113 USD. This translates to approximately 24 cents per hour ' +
                    'for a 48-hour workweek. </i>',
                link: 'https://www.fairlabor.org/resource/fair-labor-associations-bangladesh-wage-trends-report-and-recommendations'
            },
        ]
    },
    {
        name: 'French RSA',
        hourlyWage: 647.79 / 35 / 4,
        displayed: false,
        sources: [
            {
                text: 'To properly compare the RSA with the minimum wage, we emulate a 35-hour work week.<br>' +
                    '647.79 / 35 / 4 = ' + useFormat().formatPrice(647.79 / 35 / 4) + ' per hour',
            },
            {
                name: 'Service-Public.fr',
                text: '[French] active solidarity income (ASI/RSA) provides a minimum level of income for people without resources ' +
                    'that varies according to the composition of the household.',
                link: 'https://www.service-public.fr/particuliers/vosdroits/N19775?lang=en'
            },
            {
                name: 'Mes Allocs.fr',
                link: 'https://www.mes-allocs.fr/guides/rsa/montant-rsa/rsa-augmentation/'
            }
        ]
    },
    {
        name: 'American minimum wage',
        hourlyWage: 7.25 * currencies.usdToEur,
        displayed: false,
        sources: [
            {
                name: 'Wikipedia',
                text: '<i>In 2009, Congress increased it to $7.25 per hour with the Fair Minimum Wage Act of 2007.</i>',
                link: 'https://en.wikipedia.org/wiki/Minimum_wage_in_the_United_States'
            }
        ]
    },
    {
        name: 'French minimum wage',
        hourlyWage: 9.4,
        displayed: true,
        sources: [
            {
                name: 'Service-Public.fr',
                link: 'https://www.service-public.fr/particuliers/vosdroits/F2300',
                date: '2024-11-01'
            }
        ]
    },
    {
        name: 'Junior web developer',
        hourlyWage: (32000 * 0.78) / 1820,
        displayed: true,
        sources: [
            {
                name: 'Glassdoor',
                text: 'Net salary, 40 hours a week :<br>' +
                    '(gross salary * 78 %) / worked hours a year =<br>' +
                    '(32000 * 0.78) / 1820 =<br>' +
                    useFormat().formatPrice((32000 * 0.78) / 1820) + ' per hour',
                link: 'https://www.glassdoor.fr/Salaires/developpeur-web-junior-salaire-SRCH_KO0,22.htm',
            }
        ]
    },
    {
        name: 'Real estate asset manager',
        hourlyWage: (43000 * 0.78) / 1820,
        displayed: false,
        sources: [
            {
                name: 'Indeed',
                text: '€43,000 a year',
                link: 'https://fr.indeed.com/conseils-carrieres/remuneration-salaire/salaire-gestionnaire-patrimoine',
            }
        ]
    },
    {
        name: 'Head of Human Resources',
        hourlyWage: (85000 * 0.78) / 1820,
        displayed: false,
        sources: [
            {
                name: 'Jobteaser',
                text: '€85,000 a year',
                link: 'https://www.jobteaser.com/fr/job-roles/salary/drh',
            }
        ]
    },
    {
        name: 'Average CAC40 CEO',
        hourlyWage: 2611255 / 1820,
        displayed: false,
        sources: [
            {
                name: 'Zone Bourse',
                text: '<i>Dirigeant-type : le salaire annuel moyen s’élève à 2 611 255 euros, la médiane à 2 097 607 euros.</i>',
                date: '2025-04-23',
                link: 'https://www.zonebourse.com/actualite-bourse/Classement-2024-des-remunerations-des-PDG-du-CAC-40-49687732'
            }
        ]
    },
    {
        name: 'Alexandre Bompard',
        subName: 'Carrefour CEO',
        hourlyWage: 9000000 / 1820,
        displayed: false,
        sources: [
            {
                name: 'Capital',
                text: '<i>For 2023, Alexandre Bompard will receive more than €9 million in total: at least €4.5 million ' +
                    'in salary and up to €5.3 million in shares.</i>',
                date: '2024-05-25',
                link: 'https://www.capital.fr/entreprises-marches/carrefour-les-9-millions-d-euros-du-pdg-exasperent-les-salaries-mais-pas-les-actionnaires-1497240'
            }
        ]
    },
    {
        name: 'Bernard Charlès',
        subName: 'Dassault CEO',
        hourlyWage: 46791047 / 1820,
        displayed: false,
        sources: [
            {
                name: 'Oxfam France',
                link: 'https://www.oxfamfrance.org/communiques-de-presse/le-6-janvier-a-16h49-les-pdg-du-cac-40-ont-deja-gagne-le-salaire-moyen-de-leurs-entreprises/',
                date: '2025-01-06'
            }
        ]
    },
    {
        name: 'Mark Zuckerberg',
        subName: 'Meta CEO, reptilian',
        hourlyWage: 2700000 * currencies.usdToEur,
        displayed: false,
        sources: [
            {
                name: 'Quora',
                text: '<i>Mark Zuckerberg\'s estimated hourly earnings fluctuate based on Meta’s stock performance, but ' +
                    'using an annual increase of $24 billion as an example, he could earn about $2.7 million per hour on average.</i>',
                link: 'https://www.quora.com/How-much-does-Mark-Zuckerberg-earn-per-hour'
            }
        ]
    },
    {
        name: 'Jeff Bezos',
        subName: 'Amazon CEO',
        hourlyWage: 7990000 * currencies.usdToEur,
        displayed: false,
        sources: [
            {
                name: 'Yahoo! Finance',
                text: '<i>In 2023 alone, Bezos’s net worth increased by $70 billion, from $107 billion to $177 billion. ' +
                    'This means he earned around $191.78 million per day or an incredible $7.99 million per hour. ' +
                    'His wealth growth was largely driven by the value of Amazon stock, in which he owns around 9%.</i>',
                date: '2024-07-09',
                link: 'https://finance.yahoo.com/news/jeff-bezos-earns-7-9-211032368.html'
            }
        ]
    },
    {
        name: 'Elon Musk',
        subName: 'Tesla, Twitter, SpaceX CEO',
        hourlyWage: 23110000 * currencies.usdToEur,
        displayed: true,
        sources: [
            {
                name: 'Yahoo! Finance',
                text: '<i>For a leap year like 2024, that breaks down to approximately $554.64 million a day, $23.11 ' +
                    'million an hour or a jaw-dropping $6,420 per second. While these numbers make for great trivia, ' +
                    'they\'re not reflective of an hourly wage – it\'s more about the rapid growth of his assets, ' +
                    'primarily tied to Tesla and SpaceX stock.</i>',
                date: '2025-01-21',
                link: 'https://finance.yahoo.com/news/elon-musk-richest-man-world-151517895.html'
            },
            {
                text: 'As explained in the article, it is difficult to compare the growth of Musk\'s fortune with an ' +
                    'income as such. However, it\s pretty clear that the purpose of this application is not so much ' +
                    'to demonstrate great science as to highlight the great inequalities between rich folks and the rest of us. ' +
                    'Please read the About section for more information.',
            }
        ]
    }
];

export default wagesData;
