/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/


//Array of Objects representing quotes, source, citation, year

const quotes = [
    {quote: "It always seems impossible until it's done.", source: "Nelson Mandela"},
    {quote: "All we have to decide is what to do with the time that is given to us.", source: "Gandalf", citation: "Lord of the Rings: The Fellowship of the Ring", year: 2001},
    {quote: "Good, better, best. Never let it rest. Till your good is better and your better best.", source: "St. Jerome"},
    {quote: "Great men are not born great, they grow great.", source: "Mario Puzo", citation: "The Godfather", year: 1972},
    {quote: "Only I can change my life, No one can do it for me", source: "Carol Burnett"},
    {quote: "What we do in life echoes in eternity", source: "Maximus", citation: "Gladiator", year: 2000},
    {quote: "Nobody is gonna hit as hard as life, but it ain’t how hard you can hit. It’s how hard you can get hit and keep moving forward. It’s how much you can take, and keep moving forward. That’s how winning is done.", source: "Rocky", citation: "Rocky Balboa", year: 2006},
    {quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", source: "Albert Schweitzer"},
    {quote: "Motivation is what gets you started. Habit is what keeps you going.", source: "Jim Ryun"}
];



//generates random number max exclusive
function randomize(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//generates random RGB color

function randomizeBackgroundColor () {
    const randomColor = "rgb("  + randomize(0,256) + "," + randomize(0,256) + "," + randomize(0,256) + ")";
    const root = document.querySelector("*");
    root.style.backgroundColor = randomColor;
};


//gets random quote Object from array taking array(quotes) as argument

function getRandomQuote(array) {
    //returns an member of the array at a randomized index. at the case the quote object
    return array[randomize(0, array.length)];
};



//write the quote,source, citation, year to the page
function printQuote() {
    //create and appends quote,source to #quote-box
    let quoteBox = document.getElementById("quote-box");
    quoteBox.innerHTML = "";
    const quoteObject = getRandomQuote(quotes);
    const quote = document.createElement("p");
    quote.className = "quote";
    quote.textContent = quoteObject.quote;
    quoteBox.appendChild(quote);
    const source = document.createElement("p");
    source.className = "source";
    source.textContent = quoteObject.source;
    quoteBox.appendChild(source);
    //checks if citation/year is present creates and apend to #quote-box
    if(quoteObject.citation) {
        const citation = document.createElement("span");
        citation.className = "citation";
        citation.textContent = quoteObject.citation;
        quoteBox.appendChild(citation);
    };
    if (quoteObject.year) {
        const year = document.createElement("span");
        year.className = "year";
        year.textContent = quoteObject.year;
        quoteBox.appendChild(year);
    };
};


//click eventlistener to execute printQuote and randomizeBackgroundColor anytime button.loadQuote is clicked
document.getElementById('loadQuote').addEventListener("click", () => {
    randomizeBackgroundColor();
    printQuote();
},  false);



//At every 20000ms interval execute randomizeBackgroundColor and printQuote
let intervalID = setInterval( () => {
    randomizeBackgroundColor();
    printQuote();
}, 20000);


