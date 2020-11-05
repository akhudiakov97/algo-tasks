const initialAvailableCoins = [1, 2, 4, 8, 16, 32];
function solution(value, availableCoins){
    let currentAvailableCoins = [];
    for(const number of availableCoins){
        if(number === value){
            return true;
        }else if (number < value){
            currentAvailableCoins.push(number);
        }
    }

    for(let i = 0; i<currentAvailableCoins.length; i++){
        if(solution(value-currentAvailableCoins[i], 
            [
            ...currentAvailableCoins.slice(0, i), 
            ...currentAvailableCoins.slice(i+1)
        ])){
            return true;
        }
    }
    return false;
}
console.log(solution(10, initialAvailableCoins));