// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Create all arrays
//const nouns =["Table","Bottle","Woman","Child"];

const nouns = ["The tirkey", "Mom", "Dad", "The dog","My teacher","The elephant","The cat"];
const verbs =["Sat on","Ate","Dance with","Saw","Doesn't like","Kissed"];
const adjectives =["A funny","A scary","A goofy","A slimmy","A barking","A fat"];
const nouns2 =["Goat","Monkey","Fish","Cow","Frog","Bug","Worm"];
const places =["On the moon","On the chai","In my spaghetti","In my soup","On the grass","In my shoes"];


// // Generate a random index within the bounds of the array
const indexNouns = Math.floor(Math.random() * nouns.length);
const indexVerbs = Math.floor(Math.random() * verbs.length);
const indexAdjectives = Math.floor(Math.random() * adjectives.length);
const indexNouns2 = Math.floor(Math.random() * nouns2.length);
const indexPlaces = Math.floor(Math.random() * places.length);

// // Get the random noun using the random index
const randomNoun = nouns[indexNouns];
const randomVerb = verbs[indexVerbs];
const randomAdjectives = adjectives[indexAdjectives];
const randomNoun2 = nouns2[indexNouns2];
const randomPlaces = places[indexPlaces];

// console.log(randomNoun);

// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
//var textToSpeak = 'This is the text string that you will generate with your script';

var textToSpeakNouns = nouns; 
var textToSpeakVerbs = verbs; 
var textToSpeakAdjectives = adjectives; 
var textToSpeakNouns2 = nouns2; 
var textToSpeakPlaces = places; 
var textToSpeakFrase = randomNoun+" "+randomVerb+" "+randomAdjectives+" "+randomNoun2+", "+randomPlaces;
document.write(textToSpeakFrase);
//var textToSpeak = "Follow a list of the applications with more use of bandwidth";
var speakButtonNouns = document.querySelector('#button1');
var speakButtonVerbs = document.querySelector('#button2');
var speakButtonAdjectives = document.querySelector('#button3');
var speakButtonNouns2 = document.querySelector('#button4');
var speakButtonPlaces = document.querySelector('#button5');
var speakButtonFrase = document.querySelector('#button6');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButtonNouns.onclick = function() {
	speakNow(textToSpeakNouns);
}
speakButtonVerbs.onclick = function() {
	speakNow(textToSpeakVerbs);
}
speakButtonAdjectives.onclick = function() {
	speakNow(textToSpeakAdjectives);
}
speakButtonNouns2.onclick = function() {
	speakNow(textToSpeakNouns2);
}
speakButtonPlaces.onclick = function() {
	speakNow(textToSpeakPlaces);
}
speakButtonFrase.onclick = function() {
	speakNow(textToSpeakFrase);
}
