function isVowel(char){
    return char === 'e' || char === 'a' || char === 'o' || char === 'u'  || char === 'i' || char === 'y'; 
}

function solution(string){
    let counterOfSequence = 0;
    let isVowelSequence = false;
    for(let i = 0; i<string.length; i++){
        if(isVowel(string[i-1]) && isVowel(string[i])){
            isVowelSequence = true;
        }
        if((isVowelSequence && !isVowel(string[i])) || (isVowelSequence && !string[i+1])){
            counterOfSequence++;
            isVowelSequence = false;
        }
    }
    return counterOfSequence;
}

solution('a bb c i uu');