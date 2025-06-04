//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
function encodeToBase64(input) {
    return btoa(input);
}

const originalString = "Hello World";
const encodedString = encodeToBase64(originalString);

console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQ="