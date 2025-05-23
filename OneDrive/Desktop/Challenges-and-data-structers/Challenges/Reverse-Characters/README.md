# Reverse Characters 

## Challenge Description 
Write a function `ReverseCharacters` that takes a single string as input. Without using any built-in methods should return the string with all characters reversed.

``` javascript code
function ReversalCharacters(Word){
    let Reverse = "";
    for(let i = Word.length - 1 ; i >= 0 ; i--){
        Reverse += Word[i];
    }
    return Reverse ;
}

const Word = "Javascript";

console.log(ReversalCharacters(Word))