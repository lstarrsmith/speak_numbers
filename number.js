	// create S object for module exporting
	var S = {}

	// core algorithm
	var ones_array = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
	var teens_array = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
	var tens_array = [' ', ' ', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

	function ones(n) {
		return ones_array[n]
	}

	function teens(n) {
		return teens_array[n-10]
	}

	function tens(n) {
		if (n % 10 === 0) {
			return tens_array[n/10]
		} else {
			var tens_digit = n.toString()[0]
			var ones_digit = n.toString()[1]
			return tens_array[parseInt(tens_digit)] + " " + ones_array[parseInt(ones_digit)]
		}
	}

	function hundreds(n) {
		if (n % 100 === 0) {
			return ones_array[(n/100)] + " Hundred" // one digit before the hundred
		} else if (n % 100 > 19) {
			return ones_array[(Math.floor(n/100))] + " Hundred " + tens(parseInt(n.toString().substring(1,3)))
		} else if (n % 100 > 9) {
			return ones_array[(Math.floor(n/100))] + " Hundred " + teens(parseInt(n.toString().substring(1,3)))
		} else {
			return ones_array[(Math.floor(n/100))] + " Hundred " + ones(parseInt(n.toString().substring(2,3)))
		}
	}

	function checkNumber(n) {
		if (n < 1 || n > 2500 || isNaN(n)) {
			return true
		} 
	}

	// saving as module to facilitate testing in mocha

	S.speakNum = function speakNum(numString) {
		// n is input field from html, always a string
		var num = parseInt(numString)
		var numString = String(num)
		// lastThreeDigits converts 100 to 100, 010 to 10, and 001 to 1
		var lastThreeDigits	= parseInt(numString.substring(1,4))

		// If lastThreeDigits' length is 3 i.e. 300 or 972, then it will send to the hundreds() function above. Similar idea for Tens and Teens functions.
		var sendToHundredsFunction = (String(lastThreeDigits).length === 3)
		var sendToTensFunction = (String(lastThreeDigits).length === 2 && lastThreeDigits > 19)
		var sendToTeensFunction	= (String(lastThreeDigits).length === 2 && lastThreeDigits < 20)
	
		// Basic low level security. This currently takes decimals as well, since parseInt converts 2.01343 to 2, but it's not outputting the correct speak output for numbers > 1000. Either way, we've instructed users to input only integers.
		if (checkNumber(num)){
			return "Please enter an integer (whole numbers, no decimals or fractions) between 0 and 2501. You can leave off initial zeros"
		} else if (num > 1000) {
			// first digit is pulled off for later concatenation i.e if num = 2501, th stores the 2
			var th = ones_array[parseInt(numString[0])]
			if (sendToHundredsFunction) {
				var hund = hundreds(lastThreeDigits)
				return th + " Thousand " + hund
			} else if (sendToTensFunction) {
				var ten = tens(lastThreeDigits)
				return th + " Thousand " + ten
 			} else if (sendToTeensFunction) {
 				var teen = teens(lastThreeDigits)
				return th + " Thousand " + teen
 			} else {
 				var one = ones(lastThreeDigits)
 				return th + " Thousand " + one
 			}
 		// if num is less than 1000, this sends it off to the appropriate function and returns the output
		} else if (num > 99) {
			return hundreds(num)
		} else if (num > 19) {
			return tens(num)
		} else if (num > 9) {
			return teens(num)
		} else {
			return ones(num)
		}
	}

	// export the module for testing in mocha
	// UNCOMMENT THIS NEXT LINE OUT TO RUN THE TESTS
	// module.exports = S;

