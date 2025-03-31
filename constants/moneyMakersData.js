import useFormat from "~/composables/format.js";
import currencies from "~/constants/currencies.js";

export default [
    {
        name: 'French RSA',
        hourlyWage: 647.79 / 35 / 4,
        displayed: false,
        sources: [
            {
                text: 'To properly compare the RSA with the minimum wage, we emulate a 35-hour work week.<br>' +
                    '647.79 / 35 / 4 = ' + useFormat().formatNumber(647.79 / 35 / 4) + ' per hour',
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
                    useFormat().formatNumber((32000 * 0.78) / 1820) + ' per hour',
                link: 'https://www.glassdoor.fr/Salaires/developpeur-web-junior-salaire-SRCH_KO0,22.htm',
            }
        ]
    },
    {
        name: 'Asset manager',
        hourlyWage: (43000 * 0.78) / 1820,
        displayed: false,
        sources: [
            {
                name: 'Indeed',
                text: '€43,000 a year',
                link: 'https://fr.indeed.com/conseils-carrieres/remuneration-salaire/salaire-gestionnaire-patrimoine',
            }
        ]
    },{
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
        name: 'Average French CEO annual salary',
        hourlyWage: 200000 / 1820,
        displayed: false,
        sources: [
            // {
            //     name: '',
            //     text: '',
            //     link: ''
            // }
        ]
    },
    {
        name: 'Alexandre Bompard (Carrefour CEO)',
        hourlyWage: 9000000 / 1820,
        displayed: false,
        sources: [
            // {
            //     name: '',
            //     text: '',
            //     link: ''
            // }
        ]
    },
    {
        name: 'Jeff Bezos',
        hourlyWage: 7900000 * currencies.usdToEur,
        displayed: false,
        sources: [
            // {
            //     name: '',
            //     text: '',
            //     link: ''
            // }
        ]
    },
    {
        name: 'Elon Musk',
        hourlyWage: 23110000 * currencies.usdToEur,
        displayed: true,
        sources: [
            {
                name: 'Yahoo! Finance',
                text: '<i>For a leap year like 2024, that breaks down to approximately $554.64 million a day, $23.11 ' +
                    'million an hour or a jaw-dropping $6,420 per second. While these numbers make for great trivia, ' +
                    'they\'re not reflective of an hourly wage – it\'s more about the rapid growth of his assets, ' +
                    'primarily tied to Tesla and SpaceX stock.</i>',
                link: 'https://finance.yahoo.com/news/elon-musk-richest-man-world-151517895.html'
            },
            {
                text: 'As explained in the article, it is difficult to compare the growth of Musk\'s fortune with an ' +
                    'income as such. However, it\s pretty clear that the purpose of this application is not so much ' +
                    'to demonstrate great scientific skill as to highlight the great inequalities between rich and poor.'
            }
        ]
    }
];
