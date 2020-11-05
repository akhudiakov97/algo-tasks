// const initialAvailableCoins = [1, 2, 4, 8, 16, 32];
const initialAvailableCoins = [1, 1, 1, 2, 3, 6];
function solution(value, availableCoins, usedCoins){
    let currentAvailableCoins = [];
    for(const number of availableCoins){
        if(number === value){
            return [...usedCoins, value];
        }else if (number < value){
            currentAvailableCoins.push(number);
        }
    }

    for(let i = currentAvailableCoins.length; i>0; i--){
        // for(let i = 0; i<currentAvailableCoins.length; i++){
            const result = solution(value-currentAvailableCoins[i], 
            [
            ...currentAvailableCoins.slice(0, i), 
            ...currentAvailableCoins.slice(i+1)
        ], [...usedCoins, currentAvailableCoins[i]]);

        if(result){
            return result;
        }
    }
    return false;
}
console.log(solution(5, initialAvailableCoins, []));