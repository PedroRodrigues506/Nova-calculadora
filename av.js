var teclado = require("prompt-sync")();
var tab = parseInt(teclado("Digite a tabuada:"));
function tabuada() {
    var cont = 0;
    while (cont <= 10) {
        console.log("&{tab} x ".concat(cont, " = ").concat(tab * cont));
        cont++;
    }
    console.log("".concat(tab, " x ").concat(cont, " = ").concat(tab * cont));
    cont++;
}
