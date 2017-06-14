var Characters = (function() 
{
    var ret = {};

    function add(character)
    {
        ret[character.name] = character;
        ret.all_characters.push(character);
    }



    // Base game
    "Hiroshige the Artist",
    "Chuubei the Messenger",
    "Kinko the Ronin",
    "Yoshiyasu the Functionary",
    "Satsuki the Orphan",
    "Mitsukuni the Old Man",
    "Sasayakko the Geisha",
    "Hirotada the Priest",
    "Umegai the Street Entertainer",
    "Zen-Emon the Merchant",

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