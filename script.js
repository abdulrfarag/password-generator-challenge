// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
    var password = ""
    var chosenCharacter = []
    console.log(`chosenCharacter`, chosenCharacter)
    var lengthChoice = prompt("8 characters and no more than 128 characters")

    var lowercase = confirm("Would you like to use lowercase characters in you password")
    if (lowercase) {
        chosenCharacter = [...chosenCharacter, ...lowerCasedCharacters]
    }
    console.log(`chosenCharacter`, chosenCharacter)
    
    var uppercase = confirm("Would you like to use uppercase characters in you password")
    if (uppercase) {
        chosenCharacter = [...chosenCharacter, ...upperCasedCharacters]
    }
    console.log("chosenCharacter", chosenCharacter)

    var numeric = confirm("Would you like to use numeric characters in you password")
    if (numeric) {
        chosenCharacter = [...chosenCharacter, ...numericCharacters]
    }
    console.log("chosenCharacter", chosenCharacter)

    var specialCharactersChoice = confirm("Would you like to use special characters in you password")
    if (specialCharactersChoice) {
        chosenCharacter = [...chosenCharacter, ...specialCharacters]
    }
    console.log("chosenCharacter", chosenCharacter)

    for (let i=0; i < lengthChoice; i++) {
        var index = Math.floor(Math.random() * chosenCharacter.length);
        var randomCharacter = chosenCharacter[index];
        password += randomCharacter 
    }

    return password
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}



