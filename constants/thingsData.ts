import type {Thing} from "~/interfaces/Thing";
import useFormat from "~/composables/format";

const thingsData: Thing[] = [
    {
        name: 'A baguette',
        slug: 'baguette',
        icon: 'ruler',
        price: {
            value: 1.2,
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'Bus fare',
        slug: 'bus',
        icon: 'bus',
        price: {
            value: 2.5,
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'Vampire Survivors',
        slug: 'vampire-survivors',
        icon: 'ghost',
        price: {
            value: 4.99,
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'A pint (50 cL) of beer',
        slug: 'beer',
        icon: 'beer',
        price: {
            value: 6.5,
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'Lunch',
        slug: 'lunch',
        icon: 'utensils',
        price: {
            value: 16,
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'Montreal transit monthly pass',
        slug: 'metro',
        icon: 'credit-card',
        price: {
            value: 100,
            currency: 'CAD'
        },
        sources: []
    },
    {
        name: 'A pair of Doc Martens',
        slug: 'docs',
        icon: 'footprints',
        price: {
            value: 230,
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'A standard PS5',
        slug: 'ps5',
        icon: 'gamepad-2',
        price: {
            value: 529.99,
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'An iPhone 16 Pro',
        slug: 'iphone',
        icon: 'smartphone',
        price: {
            value: 1229,
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'French driver license',
        slug: 'driving-license',
        icon: 'car-front',
        price: {
            value: 1800,
            currency: 'EUR'
        },
        sources: [
            {
                name: 'Banque Française Mutualiste',
                text: '<i>According to a study conducted in 2016 by UFC-Que Choisir among 1,076 driving schools, the ' +
                    'average cost of a driver\'s license is 1,804 euros.</i> (translation)',
                link: 'https://banquefrancaisemutualiste.fr/parlons-public/comment-reduire-cout-permis-de-conduire'
            }
        ]
    },
    {
        name: 'Montreal Plateau 2B rent',
        slug: 'rent',
        icon: 'squirrel',
        price: {
            value: 2028,
            currency: 'CAD'
        },
        sources: [
            {
                name: 'Centris.ca',
                link: 'https://www.centris.ca/en/blog/real-estate/average-rent-for-montreal-apartments-in-2024'
            }
        ]
    },
    {
        name: 'An overpriced gaming PC',
        slug: 'gaming-pc',
        icon: 'pc-case',
        price: {
            value: 5999.95,
            currency: 'EUR'
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
        icon: 'car',
        price: {
            value: 40000, // 40k
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'A decent Rolex',
        slug: 'rolex',
        icon: 'watch',
        price: {
            value: 59800, // 59k
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'A Tesla Model S',
        slug: 'tesla',
        icon: 'truck-electric',
        price: {
            value: 112390, // 112k
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'Raising a kid from 1 to 25',
        slug: 'kid',
        icon: 'baby',
        price: {
            value: 264310, // 264k
            currency: 'EUR'
        },
        sources: [
            {
                name: 'Le Parisien',
                text: '<i>Having one or more children comes at a cost that the Belgian insurer AG wanted to determine. ' +
                    'Based on figures from Gezinsbond, a Belgian non-profit organization specializing in household ' +
                    'budgets, it is estimated to be slightly less than that of a small house in Belgium: 264,310 euros ' +
                    'up to the age of 25 for each child.</i> (translation)',
                link: 'https://www.leparisien.fr/societe/combien-coute-un-enfant-a-ses-parents-jusqua-ses-25-ans-19-03-2025-M2L3UA2XJZF4FLPBUXXFIZOTHM.php'
            }
        ]
    },
    {
        name: 'A not so big house',
        slug: 'house',
        icon: 'house',
        price: {
            value: 350000, // 350k
            currency: 'EUR'
        },
        sources: []
    },
    {
        name: 'A 90 min tour to space',
        slug: 'space-tour',
        icon: 'orbit',
        price: {
            value: 450000, // 450k
            currency: 'EUR'
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
        icon: 'tv-minimal',
        price: {
            value: 1600000, // 1.6M
            currency: 'USD'
        },
        sources: [
            {
                name: 'Luxury Retail',
                text: '<i>370-INCH, 4K, Tv Titan Zeus which is bigger than an elephant and cost $1.6million</i>',
                date: '2013',
                link: 'https://luxuryretail.co.uk/titan-zeus/'
            }
        ]
    },
    {
        name: 'An entry level private jet',
        slug: 'jet',
        icon: 'plane',
        price: {
            value: 2500000, // 2.5M
            currency: 'USD'
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
        icon: 'toilet',
        price: {
            value: 4800000, // 4.8M
            currency: 'GBP'
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
        icon: 'tree-palm',
        price: {
            value: 9995000, // 9.995M
            currency: 'USD'
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
        icon: 'train-front',
        price: {
            value: 32400000, // 32.4M
            currency: 'EUR'
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
        icon: 'ship',
        price: {
            value: 35000000, // 35M
            currency: 'EUR'
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
        icon: 'rocket',
        price: {
            value: 97000000, // 97M
            currency: 'USD'
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
        name: 'Losing the Wisconsin election',
        slug: 'wisconsin',
        icon: 'scale',
        price: {
            value: 100000000, // 100 million
            currency: 'USD'
        },
        sources: [
            {
                name: 'PBS Wisconsin',
                text: '<i>Money is pouring into this swing state election so fast and so many ads have been reserved ' +
                    'that political observers now believe the current race is likely to reach $100 million by April 1, ' +
                    'which is election day.</i>',
                date: '2025-03-31',
                link: 'https://pbswisconsin.org/news-item/how-a-2025-election-in-wisconsin-became-the-most-expensive-race-for-a-court-seat-in-us-history/'
            }
        ]
    },
    {
        name: 'Trump\'s inauguration',
        slug: 'trump',
        icon: 'angry',
        price: {
            value: 170000000, // 170 million
            currency: 'USD'
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
        icon: 'plane-takeoff',
        price: {
            value: 220000000, // 220 million
            currency: 'EUR'
        },
        sources: [
            {
                name: 'EM Airplane',
                link: 'https://www.emairplane.com/journal/how-much-does-a-boeing-747-jet-cost'
            }
        ]
    },
    {
        name: 'GTA V dev + marketing',
        slug: 'gta-v',
        icon: 'siren',
        price: {
            value: 352000000, // 352 million
            currency: 'USD'
        },
        sources: [
            {
                name: 'Wikipedia',
                text: 'Media analyst Arvind Bhatia estimated the game\'s development budget exceeded US$137 million, ' +
                    'and The Scotsman reporter Marty McLaughlin estimated that the combined development and marketing ' +
                    'efforts exceeded £170 million (US$265 million), making it the most expensive video game ever made ' +
                    'at its time.',
                link: 'https://en.wikipedia.org/wiki/Development_of_Grand_Theft_Auto_V'
            },
            {
                text: 'The game was released in 2013; adjusting for inflation, that would be about $US352 million in 2025.'
            }
        ]
    },
    {
        name: 'A penthouse in Monaco',
        slug: 'penthouse',
        icon: 'building-2',
        price: {
            value: 335000000, // 335 million
            currency: 'EUR'
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
        icon: 'trophy',
        price: {
            value: 480000000, // 480 million
            currency: 'EUR'
        },
        sources: [
            {
                name: 'Wikipedia',
                link: 'https://fr.wikipedia.org/wiki/Parc_Olympique_lyonnais'
            }
        ]
    },
    {
        name: 'EU\'s 2025-2028 AI budget',
        slug: 'eu-ai-budget',
        icon: 'euro',
        price: {
            value: 900000000, // 900 million
            currency: 'EUR'
        },
        sources: [
            {
                name: 'Politico',
                text: 'A new scale-up scheme is set to get the green light early this week, with a budget of €300 ' +
                    'million for next year, according to a draft plan seen by POLITICO. The total budget for the next ' +
                    'three years — until the end of the EU\'s current budget — amounts to €900 million.',
                link: 'https://www.politico.eu/article/eu-900-million-critical-technology-microchip-quantum/'
            }
        ]
    },
    {
        name: 'Disneyland Paris',
        slug: 'disneyland',
        icon: 'roller-coaster',
        price: {
            value: 2000000000, // 2 billion
            currency: 'USD'
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
        name: 'Trump\'s Truth Social stake',
        slug: 'truth-social',
        icon: 'trending-down',
        price: {
            value: 2300000000, // 2.3 billion
            currency: 'USD'
        },
        sources: [
            {
                name: 'Financial Times',
                text: '<i>The filing with the Securities and Exchange Commission late on Tuesday showed that Trump’s ' +
                    '114mn shares are included in the sale, which will take place “from time to time in one or more ' +
                    'offerings”. The stake is worth about $2.3bn and held in a trust controlled by his son Donald Trump Jr.</i>',
                link: 'https://www.ft.com/content/1b41e7c2-c835-4aa0-b874-6f8a8add107e'
            }
        ]
    },
    {
        name: '€1 per person alive',
        slug: 'people',
        icon: 'person-standing',
        price: {
            value: 8228063040, // 8.2 billion
            currency: 'EUR'
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
        icon: 'trees',
        price: {
            value: 36000000000, // 36 billion
            currency: 'USD'
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
        icon: 'twitter',
        price: {
            value: 440000000000, // 44 billion
            currency: 'USD'
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
        name: 'Rebuilding Gaza',
        slug: 'gaza',
        icon: 'hospital',
        price: {
            value: 53200000000, // 53.2 billion
            currency: 'USD'
        },
        sources: [
            {
                name: 'France 24',
                date: '2025-02-11',
                text: '<i>More than $53 billion will be required to rebuild Gaza and end the "humanitarian catastrophe" ' +
                    'that has gripped the war-ravaged territory, including $20 billion in the first three years alone, ' +
                    'the United Nations said Tuesday</i>',
                link: 'https://www.france24.com/en/live-news/20250211-at-least-53-billion-needed-to-rebuild-gaza-un-estimates'
            }
        ]
    },
    {
        name: 'Quebec-Toronto high-speed train',
        slug: 'high-speed-train',
        icon: 'train',
        price: {
            value: 75000000000, // 75 billion
            currency: 'CAD'
        },
        sources: [
            {
                name: 'Montreal Gazette',
                text: '<i>Assuming high-speed rail ambitions stay on track, the line would connect an area of about 24 ' +
                    'million people, 60 per cent of Canada’s population. [...] Planning is based on costs between $60 ' +
                    'billion and $90 billion, Imbleau said, but those numbers are subject to change.</i>',
                date: '2025-02-21',
                link: 'https://www.montrealgazette.com/news/article767502.html'
            },
            {
                text: 'Aiming for the middle of that range, we get 75 billion CAD, which is about 50 billion EUR.'
            }
        ]
    },
    {
        name: 'Israel\'s war on Gaza',
        slug: 'israel',
        icon: 'bomb',
        price: {
            value: 55600000000, // 55.6 billion
            currency: 'USD'
        },
        sources: [
            {
                name: 'Wikipedia',
                text: '<i>According to the Bank of Israel, Israel’s war-related costs from 2023 to 2025 could end up ' +
                    'amounting to $55.6 billion, thereby costing Israel 10% of its economy.</i>',
                link: 'https://en.wikipedia.org/wiki/Economic_impact_of_the_Gaza_war'
            }
        ]
    },
    {
        name: 'Building 500k soc. housing units',
        slug: 'housing',
        icon: 'home',
        price: {
            value: 156000 * 500000, // 78 billion
            currency: 'EUR'
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
        icon: 'hand-coins',
        price: {
            value: 80000000000, // 80 billion
            currency: 'EUR'
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
        name: 'The Channel Tunnel',
        slug: 'channel-tunnel',
        icon: 'train-front-tunnel',
        price: {
            value: 87900000000, // 87.9 billion
            currency: 'EUR'
        },
        sources: [
            {
                name: 'Wikipedia',
                text: '<i>The construction was completed a year late and the bill was almost twice as high as expected ' +
                    '(initial construction cost of 27.3 billion francs, i.e. a total of 47.8 billion, with a final cost ' +
                    'of 87.9 billion). As a result, Eurotunnel ended up with a debt of 9 billion euros, ten times ' +
                    'its turnover, with half of its annual income spent on interest payments.</i> (translation)',
                link: 'https://en.wikipedia.org/wiki/Channel_Tunnel'
            }
        ]
    },
    {
        name: 'Ending world hunger',
        slug: 'hunger',
        icon: 'shield-plus',
        price: {
            value: 333000000000, // 333 billion
            currency: 'USD'
        },
        sources: [
            {
                name: 'Oxfam America',
                text: '<i>Current estimates suggest that as of this year, we need donor governments to invest around $37 ' +
                    'billion every year until 2030 to tackle both extreme and chronic hunger.</i>',
                date: '2022',
                link: 'https://www.oxfamamerica.org/explore/stories/how-much-money-would-it-take-to-end-world-hunger/'
            },
            {
                text: '2030 - 2022 = 8 years, so 37 billion * 8 = 333 billion $US'
            }
        ]
    },
    {
        name: 'Elon Musk',
        slug: 'muskrat',
        icon: 'trash-2',
        price: {
            value: 450000000000, // 450 billion
            currency: 'USD'
        },
        sources: [
            {
                name: 'Bloomberg',
                link: 'https://www.bloomberg.com/billionaires/profiles/elon-r-musk/',
                date: '2025-04-10',
            }
        ]
    },
    {
        name: 'US military budget',
        slug: 'us-military',
        icon: 'swords',
        price: {
            value: 849800000000, // 849.8 billion
            currency: 'USD'
        },
        sources: [
            {
                name: 'Wikipedia',
                text: '<i>As of 11 March 2024 the US Department of Defense fiscal year 2025 (FY2025) budget request ' +
                    'was $849.8 billion. [...] On 21 December 2024 the Senate ' +
                    'approved the Continuing Resolution for President Biden\'s signature into law.</i>',
                link: 'https://en.wikipedia.org/wiki/Military_budget_of_the_United_States'
            }
        ]
    },
    {
        name: 'Pharmaceutical industry',
        slug: 'big-pharma',
        icon: 'cross',
        price: {
            value: 1700000000000, // 1.7 trillion
            currency: 'USD'
        },
        sources: [
            {
                name: 'BioSpace',
                link: 'https://www.biospace.com/press-releases/pharmaceutical-market-size-to-surpass-usd-2-82-trillion-by-2033',
                date: '2025-01-29',
                text: '<i>The pharmaceutical market has witnessed significant growth, reaching a valuation of over ' +
                    'USD 1.7 trillion in 2024 [...]</i>'
            }
        ]
    },
    {
        name: 'Trickledown.js (this app)',
        slug: 'trickledown',
        icon: 'cloud-rain',
        price: {
            value: ((35000 * 0.78) / 1820) * 30,
            currency: 'EUR'
        },
        sources: [
            {
                text: 'I\'d say approximately 30 hours of work?'
            }
        ]
    }
];

export default thingsData.map(thing => ({
    ...thing,
    icon: 'i-lucide-' + thing.icon,
    price: useFormat().convertCurrency(thing.price.value, thing.price.currency)
}));
