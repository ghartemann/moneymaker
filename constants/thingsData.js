import currencies from "~/constants/currencies.js";

export default [
    {
        name: 'A baguette',
        slug: 'baguette',
        icon: 'i-lucide-ruler',
        price: 1.2,
        sources: []
    },
    {
        name: 'Bus fare',
        slug: 'bus',
        icon: 'i-lucide-bus',
        price: 2.5,
        sources: []
    },
    {
        name: 'Lunch',
        slug: 'lunch',
        icon: 'i-lucide-utensils',
        price: 16,
        sources: []
    },
    {
        name: 'Doc Martens',
        slug: 'docs',
        icon: 'i-lucide-footprints',
        price: 230,
        sources: []
    },
    {
        name: 'iPhone 16 Pro',
        slug: 'iphone',
        icon: 'i-lucide-smartphone',
        price: 1229,
        sources: []
    },
    {
        name: 'An overpriced gaming PC',
        slug: 'gaming-pc',
        icon: 'i-lucide-pc-case',
        price: 5999.95,
        sources: [
            {
                name: 'LDLC',
                text: '- Intel Core i9-14900KF processor (8 Performance-Cores 3.2 GHz + 16 Efficient-Cores 2.4 GHz - 32 Threads - 36 MB Cache)<br>' +
                    '- MSI AIO liquid cooling system with 240 mm radiator<br>' +
                    '- 64 GB DDR5 5600 MHz memory with heatsinks (2x 16 GB - 2 slots - maximum 64 GB total)<br>' +
                    '- NVIDIA GeForce RTX 4090 graphics card with 24 GB GDDR6 dedicated memory<br>' +
                    '- 2 TB PCIe M.2 SSD + 2 TB hard drive<br>' +
                    '(translation)',
                link: 'https://www.ldlc.com/fiche/PB00583336.html'
            }
        ]
    },
    {
        name: 'A (nice) car',
        slug: 'car',
        icon: 'i-lucide-car',
        price: 40000,
        sources: []
    },
    {
        name: 'A Rolex made of gold',
        slug: 'rolex',
        icon: 'i-lucide-watch',
        price: 59800,
        sources: []
    },
    {
        name: 'Tesla Model S',
        slug: 'tesla',
        icon: 'i-lucide-car-front',
        price: 112390,
        sources: []
    },
    {
        name: 'A house',
        slug: 'house',
        icon: 'i-lucide-house',
        price: 350000,
        sources: []
    },
    {
        name: 'Titan Zeus 370-Inch 4K TV',
        slug: 'tv',
        icon: 'i-lucide-tv-minimal',
        price: 1700000,
        sources: []
    },
    {
        name: 'Entry level private jet',
        slug: 'jet',
        icon: 'i-lucide-plane',
        price: 2500000,
        sources: [{
            name: 'BankRate',
            text: 'The price for a brand-new private jet ranges from about $2.5 million to $660 million. The price is ' +
                'determined by many factors, including the size, maker, range, customization and what the jet offers, ' +
                'like the engines and avionics.',
            date: '2024-11-09',
            link: 'https://www.bankrate.com/loans/personal-loans/how-much-does-a-private-jet-cost/'
        }]
    },
    {
        name: 'Trump\'s gold toilet',
        slug: 'toilet',
        icon: 'i-lucide-toilet',
        price: (4800000 * currencies.gbpToEur).toFixed(),
        sources: [{
            name: 'CNN Style',
            text: 'The satirical work, titled “America” by Italian conceptual artist Maurizio Cattelan, poked fun at ' +
                'excessive wealth. It weighed just over 215 pounds (98 kilograms) and was insured for £4.8 million ' +
                '($6 million). The value of the gold at the time was £2.8 million ($3.5 million).The piece had ' +
                'previously been on display at The Guggenheim Museum in New York. The museum had offered the work to ' +
                'US President Donald Trump during his first term in office after he had asked to borrow a Van Gogh painting.',
            date: '2025-02-25',
            link: 'https://edition.cnn.com/2025/02/25/style/gold-toilet-trial-blenheim-palace'
        }]
    },
    {
        name: 'A Caribbean private island',
        slug: 'island',
        icon: 'i-lucide-tree-palm',
        price: 9995000,
        sources: [{
            name: 'Private Islands Inc.',
            link: 'https://www.privateislandsonline.com/caribbean/bahamas/the-abacos/coconut-palm-bay-the-ultimate-private-island-style-retreat'
        }]
    },
    {
        name: 'A 65m long yacht',
        slug: 'yacht',
        icon: 'i-lucide-ship',
        price: 35000000,
        sources: [{
            name: 'Boat International',
            date: '2024-10-28',
            link: 'https://www.boatinternational.com/yachts-for-sale/eternity-codecasa-2010'
        }]
    },
    {
        name: 'A Falcon Heavy launch',
        slug: 'spacex',
        icon: 'i-lucide-rocket',
        price: 97000000,
        sources: []
    },
    {
        name: 'Trump\'s inauguration',
        slug: 'trump',
        icon: 'i-lucide-angry',
        price: 170000000,
        sources: [{
            name: 'CBC',
            text: 'Trump\'s second inaugural fund has so far raised $170 million US, breaking the record he set in 2017',
            date: '2025-01-16',
            link: 'https://www.cbc.ca/news/business/corporate-donors-trump-inauguration-1.7430028'
        }]
    },
    {
        name: 'A Boeing 747',
        slug: 'boeing',
        icon: 'i-lucide-plane-takeoff',
        price: 220000000,
        sources: []
    },
    {
        name: 'A penthouse in Monaco',
        slug: 'penthouse',
        icon: 'i-lucide-building-2',
        price: 335000000,
        sources: [{
            name: 'Homesmontecarlo.com',
            date: '2025-01-23',
            text: 'This penthouse, perched atop the Odeon Tower, embodies the ultimate in luxury real estate in ' +
                'Monaco. With an estimated market value of 335 million euros, it is the most expensive apartment in ' +
                'the world, attracting the attention of wealthy investors in search of exceptional properties.',
            link: 'https://www.homesmontecarlo.com/the-secrets-of-the-worlds-most-expensive-apartment-in-monaco'
        }]
    },
    {
        name: 'Twitter',
        slug: 'twitter',
        icon: 'i-lucide-twitter',
        price: 44000000000,
        sources: [{
            name: 'Wikipedia',
            text: 'On April 14, Musk made an unsolicited offer to purchase the company, to which Twitter\'s board ' +
                'responded with a "poison pill" strategy to resist a hostile takeover before unanimously accepting ' +
                'Musk\'s buyout offer of $44 billion on April 25.',
            link: 'https://en.wikipedia.org/wiki/Acquisition_of_Twitter_by_Elon_Musk'
        }]
    },
    {
        name: 'Tax fraud in France',
        slug: 'tax-fraud',
        icon: 'i-lucide-hand-coins',
        price: 80000000000,
        sources: [{
            name: 'Le Monde',
            text: 'Unlike many countries, France has no rigorous assessment of the sums that escape taxation, notes ' +
                'the financial institution in a report. [...] The amount of tax fraud, estimated at between 60 and 80 ' +
                'billion euros a year (up to 100 billion according to figures from the Solidaires Finances publiques ' +
                'trade union) [...] (translation)',
            date: '2023-11-15',
            link: 'https://www.lemonde.fr/politique/article/2023/11/15/la-cour-des-comptes-presse-l-executif-de-chiffrer-la-fraude-fiscale_6200227_823448.html'
        }]
    },
    {
        name: 'End world hunger',
        slug: 'hunger',
        icon: 'i-lucide-shield-plus',
        price: 296000000000,
        sources: [{
            name: 'Oxfam America',
            text: 'Current estimates suggest that as of this year, we need donor governments to invest around $37 ' +
                'billion every year until 2030 to tackle both extreme and chronic hunger.',
            date: '2022',
            link: 'https://www.oxfamamerica.org/explore/stories/how-much-money-would-it-take-to-end-world-hunger/'
        }]
    },
    {
        name: 'Elon Musk',
        slug: 'muskrat',
        icon: 'i-lucide-trash-2',
        price: 400000000000,
        sources: []
    }
];
