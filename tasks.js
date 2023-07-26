/* Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

Example Input: "hello world" Example Output: "dlrow olleh" */

{
  function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  const str = "hello world";
  const reversedString = reverseString(str);
  console.log(reversedString);
}

/* Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

Example Input: [2, -5, 10, -3, 7] Example Output: 19 */

{
  function sumPositiveNumbers(numbers) {
    // let sum = 0
    const positiveNumber = numbers.filter((number) => number >= 0);
    const sum = positiveNumber.reduce((sum, number) => sum + number, 0);
    return sum;
  }
  const numbers = [2, -5, 10, -3, 7];
  const result = sumPositiveNumbers(numbers);
  console.log(result);
}

/* Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3 */

{
  function findMostFrequent(numbers) {
    let maxFrequent = {};
    for (let number of numbers) {
      if (maxFrequent[number]) {
        maxFrequent[number]++;
      } else {
        maxFrequent[number] = 1;
      }
    }
    console.log(maxFrequent);

    let mostFrequent;
    let count = 0;
    for (let item in maxFrequent) {
      if (maxFrequent[item] > count) {
        mostFrequent = item;
        count = maxFrequent[item];
      }
    }
    return mostFrequent;
  }
  const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = findMostFrequent(numbers);
  console.log(result);
}

/* Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

 Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9) */

/* Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
 */

{
  function calculator(number1, number2, operator) {
    switch (operator) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        return number1 / number2;
      default:
        return "Invalid Operator";
    }
  }
  const result = calculator(5, 2, "/");
  console.log(result);
}

/* Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters. */

{
  function randomPassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialChars

    let password = ''
    for(let i = 0; i < length; i++){
        const randIndex = Math.floor(Math.random() * allChars.length)
        password += allChars.charAt(randIndex)
    }
    return password
  }
  const result = randomPassword(20);
  console.log(result);
}

/* Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. */

{
    function convertRomanToInteger(romanNumeral){
        const romanNumbers = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        let integerNumber = 0
        for(let i = 0; i < romanNumeral.length; i++){
            const currentItemValue = romanNumbers[romanNumeral[i]]
            const nextItemValue = romanNumbers[romanNumeral[i + 1]]
            if(nextItemValue > currentItemValue){
                integerNumber += nextItemValue - currentItemValue
                i++
            }else{
                integerNumber += currentItemValue
            }
        }
        return integerNumber
    }
    const result = convertRomanToInteger('XXI')
    console.log(result);
}

/* Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. */

{
    function secondSmallestNumber(numbers){
        // const sorted = numbers.sort((a,b)=> a-b)
        // return sorted[1]
        
        // let smallest = Infinity;
        // let secondSmallest = Infinity;
      
        // for (const number of numbers) {
        //   if (number < smallest) {
        //     secondSmallest = smallest;
        //     smallest = number;
        //   } else if (number < secondSmallest && number !== smallest) {
        //     secondSmallest = number;
        //   }
        // }

        let smallest = numbers[0]; 
		let secondSmallest = numbers[1]; 

		for(let i = 0; i < numbers.length; i++) { 
			if(numbers[i] < smallest) {  
                secondSmallest = smallest
				smallest = numbers[i];  
			}  

			if(numbers[i] !== smallest && numbers[i] < secondSmallest ) { 
				secondSmallest = numbers[i]; 
			} 
		} 
      
        return secondSmallest;
    }
    const numbers = [60, 10, 30, 20, 10, 10, 20, 50, 40]
    const result = secondSmallestNumber(numbers)
    console.log(result);
}
