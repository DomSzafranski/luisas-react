export const menuItems = [
    {
        name: 'margherita',
        price: '9.65',
        description: 'Tomato sauce, fior di latte, fresh basil, extra virgin olive oil',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten', 'milk'],
        dietary: ['V', 'PBA']
    },
    {
        name: 'carnoso',
        price: '15.95',
        description: 'Tomato sauce, fior di latte, Tuscan sausage, salami, spicy Calabrian N\'duja',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten', 'milk'],
        dietary: ['Spicy']
    },
    {
        name: 'della terra',
        price: '10.65',
        description: 'White piza with fior di latte, gorgonzola, mushrooms, rosemary, and crispy onions',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten', 'milk'],
        dietary: ['V']
    },
    {
        name: 'bologna',
        price: '10.95',
        description: 'Tomato sauce, fior di latte, mortadella, olives, garlic oil, parsley',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten', 'milk'],
        dietary: ['N']
    },
    {
        name: 'dea verde',
        price: '12.35',
        description: 'Broad bean & pistachio pesto, fior di latte, slow cooked zucchini, peas',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten', 'milk', 'nuts'],
        dietary: ['V', 'PBA', 'N']
    },
    {
        name: 'gamberessa',
        price: '16.95',
        description: 'Tomato sauce, fior di latte, roasted King prawns, pepperoncini, zafferano mayo, fresh chillies, parsley, lemon wedge',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten', 'milk', 'crustaceans'],
        dietary: ['Spicy']
    },
    {
        name: 'maicello',
        price: '11.65',
        description: 'Tomato sauce, scamorza, roast chicken, pancetta, spring onion, served with a pot of confit garlic mayonnaise',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten', 'milk'],
        dietary: []
    },
    {
        name: 'amiata',
        price: '12.45',
        description: 'Tomato sauce, fior di latte, pepperoni, fresh chillies, pepperoncini, crispy onions',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten', 'milk'],
        dietary: ['Spicy', 'Spicy']
    },
    {
        name: 'fresca',
        price: '9.85',
        description: 'Tomato sauce, spring greens, fresh garlic, olives parsley',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten'],
        dietary: ['V', 'PB']
    },
    {
        name: 'toscana',
        price: '10.45',
        description: 'Tomato sauce, fior di latte, Prosciutto, mushrooms',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten', 'milk'],
        dietary: []
    },
    {
        name: 'americana',
        price: '9.95',
        description: 'Tomato sauce, fior di latte, pepperoni',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten', 'milk'],
        dietary: []
    },
    {
        name: 'brusceci',
        price: '10.45',
        description: 'Tomato sauce, barbecue chickpeas, fresh tomatoes, red onion, basil',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten'],
        dietary: ['V', 'PB']
    },
    {
        name: 'razzo capro',
        price: '10.85',
        description: 'Tomato sauce, fior di latte, goats’ cheese, red onion, rocket, balsamic glaze',
        category: 'pizza',
        highlight: false,
        allergens: ['gluten'],
        dietary: ['V', 'PBA']
    },
    {
        name: 'pasta luisa',
        price: '9.65',
        description: 'Our signature dish of tagliatelle in rich tomato sauce, just like Nana Luisa used to serve',
        category: 'pasta',
        highlight: false,
        allergens: ['gluten', 'egg'],
        dietary: ['V', 'PBA']
    },
    {
        name: 'risotto',
        price: '11.45',
        description: 'Creamy rice with pancetta, white wine, broad bean & pistachio pesto, peas',
        category: 'risotto',
        highlight: false,
        allergens: ['milk', 'sulphites', 'nuts'],
        dietary: ['GF', 'N']
    },
    {
        name: 'spaghetti e polpette',
        price: '13.95',
        description: 'Spaghetti served with pork & beef meatballs',
        category: 'pasta',
        highlight: false,
        allergens: ['gluten', 'egg'],
        dietary: []
    },
    {
        name: 'spaghetti bolognese',
        price: '11.95',
        description: 'Spaghetti served in a beef & red wine bolognese sauce',
        category: 'pasta',
        highlight: false,
        allergens: ['gluten', 'egg', 'sulphites'],
        dietary: []
    },
    {
        name: 'pasta tucci',
        price: '10.85',
        description: 'Spaghetti served with slow cooked zucchini, Parmigiano-Reggiano, and Pecorino',
        category: 'pasta',
        highlight: false,
        allergens: ['gluten', 'egg', 'milk'],
        dietary: ['V', 'PBA']
    },
    {
        name: 'primavera',
        price: '15.95',
        description: 'Tagliatelle served with roasted King prawns in a creamy sauce with white wine and plenty of garlic',
        category: 'pasta',
        highlight: false,
        allergens: ['gluten', 'egg', 'milk', 'crustaceans'],
        dietary: []
    },
    {
        name: 'wood fired ribs',
        price: '7.95',
        description: 'Slow roasted pork ribs in a rich, sticky, Italian-style barbecue sauce',
        category: 'sides',
        highlight: false,
        allergens: ['sulphites'],
        dietary: ['GF']
    },
    {
        name: 'garlic bread',
        price: '6.85',
        description: 'Sourdough crust, garlic & oregano butter, or oil. Add fior di latte, tomato sauce, or plant-based mozzarella.',
        category: 'sides',
        highlight: false,
        allergens: ['gluten','milk'],
        dietary: ['V', 'PBA', 'GFA']
    },
    {
        name: 'creamy garlic mushrooms',
        price: '5.95',
        description: 'Mushrooms baked in white wine, cream, and garlic. Served with toasted ciabatta.',
        category: 'sides',
        highlight: false,
        allergens: ['gluten','milk', 'sulphites'],
        dietary: ['V', 'GFA']
    },
    {
        name: 'arancini del giorno',
        price: '6.95',
        description: 'Italian rice shaped in to the classic Sicilian Arancini shape, stuffed, coated in breadcrumbs and fried. Ask your server or see the specials board for today’s Arancini',
        category: 'sides',
        highlight: false,
        allergens: ['gluten','milk', 'sulphites'],
        dietary: []
    },
    {
        name: 'gnocchi fritto',
        price: '4.45',
        description: 'Deep fried potato dumplings served with parmesan, black pepper, and confit garlic mayonnaise',
        category: 'sides',
        highlight: false,
        allergens: [],
        dietary: ['V', 'PBA']
    },
    {
        name: 'olives',
        price: '2.85',
        description: 'Marinated in extra virgin olive oil & herbs',
        category: 'sides',
        highlight: false,
        allergens: [],
        dietary: ['V', 'PB', 'GF']
    },
    {
        name: 'spring greens',
        price: '2.75',
        description: 'Sautéed fresh greens with garlic and board bean & pistachio pesto',
        category: 'sides',
        highlight: false,
        allergens: ['nuts'],
        dietary: ['PB', 'GF', 'N']
    },
    {
        name: 'bacari',
        price: '6.95',
        description: 'Beef & pork meatballs fried in our sourdough & beer batter, served with warm tomato sauce',
        category: 'sides',
        highlight: false,
        allergens: ['gluten', 'egg'],
        dietary: []
    },

    {
        name: 'fresh salad',
        price: '3.75',
        description: 'Mixed leaves tossed in an olive oil vinaigrette dressing',
        category: 'sides',
        highlight: false,
        allergens: [],
        dietary: ['PB', 'V', 'GF']
    },

    {
        name: 'italian barbecue wings',
        price: '6.95',
        description: 'Fresh chicken wings fried in our sourdough & beer batter, coated in an Italian style barbecue sauce',
        category: 'sides',
        highlight: false,
        allergens: ['gluten'],
        dietary: []
    },

    {
        name: 'calabrian wings',
        price: '6.95',
        description: 'Fresh chicken wings fried in our sourdough & beer batter, coated in spicy Calabrian N’duja sausage',
        category: 'sides',
        highlight: false,
        allergens: ['gluten'],
        dietary: []
    },

    

    
];