function makeid(l) {
  // write your code here
	const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for(let i=0; i<l; i++){
        result += char.charAt(Math.floor(Math.random()*char.length));
    }
    return result;	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
