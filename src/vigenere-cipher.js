/* class VigenereCipheringMachine {

    constructor(direct){
        this.direct = direct === false ? false : true; 
    }

    encrypt(message, key) {
        if(!message || !key) throw Error;


    }

    decrypt(encryptedMessage, key) {
        if(!encryptedMessage || !key) throw Error;
        console.log(encryptedMessage, key);
        
        	    var output = "";
	    for (var i = 0, j = 0; i < encryptedMessage.length; i++) {
	    	var c = encryptedMessage.charCodeAt(i);
	    	if (this.isUppercase(c)) {
	    		output += String.fromCharCode((c - 65 + key.charCodeAt(j % key.length)) % 26 + 65);
                
	    		j++;
	    	} else if (this.isLowercase(c)) {
	    		output += String.fromCharCode((c - 97 + key.charCodeAt(j % key.length)) % 26 + 97);
	    		j++;
	    	} else {
	    		output += encryptedMessage.charAt(i);
	    	}
	    }
	    return output;

    }

    // Tests whether the specified character code is an uppercase letter.
    isUppercase(c) {
    	return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
    }

    // Tests whether the specified character code is a lowercase letter.
    isLowercase(c) {
    	return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
    }
}

module.exports = VigenereCipheringMachine;
 */

class VigenereCipheringMachine {
  encrypt() {
    throw "Not implemented";
    // remove line with error and write your code here
  }

  decrypt() {
    throw "Not implemented";
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
