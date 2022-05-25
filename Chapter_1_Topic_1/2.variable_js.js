var nama123 = "baybayu";

var 123bb = "yuyu";

var namaPengguna = "Sabrina";
let topic1 = "Javascript Fundamentals";

//variabel var 
var harga;
harga = 5000;

var harga = 1000;

// var global scope
var diskon = 500;
if (true){
    var diskon = 300;
}
console.log(diskon);

var diskon = 500;
function diskonScope(){
    var diskon = 300;
    console.log(diskon);
}
diskonScope();
console.log(diskon);