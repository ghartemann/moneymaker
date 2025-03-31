export default [
    {
        name: 'A baguette',
        slug: 'baguette',
        icon: 'i-lucide-ruler',
        price: 1.2
    },
    {
        name: 'Bus fare',
        slug: 'bus',
        icon: 'i-lucide-bus',
        price: 2.5
    },
    {
        name: 'Lunch',
        slug: 'lunch',
        icon: 'i-lucide-utensils',
        price: 16
    },
    {
        name: 'Doc Martens',
        slug: 'docs',
        icon: 'i-lucide-footprints',
        price: 230
    },
    {
        name: 'iPhone 16 Pro',
        slug: 'iphone',
        icon: 'i-lucide-smartphone',
        price: 1229
    },
    {
        name: 'A (nice) car',
        slug: 'car',
        icon: 'i-lucide-car',
        price: 40000
    },
    {
        name: 'A Rolex made of gold',
        slug: 'rolex',
        icon: 'i-lucide-watch',
        price: 59800
    },
    {
        name: 'Tesla Model S',
        slug: 'tesla',
        icon: 'i-lucide-car-front',
        price: 112390,
    },
    {
        name: 'A house',
        slug: 'house',
        icon: 'i-lucide-house',
        price: 350000
    },
    {
        name: 'Entry level private jet',
        slug: 'jet',
        icon: 'i-lucide-plane',
        price: 2500000,
        source: {
            name: 'BankRate',
            text: 'The price for a brand-new private jet ranges from about $2.5 million to $660 million. The price is ' +
                'determined by many factors, including the size, maker, range, customization and what the jet offers, ' +
                'like the engines and avionics.',
            date: '2024-11-09',
            link: 'https://www.bankrate.com/loans/personal-loans/how-much-does-a-private-jet-cost/'
        }
    },
    {
        name: 'Trump\'s golden toilet',
        slug: 'toilet',
        icon: 'i-lucide-toilet',
        price: (4800000 * 1.2).toFixed(), // pounds to eur
        source: {
            name: 'CNN Style',
            text: 'The satirical work, titled “America” by Italian conceptual artist Maurizio Cattelan, poked fun at ' +
                'excessive wealth. It weighed just over 215 pounds (98 kilograms) and was insured for £4.8 million ' +
                '($6 million). The value of the gold at the time was £2.8 million ($3.5 million).The piece had ' +
                'previously been on display at The Guggenheim Museum in New York. The museum had offered the work to ' +
                'US President Donald Trump during his first term in office after he had asked to borrow a Van Gogh painting.',
            date: '2025-02-25',
            link: 'https://edition.cnn.com/2025/02/25/style/gold-toilet-trial-blenheim-palace'
        }
    },
    {
        name: 'A Caribbean private island',
        slug: 'island',
        icon: 'i-lucide-tree-palm',
        price: 9995000,
        source: {
            name: 'Private Islands Inc.',
            link: 'https://www.privateislandsonline.com/caribbean/bahamas/the-abacos/coconut-palm-bay-the-ultimate-private-island-style-retreat'
        }
    },
    {
        name: 'A 65m long yacht',
        slug: 'yacht',
        icon: 'i-lucide-ship',
        price: 35000000,
        source: {
            name: 'Boat International',
            date: '2024-10-28',
            link: 'https://www.boatinternational.com/yachts-for-sale/eternity-codecasa-2010'
        }
    },
    {
        name: 'A Falcon Heavy launch',
        slug: 'spacex',
        icon: 'i-lucide-rocket',
        price: 97000000
    },
    {
        name: 'Trump\'s inauguration',
        slug: 'trump',
        icon: 'i-lucide-angry',
        price: 170000000,
        source: {
            name: 'CBC',
            text: 'Trump\'s second inaugural fund has so far raised $170 million US, breaking the record he set in 2017',
            date: '2025-01-16',
            link: 'https://www.cbc.ca/news/business/corporate-donors-trump-inauguration-1.7430028'
        }
    },
    {
        name: 'A Boeing 747',
        slug: 'boeing',
        icon: 'i-lucide-plane-takeoff',
        price: 220000000
    },
    {
        name: 'A penthouse in Monaco',
        slug: 'penthouse',
        icon: 'i-lucide-building-2',
        price: 335000000,
        source: {
            name: 'Homesmontecarlo.com',
            date: '2025-01-23',
            text: 'This penthouse, perched atop the Odeon Tower, embodies the ultimate in luxury real estate in ' +
                'Monaco. With an estimated market value of 335 million euros, it is the most expensive apartment in ' +
                'the world, attracting the attention of wealthy investors in search of exceptional properties.',
            link: 'https://www.homesmontecarlo.com/the-secrets-of-the-worlds-most-expensive-apartment-in-monaco'
        }
    },
    {
        name: 'Twitter',
        slug: 'twitter',
        icon: 'i-lucide-twitter',
        price: 44000000000,
        source: {
            name: 'Wikipedia',
            text: 'On April 14, Musk made an unsolicited offer to purchase the company, to which Twitter\'s board ' +
                'responded with a "poison pill" strategy to resist a hostile takeover before unanimously accepting ' +
                'Musk\'s buyout offer of $44 billion on April 25.',
            link: 'https://en.wikipedia.org/wiki/Acquisition_of_Twitter_by_Elon_Musk'
        }
    },
    {
        name: 'End world hunger',
        slug: 'hunger',
        icon: 'i-lucide-shield-plus',
        price: 296000000000,
        source: {
            name: 'Oxfam America',
            text: 'Current estimates suggest that as of this year, we need donor governments to invest around $37 ' +
                'billion every year until 2030 to tackle both extreme and chronic hunger.',
            date: '2022',
            link: 'https://www.oxfamamerica.org/explore/stories/how-much-money-would-it-take-to-end-world-hunger/'
        }
    },
    {
        name: 'Elon Musk',
        slug: 'muskrat',
        icon: 'i-lucide-trash-2',
        price: 400000000000
    }
];
