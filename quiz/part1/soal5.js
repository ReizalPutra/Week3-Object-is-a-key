//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  
  let result = "";
  for (let i = 0; i < kata.length; i++) {
    let charCode = kata.charCodeAt(i);
    if (charCode === 122) {
      result += String.fromCharCode(97);
    } else {
      result += String.fromCharCode(charCode + 1);
    }
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
