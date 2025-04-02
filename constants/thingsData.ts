import currencies from "~/constants/currencies.js";
import type {Thing} from "~/constants/interfaces/Thing";

const thingsData: Thing[] = [
    {
        name: 'A baguette',
        slug: 'baguette',
        icon: 'i-lucide-ruler',
        price: {
            eur: 1.2,
            usd: 1.2 * currencies.eurToUsd,
            gbp: 1.2 * currencies.eurToGbp,
            cad: 1.2 * currencies.eurToCad,
        },
        sources: []
    },
    {
        name: 'Bus fare',
        slug: 'bus',
        icon: 'i-lucide-bus',
        price: {
            eur: 2.5,
            usd: 2.5 * currencies.eurToUsd,
            gbp: 2.5 * currencies.eurToGbp,
            cad: 2.5 * currencies.eurToCad,
        },
        sources: []
    },
    {
        name: 'A pint (50 cL) of beer',
        slug: 'beer',
        icon: 'i-lucide-beer',
        price: {
            eur: 6.5,
            usd: 6.5 * currencies.eurToUsd,
            gbp: 6.5 * currencies.eurToGbp,
            cad: 6.5 * currencies.eurToCad,
        },
        sources: []
    },
    {
        name: 'Lunch',
        slug: 'lunch',
        icon: 'i-lucide-utensils',
        price: {
            eur: 16,
            usd: 16 * currencies.eurToUsd,
            gbp: 16 * currencies.eurToGbp,
            cad: 16 * currencies.eurToCad,
        },
        sources: []
    },
    {
        name: 'A pair of Doc Martens',
        slug: 'docs',
        icon: 'i-lucide-footprints',
        price: {
            eur: 230,
            usd: 230 * currencies.eurToUsd,
            gbp: 230 * currencies.eurToGbp,
            cad: 230 * currencies.eurToCad,
        },
        sources: []
    },
    {
        name: 'An iPhone 16 Pro',
        slug: 'iphone',
        icon: 'i-lucide-smartphone',
        price: {
            eur: 1229,
            usd: 1229 * currencies.eurToUsd,
            gbp: 1229 * currencies.eurToGbp,
            cad: 1229 * currencies.eurToCad,
        },
        sources: []
    },
    {
        name: 'An overpriced gaming PC',
        slug: 'gaming-pc',
        icon: 'i-lucide-pc-case',
        price: {
            eur: 5999.95,
            usd: 5999.95 * currencies.eurToUsd,
            gbp: 5999.95 * currencies.eurToGbp,
            cad: 5999.95 * currencies.eurToCad,
        },
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
        price: {
            eur: 40000, // 40k
            usd: 40000 * currencies.eurToUsd,
            gbp: 40000 * currencies.eurToGbp,
            cad: 40000 * currencies.eurToCad,
        },
        sources: []
    },
    {
        name: 'A decent Rolex',
        slug: 'rolex',
        icon: 'i-lucide-watch',
        price: {
            eur: 59800, // 59.8k
            usd: 59800 * currencies.eurToUsd,
            gbp: 59800 * currencies.eurToGbp,
            cad: 59800 * currencies.eurToCad,
        },
        sources: []
    },
    {
        name: 'A Tesla Model S',
        slug: 'tesla',
        icon: 'i-lucide-car-front',
        price: {
            eur: 112390, // 112.3 k
            usd: 112390 * currencies.eurToUsd,
            gbp: 112390 * currencies.eurToGbp,
            cad: 112390 * currencies.eurToCad,
        },
        sources: []
    },
    {
        name: 'A not so big house',
        slug: 'house',
        icon: 'i-lucide-house',
        price: {
            eur: 350000, // 350k
            usd: 350000 * currencies.eurToUsd,
            gbp: 350000 * currencies.eurToGbp,
            cad: 350000 * currencies.eurToCad,
        },
        sources: []
    },
    {
        name: 'A 90 min tour to space',
        slug: 'space-tour',
        icon: 'i-lucide-orbit',
        price: {
            eur: 450000 * currencies.usdToEur,
            usd: 450000, // 450k
            gbp: 450000 * currencies.usdToGbp,
            cad: 450000 * currencies.usdToCad,
        },
        sources: [
            {
                name: 'Sky News',
                text: '<i>A ticket for a 90-minute trip to space will set you back $450,000 (£356,000). According to ' +
                    'Virgin Galactic, it\'s a price people are willing to pay. "Demand is high", the company\'s website ' +
                    'says, with several hundred customers already in line to fly.</i>',
                date: '2024-01-12',
                link: 'https://news.sky.com/story/virgin-galactics-first-commercial-space-flight-is-set-to-take-off-what-will-happen-on-board-and-how-much-are-tickets-12911100'
            }
        ]
    },
    {
        name: 'A Titan Zeus 370-Inch 4K TV',
        slug: 'tv',
        icon: 'i-lucide-tv-minimal',
        price: {
            eur: 490000 * currencies.usdToEur,
            usd: 1700000, // 1.7 million
            gbp: 490000 * currencies.usdToGbp,
            cad: 490000 * currencies.usdToCad,
        },
        sources: []
    },
    {
        name: 'An entry level private jet',
        slug: 'jet',
        icon: 'i-lucide-plane',
        price: {
            eur: 2500000 * currencies.usdToEur,
            usd: 2500000, // 2.5 million
            gbp: 2500000 * currencies.usdToGbp,
            cad: 2500000 * currencies.usdToCad,
        },
        sources: [{
            name: 'BankRate',
            text: '<i>The price for a brand-new private jet ranges from about $2.5 million to $660 million. The price is ' +
                'determined by many factors, including the size, maker, range, customization and what the jet offers, ' +
                'like the engines and avionics.</i>',
            date: '2024-11-09',
            link: 'https://www.bankrate.com/loans/personal-loans/how-much-does-a-private-jet-cost/'
        }]
    },
    {
        name: 'Trump\'s gold toilet',
        slug: 'toilet',
        icon: 'i-lucide-toilet',
        price: {
            eur: 4900000 * currencies.gbpToEur,
            usd: 4900000 * currencies.gbpToUsd,
            gbp: 4900000, // 4.9 million
            cad: 4900000 * currencies.gbpToCad,
        },
        sources: [
            {
                name: 'CNN Style',
                text: '<i>The satirical work, titled “America” by Italian conceptual artist Maurizio Cattelan, poked fun at ' +
                    'excessive wealth. It weighed just over 215 pounds (98 kilograms) and was insured for £4.8 million ' +
                    '($6 million). The value of the gold at the time was £2.8 million ($3.5 million).The piece had ' +
                    'previously been on display at The Guggenheim Museum in New York. The museum had offered the work to ' +
                    'US President Donald Trump during his first term in office after he had asked to borrow a Van Gogh painting.</i>',
                date: '2025-02-25',
                link: 'https://edition.cnn.com/2025/02/25/style/gold-toilet-trial-blenheim-palace'
            }
        ]
    },
    {
        name: 'A Caribbean private island',
        slug: 'island',
        icon: 'i-lucide-tree-palm',
        price: {
            eur: 9995000 * currencies.usdToEur,
            usd: 9995000, // 9.995 million
            gbp: 9995000 * currencies.usdToGbp,
            cad: 9995000 * currencies.usdToCad,
        },
        sources: [
            {
                name: 'Private Islands Inc.',
                link: 'https://www.privateislandsonline.com/caribbean/bahamas/the-abacos/coconut-palm-bay-the-ultimate-private-island-style-retreat'
            }
        ]
    },
    {
        name: 'A TGV Duplex train',
        slug: 'tgv',
        icon: 'i-lucide-train-front',
        price: {
            eur: 32400000, // 32.4 million
            usd: 32400000 * currencies.eurToUsd,
            gbp: 32400000 * currencies.eurToGbp,
            cad: 32400000 * currencies.eurToCad,
        },
        sources: [
            {
                name: 'Wikipedia',
                link: 'https://fr.wikipedia.org/wiki/TGV#Prix_d\'une_rame_TGV'
            }
        ]
    },
    {
        name: 'A 65m long yacht',
        slug: 'yacht',
        icon: 'i-lucide-ship',
        price: {
            eur: 35000000, // 35 million
            usd: 35000000 * currencies.eurToUsd,
            gbp: 35000000 * currencies.eurToGbp,
            cad: 35000000 * currencies.eurToCad,
        },
        sources: [
            {
                name: 'Boat International',
                date: '2024-10-28',
                link: 'https://www.boatinternational.com/yachts-for-sale/eternity-codecasa-2010'
            }
        ]
    },
    {
        name: 'A Falcon Heavy launch',
        slug: 'spacex',
        icon: 'i-lucide-rocket',
        price: {
            eur: 97000000 * currencies.usdToEur,
            usd: 97000000, // 97 million
            gbp: 97000000 * currencies.usdToGbp,
            cad: 97000000 * currencies.usdToCad,
        },
        sources: [
            {
                name: 'Wikipedia',
                text: '<i>In 2022, the published price for a reusable launch was $97 million.</i>',
                link: 'https://en.wikipedia.org/wiki/Falcon_Heavy#Launch_prices'
            }
        ]
    },
    {
        name: 'Trump\'s inauguration',
        slug: 'trump',
        icon: 'i-lucide-angry',
        price: {
            eur: 170000000 * currencies.usdToEur,
            usd: 170000000, // 170 million
            gbp: 170000000 * currencies.usdToGbp,
            cad: 170000000 * currencies.usdToCad,
        },
        sources: [
            {
                name: 'CBC',
                text: '<i>Trump\'s second inaugural fund has so far raised $170 million US, breaking the record he set in 2017 [...]</i>',
                date: '2025-01-16',
                link: 'https://www.cbc.ca/news/business/corporate-donors-trump-inauguration-1.7430028'
            }
        ]
    },
    {
        name: 'A brand new Boeing 747',
        slug: 'boeing',
        icon: 'i-lucide-plane-takeoff',
        price: {
            eur: 220000000 * currencies.usdToEur,
            usd: 220000000, // 220 million
            gbp: 220000000 * currencies.usdToGbp,
            cad: 220000000 * currencies.usdToCad,
        },
        sources: [
            {
                name: 'EM Airplane',
                link: 'https://www.emairplane.com/journal/how-much-does-a-boeing-747-jet-cost'
            }
        ]
    },
    {
        name: 'A penthouse in Monaco',
        slug: 'penthouse',
        icon: 'i-lucide-building-2',
        price: {
            eur: 335000000 * currencies.usdToEur,
            usd: 335000000, // 335 million
            gbp: 335000000 * currencies.usdToGbp,
            cad: 335000000 * currencies.usdToCad,
        },
        sources: [
            {
                name: 'Homesmontecarlo.com',
                date: '2025-01-23',
                text: '<i>This penthouse, perched atop the Odeon Tower, embodies the ultimate in luxury real estate in ' +
                    'Monaco. With an estimated market value of 335 million euros, it is the most expensive apartment in ' +
                    'the world, attracting the attention of wealthy investors in search of exceptional properties.</i>',
                link: 'https://www.homesmontecarlo.com/the-secrets-of-the-worlds-most-expensive-apartment-in-monaco'
            }
        ]
    },
    {
        name: 'Lyon\'s Groupama Stadium',
        slug: 'stadium',
        icon: 'i-lucide-trophy',
        price: {
            eur: 480000000, // 480 million
            usd: 480000000 * currencies.eurToUsd,
            gbp: 480000000 * currencies.eurToGbp,
            cad: 480000000 * currencies.eurToCad,
        },
        sources: [
            {
                name: 'Wikipedia',
                link: 'https://fr.wikipedia.org/wiki/Parc_Olympique_lyonnais'
            }
        ]
    },
    {
        name: 'Disneyland Paris',
        slug: 'disneyland',
        icon: 'i-lucide-roller-coaster',
        price: {
            eur: 2000000000 * currencies.usdToEur,
            usd: 2000000000, // 2 billion
            gbp: 2000000000 * currencies.usdToGbp,
            cad: 2000000000 * currencies.usdToCad,
        },
        sources: [
            {
                name: 'Statista',
                text: '<i>As of May 2024, Disneyland Paris was the highest valued theme park in Europe with an ' +
                    'estimated value of two billion U.S. dollars. Meanwhile, Legoland Windsor ranked second with an ' +
                    'estimated value of 671 million U.S. dollars.</i>',
                link: 'https://www.statista.com/statistics/922212/leading-theme-parks-based-on-value-in-europe'
            }
        ]
    },
    {
        name: '€1 per person alive',
        slug: 'people',
        icon: 'i-lucide-person-standing',
        price: {
            //TODO: voir quoi faire
            eur: 8214773127, // 8.2 billion
            usd: 8214773127,
            gbp: 8214773127,
            cad: 8214773127,
        },
        sources: [
            {
                name: 'Worldometer',
                date: '2025-04-02',
                link: 'https://www.worldometers.info/world-population'
            }
        ]
    },
    {
        name: 'Central Park, NYC',
        slug: 'central-park',
        icon: 'i-lucide-trees',
        price: {
            eur: 36000000000 * currencies.usdToEur,
            usd: 36000000000, // 36 billion
            gbp: 36000000000 * currencies.usdToGbp,
            cad: 36000000000 * currencies.usdToCad,
        },
        sources: [
            {
                name: 'Quora',
                text: '<i>As of 2023, real estate values in Manhattan can range significantly, often exceeding $1,000 ' +
                    'per square foot in prime areas. Central Park covers approximately 843 acres, which is about ' +
                    '36,000,000 square feet. If we use a conservative estimate of $1,000 per square foot for the land, ' +
                    'the total value could be around $36 billion.</i>',
                link: 'https://www.quora.com/How-much-is-the-land-in-Central-Park-worth'
            },
            {
                text: 'Disclaimers: this is an AI estimation, so it\'s probably terrible, plus converting Central Park ' +
                    'to housing would actually devaluate property value so much that this number is probably way, way off, but whatever.'
            }
        ]
    },
    {
        name: 'Twitter',
        slug: 'twitter',
        icon: 'i-lucide-twitter',
        price: {
            eur: 44000000000 * currencies.usdToEur,
            usd: 44000000000, // 44 billion
            gbp: 44000000000 * currencies.usdToGbp,
            cad: 44000000000 * currencies.usdToCad,
        },
        sources: [
            {
                name: 'Wikipedia',
                text: '<i>On April 14, Musk made an unsolicited offer to purchase the company, to which Twitter\'s board ' +
                    'responded with a "poison pill" strategy to resist a hostile takeover before unanimously accepting ' +
                    'Musk\'s buyout offer of $44 billion on April 25.</i>',
                link: 'https://en.wikipedia.org/wiki/Acquisition_of_Twitter_by_Elon_Musk'
            }
        ]
    },
    {
        name: 'Building 500k soc. housing units',
        slug: 'housing',
        icon: 'i-lucide-home',
        price: {
            eur: 156000 * 500000, // 78 billion,
            usd: 156000 * 500000 * currencies.eurToUsd,
            gbp: 156000 * 500000 * currencies.eurToGbp,
            cad: 156000 * 500000 * currencies.eurToCad,
        },
        sources: [
            {
                name: 'Caisse des Dépôts',
                date: '2021-11-10',
                link: 'https://www.caissedesdepots.fr/blog/article/couts-de-construction-des-logements-sociaux'
            }
        ]
    },
    {
        name: 'Tax fraud in France',
        slug: 'tax-fraud',
        icon: 'i-lucide-hand-coins',
        price: {
            eur: 80000000000, // 80 billion
            usd: 80000000000 * currencies.eurToUsd,
            gbp: 80000000000 * currencies.eurToGbp,
            cad: 80000000000 * currencies.eurToCad,
        },
        sources: [
            {
                name: 'Le Monde',
                text: '<i>Unlike many countries, France has no rigorous assessment of the sums that escape taxation, notes ' +
                    'the financial institution in a report. [...] The amount of tax fraud, estimated at between 60 and 80 ' +
                    'billion euros a year (up to 100 billion according to figures from the Solidaires Finances publiques ' +
                    'trade union) [...]</i> (translation)',
                date: '2023-11-15',
                link: 'https://www.lemonde.fr/politique/article/2023/11/15/la-cour-des-comptes-presse-l-executif-de-chiffrer-la-fraude-fiscale_6200227_823448.html'
            }
        ]
    },
    {
        name: 'Ending world hunger',
        slug: 'hunger',
        icon: 'i-lucide-shield-plus',
        price: {
            eur: 296000000000, // 296 billion
            usd: 296000000000 * currencies.eurToUsd,
            gbp: 296000000000 * currencies.eurToGbp,
            cad: 296000000000 * currencies.eurToCad,
        },
        sources: [
            {
                name: 'Oxfam America',
                text: '<i>Current estimates suggest that as of this year, we need donor governments to invest around $37 ' +
                    'billion every year until 2030 to tackle both extreme and chronic hunger.</i>',
                date: '2022',
                link: 'https://www.oxfamamerica.org/explore/stories/how-much-money-would-it-take-to-end-world-hunger/'
            }
        ]
    },
    {
        name: 'Elon Musk',
        slug: 'trash',
        icon: 'i-lucide-trash-2',
        price: {
            eur: 450000000000 * currencies.usdToEur,
            usd: 450000000000, // 450 billion
            gbp: 450000000000 * currencies.usdToGbp,
            cad: 450000000000 * currencies.usdToCad,
        },
        sources: [
            {
                name: 'Bloomberg',
                link: 'https://www.bloomberg.com/billionaires/profiles/elon-r-musk/'
            }
        ]
    }
];

export default thingsData;
