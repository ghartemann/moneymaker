import useFormat from "~/composables/format.js";

export default [
    {
        name: 'French RSA',
        hourlyWage: 647.79 / 35 / 4,
        displayed: false,
        sources: [
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
        hourlyWage: 7900000 * 0.92,
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
        hourlyWage: 23000000 * 0.92,
        displayed: true,
        sources: [
            // {
            //     name: '',
            //     link: ''
            // }
        ]
    }
];
