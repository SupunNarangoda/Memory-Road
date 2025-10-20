/**
 * Memory Road - Game Data
 *
 * Contains all quiz questions, facts, and game configuration data.
 * Questions are based on real Australian historical events and experiences
 * relevant to people aged 60+ for dementia awareness and reminiscence therapy.
 */

// Board Configuration
const TOTAL_TILES = 30;
const MEMORY_TILES = [5, 10, 15, 20, 25]; // Special memory milestone tiles

/**
 * Quiz Questions Database
 * Each question is based on real Australian historical events and common experiences
 * from the 1940s-1980s that people with dementia might remember.
 *
 * AI PROMPT USED: "Generate historically accurate quiz questions about Australian
 * history, culture, and daily life from 1940-1990 suitable for dementia patients
 * aged 60-90+ focusing on reminiscence therapy and long-term memory recall."
 */
const quizQuestions = [
    {
        category: "Australian History",
        question: "Do you remember when man first walked on the moon? What year did Neil Armstrong take that famous step?",
        options: [
            "1965",
            "1969",
            "1972",
            "1975"
        ],
        correct: 1,
        feedback: "Yes! It was July 1969 when Neil Armstrong walked on the moon. Many Australians stayed up late to watch it on TV. Do you remember watching it? The Parkes radio telescope in NSW helped broadcast those images to the world!"
    },
    {
        category: "Australian Prime Ministers",
        question: "Do you remember Prime Minister Gough Whitlam? He was famously dismissed in 1975. Who was he replaced by?",
        options: [
            "Bob Hawke",
            "Malcolm Fraser",
            "Paul Keating",
            "John Howard"
        ],
        correct: 1,
        feedback: "That's right - Malcolm Fraser became Prime Minister after the dismissal. November 11, 1975 was a dramatic day in Australian politics. Many people remember exactly where they were when they heard the news on the radio."
    },
    {
        category: "Childhood Treats",
        question: "When you were young, what did the milkman deliver to your doorstep in glass bottles early in the morning?",
        options: [
            "Milk in cardboard cartons",
            "Fresh milk in glass bottles",
            "Powdered milk in bags",
            "We bought milk from shops"
        ],
        correct: 1,
        feedback: "Yes! Fresh milk in glass bottles, delivered right to your door! You might remember the sound of bottles clinking early in the morning, or the cream that rose to the top. In summer, you had to get the bottles in quickly before the magpies pecked through the foil tops!"
    },
    {
        category: "School Days",
        question: "When you were at school, what did you use to write on before whiteboards were invented?",
        options: [
            "Computer screens",
            "Blackboards with chalk",
            "Paper only",
            "Tablets and styluses"
        ],
        correct: 1,
        feedback: "Correct! Blackboards with chalk - and you might remember the smell of the chalk dust, or being chosen to clean the dusters by banging them together outside. Some students were picked to be 'blackboard monitor' - was that ever you?"
    },
    {
        category: "Technology Changes",
        question: "Before mobile phones, if you needed to make a phone call when you were out, what did you use?",
        options: [
            "A public phone box (with coins)",
            "You couldn't call anyone",
            "A walkie-talkie",
            "Email on a laptop"
        ],
        correct: 0,
        feedback: "That's right! Red public phone boxes where you put in coins - usually 20 cents for a local call. Do you remember the sound of the coins dropping in, or having to carry coins just in case you needed to 'ring home'? Some had yellow pages books attached with chains."
    },
    {
        category: "Royal Visits",
        question: "Queen Elizabeth II visited Australia many times. Do you remember - was she crowned Queen in 1952 or 1962?",
        options: [
            "1952",
            "1962",
            "1945",
            "1970"
        ],
        correct: 0,
        feedback: "Yes, 1952! She became Queen when her father King George VI died. Many Australians gathered around radios and later TVs to follow royal events. Did you ever see the Queen during one of her Australian visits? Many people lined the streets waving flags."
    },
    {
        category: "Australian Currency",
        question: "Australia changed from pounds, shillings and pence to decimal currency. What year did we start using dollars and cents?",
        options: [
            "1956",
            "1966",
            "1976",
            "1986"
        ],
        correct: 1,
        feedback: "Correct! February 14, 1966 - Decimal Currency Day, or 'C-Day'! Do you remember learning to convert pounds to dollars? Shops had conversion charts everywhere. A pound became two dollars. It was quite confusing at first, wasn't it?"
    },
    {
        category: "Television Memories",
        question: "When television first came to most Australian homes, what color were the programs?",
        options: [
            "Full color from the start",
            "Black and white only",
            "Sepia tone",
            "Blue and white"
        ],
        correct: 1,
        feedback: "That's right - black and white! Color TV didn't arrive in Australia until 1975. Do you remember gathering around the TV to watch shows like 'Pick a Box' or the news? The whole family would sit together. Some people put colored plastic sheets over the screen to pretend it was color!"
    },
    {
        category: "Shopping Memories",
        question: "Before supermarkets, where did your family buy fresh bread?",
        options: [
            "From the baker's shop or a bread cart",
            "It came by mail",
            "Only from supermarkets",
            "We made all our own"
        ],
        correct: 0,
        feedback: "Yes! From the local baker's shop, or a baker who came around in a horse and cart or van! Do you remember the smell of fresh bread? Some bakers would call out 'Bread-oh!' or ring a bell. Nothing beats the taste of bread from the baker, still warm!"
    },
    {
        category: "Summer Holidays",
        question: "When you were young and went to the beach, what was the most popular ice cream on a stick?",
        options: [
            "Paddle Pop",
            "Magnum",
            "Ben & Jerry's",
            "Gelato"
        ],
        correct: 0,
        feedback: "Paddle Pop! Those rainbow-colored ice creams were perfect for hot summer days at the beach. Do you remember racing to eat it before it melted down your arm? Chocolate, caramel, and rainbow were the classic flavors. The wooden stick was fun to chew on afterwards!"
    },
    {
        category: "Transport",
        question: "Before everyone had cars, how did most people get to work in the city?",
        options: [
            "By bicycle or helicopter",
            "By tram, bus, or train",
            "Everyone had cars",
            "By horse and cart"
        ],
        correct: 1,
        feedback: "That's right - by tram, bus, or train! Cities had extensive tram networks. Do you remember the conductor coming through to collect fares, or the sound of the tram bell? Melbourne still has its trams today, but many other cities lost theirs in the 1950s-60s."
    },
    {
        category: "Music & Dance",
        question: "In the 1950s and 60s, what type of music did young people dance to at dances?",
        options: [
            "Rock and Roll and pop music",
            "Heavy metal",
            "Hip hop and rap",
            "Electronic dance music"
        ],
        correct: 0,
        feedback: "Rock and Roll! Elvis Presley, The Beatles, and local bands like The Easybeats. Do you remember going to dances at the local hall? Girls in full skirts, boys in their best shirts. Maybe you did the Twist or the Jive? Those were fun times!"
    },
    {
        category: "Kitchen Appliances",
        question: "Before electric refrigerators were common, how did families keep food cold?",
        options: [
            "They bought food fresh every day",
            "Ice boxes with blocks of ice",
            "Food didn't need to be cold",
            "Everyone had freezers"
        ],
        correct: 1,
        feedback: "Yes! Ice boxes with big blocks of ice delivered by the ice man! Do you remember the ice truck coming around? Children would run out to grab small chips of ice on hot days. The ice man used big tongs to carry the heavy blocks. Modern refrigerators made life much easier!"
    },
    {
        category: "Clothing & Fashion",
        question: "When you were young, what did women wear on their legs instead of pants?",
        options: [
            "Always pants and jeans",
            "Stockings and skirts/dresses",
            "Shorts all year",
            "Nothing - bare legs only"
        ],
        correct: 1,
        feedback: "That's right - stockings and skirts or dresses! Women rarely wore pants out of the house. Do you remember seamed stockings, or garter belts? When pantyhose came along in the 1960s, it was revolutionary! And skirts were expected to be below the knee - mini skirts were quite scandalous!"
    },
    {
        category: "Sports Memories",
        question: "Australian cricketer Don Bradman was famous in the 1930s-40s. What was his nickname?",
        options: [
            "The Don",
            "The King",
            "The Boss",
            "The Chief"
        ],
        correct: 0,
        feedback: "Correct - 'The Don'! Sir Donald Bradman is still considered the greatest batsman ever. His Test batting average was 99.94 - incredible! Do you remember listening to cricket on the radio? Or reading about his matches in the newspaper? He was a true Australian hero."
    },
    {
        category: "World Events",
        question: "World War II ended in 1945. Do you remember - which day do we commemorate as Remembrance Day?",
        options: [
            "January 26",
            "April 25 (ANZAC Day)",
            "November 11",
            "December 25"
        ],
        correct: 2,
        feedback: "Yes, November 11 - at 11am, the 11th hour of the 11th day of the 11th month. That's when WWI ended in 1918. Do you remember the minute of silence? Many people still observe it today. ANZAC Day (April 25) commemorates the landing at Gallipoli and all who served."
    }
];

/**
 * Encouraging messages for dementia awareness
 * These messages provide comfort and positive reinforcement
 *
 * AI PROMPT USED: "Generate compassionate, therapeutic messages for dementia
 * patients focusing on the value of memories and life experiences."
 */
const dementiaFacts = [
    "Your life story is unique and valuable. Every memory you hold is a treasure that shaped who you are. Thank you for sharing your journey with us today.",
    "Reminiscing about positive memories can bring comfort and joy. The happy times you've experienced are always part of you, even if they feel distant sometimes.",
    "Your memories of family, friends, and special moments are the legacy of a life well-lived. These connections and experiences define your beautiful story.",
    "Music, smells, and familiar places can help unlock precious memories. Your senses are powerful tools for connecting with your past.",
    "Every person's memory journey is different. Some memories stay crystal clear while others fade, and that's perfectly okay. You are valued and loved just as you are.",
    "Sharing memories with family and friends helps keep them alive. Your stories matter and deserve to be heard, celebrated, and remembered by others."
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TOTAL_TILES,
        MEMORY_TILES,
        quizQuestions,
        dementiaFacts
    };
}
