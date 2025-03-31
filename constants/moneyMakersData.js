import useFormat from "~/composables/format.js";

export default [
    {
        name: 'French RSA',
        hourlyWage: 647.79 / 35 / 4,
        displayed: true,
        source: {
            name: 'Mes Allocs.fr',
            link: 'https://www.mes-allocs.fr/guides/rsa/montant-rsa/rsa-augmentation/'
        }
    },
    {
        name: 'French SMIC',
        hourlyWage: 9.4,
        displayed: true,
        source: {
            name: 'Service-Public.fr',
            link: 'https://www.service-public.fr/particuliers/vosdroits/F2300'
        }
    },
    {
        name: 'Web developer starting salary',
        hourlyWage: (33000 * 0.78) / 1820,
        displayed: false,
        source: {
            text: 'Net salary, 40 hours a week :<br>' +
                '(gross salary * 78 %) / worked hours a year =<br>' +
                '(33000 * 0.78) / 1820 =<br>' +
                useFormat().formatNumber((33000 * 0.78) / 1820) + ' per hour',
        }
    },
    {
        name: 'Average French CEO annual salary',
        hourlyWage: 200000 / 1820,
        displayed: true,
        source: {
            name: '',
            text: '',
            link: ''
        }
    },
    {
        name: 'Alexandre Bompard (Carrefour CEO)',
        hourlyWage: 9000000 / 1820,
        displayed: false,
        source: {
            name: '',
            text: '',
            link: ''
        }
    },
    {
        name: 'Jeff Bezos',
        hourlyWage: 7900000 * 0.92,
        displayed: false,
        source: {
            name: '',
            text: '',
            link: ''
        }
    },
    {
        name: 'Elon Musk',
        hourlyWage: 23000000 * 0.92,
        displayed: true,
        source: {
            name: '',
            link: ''
        }
    }
];
