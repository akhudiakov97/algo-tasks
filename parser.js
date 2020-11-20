const multiply = (expression)=>{

}
const parser = (expression) => {
    if(expression.includes('(')){
       let i = 0;
       while(expression[i] !== '('){
           i++;
       }
       let j = i+1;
       while(expression[j]!==')'){
           if(expression[j]==='('){
               i=j;
           }
           j++;
       }
       return parser(expression.slice(0, i)+ parser(expression.slice(i+1, j)) + expression.slice(j+1));
    } 

    if(expression.includes('*')){
        let i = 0 //индекс знака умножения
        let k //индекс начала левого аргумента
        let j //индекс конца правого аргумента
        while (i!=='*') {
            i++;
        }
        k = i-1;
        j = i+1;
        while(!isNaN(expression[k]) && k>=0){
            k--;
        }
        if(k>0){
            k++;
        }

        while(expression[j]==='+' || expression[j] === '-'){
            j++;
        }

        while(!isNaN(expression[j]) && j<expression.length){
            j++;
        }

        if(j<expression.length-1){
            j--;
        }

        return parser(expression.slice(0, k)+ multiply(expression.slice(k, j+1)) + expression.slice(j+1));
    }
};

parser('(2*(2+3)-6*(1+2)/2)');