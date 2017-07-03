var Characters = (function() 
{
    // Returned object
    var ret = {};

    /***  Private Methods  ***/
    
    function add(character)
    {
        ret[character.name] = character;
        ret.all_characters.push(character);
    }

    /***  Public Methods  ***/


    /***  Execute Setup  ***/
    
    var GAME_VERSIONS =
    [
        "base",
        "crossroads",
        "matsuri",
        "special"
    ];

    // Master list of all characters. Init via
    // an array just for convenience of representation.
    var CHARACTERS =
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
            occupation: "Functionary",
            ability: "During each Encounter, Yoshiyasu draws 2 Encounter cards, keeps the one he wishes, then places the other card at the bottom of the pile (without showing it to the other players).",
            starting_coins: 9,
            version: "base"
        },
        {
            name: "Satsuki",
            occupation: "Orphan",
            ability: "When she arrives at an Inn, Satsuki receives one of the available Meal cards at random for free.",
            ability_note: "After seeing the Meal offered to her, she can instead purchase a Meal as normal like other players.",
            starting_coins: 2
            version: "base"
        },
        {
            name: "Mitsukuni",
            occupation: "Old Man",
            ability: "Mitsukuni earns 1 additional point for each Hot Spring card and each achievement card.",
            starting_coins: 6,
            version: "base"
        },
        {
            name: "Sasayakko",
            occupation: "Geisha",
            ability: "In the Village, if Sasayakko purchases at least two Souvenir cards, the cheapest Souvenir is free.",
            ability_note: "She must have the coins on hand to pay for all Souvenirs, but she doesn’t pay for the cheapest one.",
            starting_coins: 5,
            version: "base"
        },
        {
            name: "Hirotada",
            occupation: "Priest",
            ability: "Each time he stops at the Temple, Hirotada can take one coin from the bank and donate it to the Temple, scoring 1 point for this coin. This is in addition to the 1, 2, or 3 coins he can personally donate to the Temple.",
            starting_coins: 8,
            version: "base"
        },
        {
            name: "Umegai",
            occupation: "Street Entertainer",
            ability: "Umegae earns 1 point and 1 coin for each Encounter before the effects of the drawn Encounter card are applied.",
            starting_coins: 5,
            version: "base"
        },
        {
            name: "Zen-Emon",
            occupation: "Merchant",
            ability: "Once per Village, Zen-emon can purchase one Souvenir for 1 coin instead of the marked price.",
            starting_coins: 6,
            version: "base"
        }
    ];

    for (var idx = 0; idx < characters.length; idx++)
    {
        add(characters[idx]);
    }



    // Special Characters
    "Eriku the Game Player",
    "Antione the Game Designer",
    "Naiade the Game Artist",

    // Crossroads
    "Jirocho the Yakuza",
    "Daigoro the Kid",
    "Nampo the Gourmet",
    "Gotozaemon the Souvenir Seller",
    "Miyataka the Superstitious Woman",
    "Kita the Old Woman",

    // Matsuri
    "Kushinada the World Traveler",
    "Mutsumi the Brute",
    "Takeru the Counselor",
    "Rakuren the Collector",
    "Kamui the Vagabond",
    "Mari the Poet",
    "Yashima the Noble",
    "Kidzuna the Cook",
    "Chihaya the Bather",
    "Iyasaka the Manual Worker",
    "Marihito the Writer",
    "Suseri the Erudite",
    "Ayumu the Walker",
    "Musubi the Rogue",
    "Misaki the Disciple",
    "Titia the Dutch Tourist"


    return ret;
}());