function palindrome(str) {
    //take string and remove all non-word characters and into lowercase
    str = str.replace(/\w/g, '').toLowerCase();
    //get a bollean value, split it into an array, reverse and join into a string 
    return (str == str.split('').reverse().join(''));
}

palindrome('Apple-iPad'); //true