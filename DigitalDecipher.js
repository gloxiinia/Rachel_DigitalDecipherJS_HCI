//function to find the corresponding value to the updated inputted array
const GetKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

//creating the function to decipher code
const DecipherThis = (InputArr, Key) => {
    
    //creating an empty dictionary
    let cipher = {};

    //creating an array of the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    //creating an array of the values that correspond to each letter of the alphabet
    const numbers = [];

    for( let number = 1; number <= 26; number ++){
        numbers.push(number);
    }
    //appending to the cipher dictionary with the key value pair of the alphabet and its 
    //corresponding number value
    alphabet.forEach((key, i) => cipher[key] = numbers[i]);

    //function to create an array from the inputted key
    let ListNum = num => Number(num);
    Key = Array.from(String(Key), ListNum);
    
    //declaring in bools if the inputted key length is longer than the inputted array
    let bool = Key.length < InputArr.length;

    //switch to check whether bool is true /false
    switch(bool){
        //true case
        case true:
            //making a shallow copy of the inputted array
            let dup = InputArr.slice();

            //splicing the diff in the copied array
            dup = dup.splice(0, InputArr.length - Key.length);

            //concatenating the spliced array and the key to create a key that is the same
            //length as the inputted array
            dup = Key.concat(dup);

            //repeating the key length, starting from index 0 until the backend (joined spliced array) 
            //is fully replaced
            for(let i = 0; i < dup.length; i++){
                dup.copyWithin(Key.length);
              }

            //for loop to cycle through the inputted array and the copy to get the new cipher value
            for( let i = 0; i < InputArr.length; i++){
                InputArr[i] = InputArr[i] - dup[i];
                InputArr[i] = GetKeyByValue(cipher, InputArr[i]);
            }
            //returns the deciphered message as a string
            return InputArr.join('');
        
        //false case
        case false:
            //for loop to cycle through the inputted array and the copy to get the new cipher value
            for( let i = 0; i < InputArr.length; i++){
                InputArr[i] = InputArr[i] - Key[i];
                InputArr[i] = GetKeyByValue(cipher, InputArr[i]);
            }
            //returns the deciphered message as a string
            return InputArr.join('');
    }


        



}

//Driver to run the code

//scout
console.log(DecipherThis([20, 12, 18, 30, 21], 1939));

//masterpiece
console.log(DecipherThis([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939));

//mubashir
console.log(DecipherThis([14, 30, 11, 1, 20, 17, 18, 18,], 1990));

//edabit
console.log(DecipherThis([6, 4, 1, 3, 9, 20], 100));

//arcane
console.log(DecipherThis([3, 19, 4, 6, 16, 6], 2115));

//blood
console.log(DecipherThis([3, 17, 21, 20, 11], 15657));
