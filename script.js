let quotes = [
    'You ever eat a dry ass Bojangles biscuit in the morning? - Cristian',
    'If you don' + 't own a maid outfit are you even a gamer? - Kojiro',
    'I' + 'm mad at pixels - Ben',
    'I am so hungry I could eat someones ass - Kojiro',
    'I' + 'm going to make you let me feel you - David',
    'That was the straightest ace I' + 've ever seen in my life - David',
    'Tobirama was right - Cristian',
    'I don' + 't have enough hands for this, Cristian I am going to have to duct tape it - Cody',
    'You can' + 't tell me to bail when I' + 'm already in the hole. - Ben',
    'well you aren' + 't supposed to be drinking in general if you are drunk - Cody'
];

function displayQuote() { // A function is a block of code that performs an action or returns a value.
    
    let index = Math.floor(Math.random() * quotes.length); // This will give random quotes
    
    // Display the quote of that index
    let div = document.querySelector('#quote'); // The Document method querySelector() returns the first element within the document that matches the specified selector.
    let quote = `<div class = 'card'>
                    <p>${quotes[index]}</p>
                </div>`;

    div.innerHTML = quote; // Defines both the HTML code and the text that occurs between that element's opening and closing tag.
};

let btn=document.querySelector('.btn');      // An event listener watches for an event on an element. takes two mandatory parameters:
    btn.addEventListener('click', displayQuote); //  The event it is listening for and the listener callback function
