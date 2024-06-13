// REVERSE A STRING 

function reverseString (str) {
    let reversed = '';
    for (let i=str.length-1; i>=0; i--) {
        reversed += str[i];
    }
    console.log("logging reverse string : ", reversed);
    return reversed;
}

console.log(reverseString('Bodheesh'));


    /* -------------------------------------------------------------------------- */
    /*                            USING INBUILT METHODS                           */
    /* -------------------------------------------------------------------------- */

    function reverse(str) {
        return str.split('').reverse('').join('');
    }

    console.log(reverse("saho"))

