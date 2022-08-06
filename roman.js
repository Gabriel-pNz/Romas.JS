let romans = "XLIX"
let array = romans.toUpperCase().split("")
let newArr = [];
let soma = 0;

function convertDecimal(array) {
    
    for (let i = 0; i <= array.length; i++) {
        switch (array[i]) {
            case "I": 
                newArr[i] = 1;
                break;
            case "V": 
                newArr[i] = 5;
                break;
            case "X": 
                newArr[i] = 10;
                break;
            case "L": 
                newArr[i] = 50;
                break;
            default: 
        }  
    }

    for (let i = 0; i < newArr.length ; i++) {

        if (newArr.length <= 2) {
            if (newArr[i] >= newArr[i+1]) {
                return soma = newArr[i] + newArr[i+1];
                
            }else if (newArr[i] < newArr[i+1]) {
                return soma = newArr[i+1] - newArr[i];
            }else {
                return soma = newArr[i];
            }
        }  

        if (newArr.length >= 3) {
            for (let i=0;i<newArr.length;i++) {
                if (newArr[i] >= newArr[i+1]){
                    soma = soma + newArr[i]
                }else if (newArr[i] < newArr[i+1]) {
                    soma = soma - newArr[i]
                }else {
                    return soma = soma + newArr[i];
                }
            }
            return soma 
        }
    }
}

console.log(convertDecimal(array))


