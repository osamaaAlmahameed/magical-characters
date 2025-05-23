function ReversalCharacters(Word){
    let Reverse = "";
    for(let i = Word.length - 1 ; i >= 0 ; i--){
        Reverse += Word[i];
    }
    return Reverse ;
}

const Word = "Javascript";

console.log(ReversalCharacters(Word))