var CharacterSets = (function()
{
    var ret =
    [
        {
            code: "base",
            desc: "Base Game",
            default: true
        },
        {
            code: "crossroads",
            desc: "Crossroads (Expansion)",
            default: false
        },
        {
            code: "matsuri",
            desc: "Matsuri (Expansion)",
            default: false
        },
        {
            code: "special",
            desc: "Special Edition Characters",
            default: false
        }
    ];

    return ret;
}());


var Characters = (function() 
{
    // Returned object
    var ret = {};
    ret.all_characters = [];

    /***  Private Methods  ***/
    
    function add(character)
    {
        ret[character.name] = character;
        ret.all_characters.push(character);
    }

    /***  Public Methods  ***/

    // Master list of all characters. Init via
    // an array just for convenience of representation.
    var characters =
    [
        // Base Game
        {
            name: "Hiroshige",
            occupation: "artist",
            ability: "When Hiroshige arrives at each of the 3 intermediate Inns, before the Meal he takes 1 Panorama card of his choice, scoring the points for this card immediately.",
            starting_coins: 3,
            version: "base"
        },
        {
            name: "Chuubei",
            occupation: "messenger",
            ability: "When Chuubei arrives at each of the 3 intermediate Inns, before the Meal he draws 1 Encounter card and applies its effect.",
            starting_coins: 4,
            version: "base"
        },
        {
            name: "Kinko",
            occupation: "ronin",
            ability: "Each Meal card purchased by Kinko costs one coin less. (Meals that cost 1 are therefore free.)",
            starting_coins: 7,
            version: "base"
        },
        {
            name: "Yoshiyasu",
            occupation: "functionary",
            ability: "During each Encounter, Yoshiyasu draws 2 Encounter cards, keeps the one he wishes, then places the other card at the bottom of the pile (without showing it to the other players).",
            starting_coins: 9,
            version: "base"
        },
        {
            name: "Satsuki",
            occupation: "orphan",
            ability: "When she arrives at an Inn, Satsuki receives one of the available Meal cards at random for free.",
            ability_note: "After seeing the Meal offered to her, she can instead purchase a Meal as normal like other players.",
            starting_coins: 2,
            version: "base"
        },
        {
            name: "Mitsukuni",
            occupation: "old man",
            ability: "Mitsukuni earns 1 additional point for each Hot Spring card and each achievement card.",
            starting_coins: 6,
            version: "base"
        },
        {
            name: "Sasayakko",
            occupation: "geisha",
            ability: "In the Village, if Sasayakko purchases at least two Souvenir cards, the cheapest Souvenir is free.",
            ability_note: "She must have the coins on hand to pay for all Souvenirs, but she doesn’t pay for the cheapest one.",
            starting_coins: 5,
            version: "base"
        },
        {
            name: "Hirotada",
            occupation: "priest",
            ability: "Each time he stops at the Temple, Hirotada can take one coin from the bank and donate it to the Temple, scoring 1 point for this coin. This is in addition to the 1, 2, or 3 coins he can personally donate to the Temple.",
            starting_coins: 8,
            version: "base"
        },
        {
            name: "Umegai",
            occupation: "street entertainer",
            ability: "Umegae earns 1 point and 1 coin for each Encounter before the effects of the drawn Encounter card are applied.",
            starting_coins: 5,
            version: "base"
        },
        {
            name: "Zen-Emon",
            occupation: "merchant",
            ability: "Once per Village, Zen-emon can purchase one Souvenir for 1 coin instead of the marked price.",
            starting_coins: 6,
            version: "base"
        },

        // Crossroads
        {
            name: "Jirocho",
            occupation: "yakuza",
            ability: "When he arrives at one of the three intermediate Inns, before the Meal, Jirocho can try his luck in the Gaming Room. He must then bet 1 coin and roll the Fortune die. Depending on the result, he may lose his coin, get it back, or get it back and win 1, 2, or 3 additional coins (according to the table of results for the Gaming Room).",
            starting_coins: 5,
            version: "crossroads"
        },
        {
            name: "Daigoro",
            occupation: "kid",
            ability: "Daigoro draws a Souvenir card when he arrives at each of the three intermediate Inns, before the Meal.",
            starting_coins: 3,
            version: "crossroads"
        },
        {
            name: "Nampo",
            occupation: "gourmet",
            ability: "Nampo scores additional points, at each Inn, depending on the value of the Meal he eats: One Meal worth 1 coin gives 1 additional point; One Meal worth 2 coins gives 2 additional points; One Meal worth 3 coins gives 3 additional points.",
            starting_coins: 2,
            version: "crossroads"
        },
        {
            name: "Gotozaemon",
            occupation: "souvenir seller",
            ability: "Gotozaemon gains a coin at each stop on a Panorama space.",
            ability_note: "The Souvenir seller gains an additional coin only when he stops on a Panorama space, not when he encounters a Guide (Annaibito). If he decides to take a Cherry Tree, he gains 2 points and 2 coins.",
            starting_coins: 0,
            version: "crossroads"
        },
        {
            name: "Miyataka",
            occupation: "superstitious woman",
            ability: "Miyataka can carry out both actions when stopping at a Temple space: give coins to the Temple AND buy an Amulet.",
            starting_coins: 4,
            version: "crossroads"
        },
        {
            name: "Kita",
            occupation: "old woman",
            ability: "Kita can carry out both actions when stopping at an Encounter space: draw an Encounter card AND buy a Calligraphy card.",
            starting_coins: 4,
            version: "crossroads"
        },

        // Matsuri
        {
            name: "Kushinada",
            occupation: "world traveler",
            ability: "At the beginning of the game, all the other Travelers give 1 coin each to Kushinada. During the game, at any time, Kushinada can secretly look at her opponents’ Calligraphy and Amulet cards.",
            starting_coins: 4,
            version: "matsuri"
        },
        {
            name: "Mutsumi",
            occupation: "brute",
            ability: "At the first 4 Inns, Mutsumi can leave the Inn first, regardless of the order in which he arrived at the Inn.",
            starting_coins: 7,
            version: "matsuri"
        },
        {
            name: "Takeru",
            occupation: "counselor",
            ability: "Every time a Traveler (him or another) stops at an Encounter space, Takeru takes 1 coin from the bank.",
            starting_coins: 4,
            version: "matsuri"
        },
        {
            name: "Rakuren",
            occupation: "collector",
            ability: "When stopping at a Shop space, Rakuren can choose to randomly draw 4 Souvenir cards AND 1 Legendary Object card, instead of the usual Shop’s actions. He can then buy one or several of these cards at their indicated costs.",
            starting_coins: 5,
            version: "matsuri"
        },
        {
            name: "Kamui",
            occupation: "vagabond",
            ability: "When stopping at the Intermediate Inns and at the last Inn, Kamui scores 3 points if he doesn’t buy a Meal card.",
            ability_note: "These 3 points can be combined with the “Fasting” Calligraphy points.",
            starting_coins: 3,
            version: "matsuri"
        },
        {
            name: "Mari",
            occupation: "poet",
            ability: "When stopping at a Temple space, Mari scores 2 Journey points (instead of 1) for each coin she donates to the Temple. If she decides to buy an Amulet, Mari can take it for free.",
            starting_coins: 4,
            version: "matsuri"
        },
        {
            name: "Yashima",
            occupation: "noble",
            ability: "At the intermediate Inns, Yashima receives a free and random Amulet card.",
            ability_note: "If there are no Amulet cards remaining in the stack, Yashima can no longer benefit from her ability.",
            starting_coins: 4,
            version: "matsuri"
        },
        {
            name: "Kidzuna",
            occupation: "cook",
            ability: "When stopping at the intermediate Inns, Kidzuna can buy another Meal IN ADDITION to her usual Meal. First, she reveals the first card of the Meal stack and can buy it at the indicated cost. She scores the corresponding Journey points. Kidzuna then proceeds to purchase her main Meal according to the usual rules.",
            starting_coins: 3,
            version: "matsuri"
        },
        {
            name: "Chihaya",
            occupation: "bather",
            ability: "When stopping at the intermediate Inns, Chihaya receives a Hot Spring card randomly drawn from the stack.",
            starting_coins: 3,
            version: "matsuri"
        },
        {
            name: "Iyasaka",
            occupation: "manual worker",
            ability: "When stopping at a Farm space, Iyasaka receives 1 additional coin if he chooses to take 3 coins from the bank OR Iyasaka can re-roll the Fortune die if he chooses to try his luck in the Gaming Room (the second result must be used, even if it is worse than the first one).",
            starting_coins: 5,
            version: "matsuri"
        },
        {
            name: "Marihito",
            occupation: "writer",
            ability: "At the end of the game, Marihito can double one of the Calligraphy cards of his collection.",
            starting_coins: 5,
            version: "matsuri"
        },
        {
            name: "Suseri",
            occupation: "erudite",
            ability: "At the end of the game, Suseri scores 1 point for each different type of card in her collection. The different types of cards are as follows: Hot Spring, Bathhouse, Souvenir, Legendary Object, Encounter, Calligraphy, Amulet, Meal, Sea Panorama, Mountain Panorama, Rice Paddy Panorama, Cherry Tree.",
            starting_coins: 3,
            version: "matsuri"
        },
        {
            name: "Ayumu",
            occupation: "walker",
            ability: "Meal cards only cost Ayumu 1 coin, regardless of their normal costs. In addition, when at a Shop space, the Souvenirs of the “Small object” type cost him nothing.",
            starting_coins: 5,
            version: "matsuri"
        },
        {
            name: "Musubi",
            occupation: "rogue",
            ability: "When stopping at the intermediate Inns, Musubi can take 1 coin from each of his two neighboring Travelers (the ones who arrived immediately before and after him). If an affected Traveler has no coins in his possession, Musubi takes 1 coin from the bank instead. Similarly, if Musubi arrived first or last at the Inn (and has only one neighbor), he takes 1 coin from the neighboring Traveler and 1 coin from the bank.",
            starting_coins: 6,
            version: "matsuri"
        },
        {
            name: "Misaki",
            occupation: "disciple",
            ability: "Every time a Traveler (him or another) stops at a Temple space, Misaki takes 1 coin from the bank.",
            starting_coins: 4,
            version: "matsuri"
        },
        {
            name: "Titia",
            occupation: "dutch tourist",
            ability: "Titia buys Souvenirs of the “Art” type and Legendary Objects for 1 coin less than normal. Some cards will therefore be free for Titia.",
            starting_coins: 6,
            version: "matsuri"
        },

        // Special Edition
        {
            name: "Antoine",
            occupation: "game designer",
            ability: "Antoine automatically wins all ties involving him.",
            ability_note: "e.g. Donations to the Temple, Achievements, and even the final score of the game",
            starting_coins: 8,
            version: "special"
        },
        {
            name: "Antoine",
            occupation: "game player",
            ability: "At the start of the game and before playing his first move, Eriku can draw the first Meal card from the pile and buy it at the given price to add it to his collection. He then gets 6 points as for any other Meal card. This action is by no means mandatory. At the following Inns, Eriku can also draw and look at the first Meal card from the pile. He can eventually decide to buy it at the given price instead of buying one of those already available. The Meal card that Eriku draws and does not buy is placed under the pile.",
            starting_coins: 5,
            version: "special"
        },
        {
            name: "Naiade",
            occupation: "game artist",
            ability: "Naiade must take the Sea, Mountain, and Rice Paddy Panorama section in reverse order (5, 4, 3, 2, 1).",
            starting_coins: 5,
            version: "special"
        }
    ];

    for (var idx = 0; idx < characters.length; idx++)
    {
        add(characters[idx]);
    }

    return ret;
}());