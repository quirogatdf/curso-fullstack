/* Se define la clase Microonda*/
var Microonda = /** @class */ (function () {
    /*Definir constructor */
    function Microonda(initialPotency, initialTime) {
        /*Variables internas*/
        this.isHeating = false;
        this.potency = initialPotency;
        this.cookingTime = initialTime;
    }
    /*Mètodos */
    Microonda.prototype.startCancel = function () {
        this.isHeating = !this.isHeating;
    };
    Microonda.prototype.addTime = function () {
        this.cookingTime += 30;
    };
    Microonda.prototype.increasePotency = function () {
        this.potency += 1;
    };
    Microonda.prototype.decreasePotency = function () {
        this.potency -= 1;
    };
    return Microonda;
}());
var microondaSamsung = new Microonda(1, 30);
/* Muestra por consola el objeto instanciado */
console.log(microondaSamsung);
/* Es modifica el estado de las variables */
microondaSamsung.startCancel();
microondaSamsung.addTime();
microondaSamsung.increasePotency();
/* Muestra por consola el estado del Microonda */
console.log(microondaSamsung);
