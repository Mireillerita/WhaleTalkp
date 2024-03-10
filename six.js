//Whale Talk
const input = 'Hello how are you today';

const vowels = ['a','e','i','o','u']
resultArray = [];

for (let i = 0; i <= input.length; i++){
    console.log('iteration position:',i);
    

    for(let j = 0; j < vowels.length; j++){
        // console.log(vowels[j]);
        console.log('Inner iteration position',j);
        if (input[i].toLowerCase() === vowels[j]){
            if (vowels[j] === 'u' || vowels[j] === 'e') {
                resultArray.push(vowels[j]);
              }
              resultArray.push(vowels[j]);
        }
    }
    console.log(input[i]);



    
    
}
console.log(resultArray.join('').toUpperCase());