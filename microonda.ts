
/* Se define la clase Microonda*/
class Microonda {
  /*Variables internas*/
  private isHeating: boolean = false;
  private cookingTime: number;
  private potency: number;

  /*Definir constructor */
  constructor(initialPotency: number, initialTime: number) {
    this.potency = initialPotency;
    this.cookingTime = initialTime;
  }
  /*Mètodos */
  startCancel(): void {
      this.isHeating = !this.isHeating
  } 
  addTime(): void {
    this.cookingTime += 30;
  }
  increasePotency(): void {
    this.potency += 1;
  }
  decreasePotency(): void {
    this.potency -= 1;
  }
}

let microondaSamsung = new Microonda(1, 30);

/* Muestra por consola el objeto instanciado */
console.log(microondaSamsung);
/* Es modifica el estado de las variables */
microondaSamsung.startCancel();
microondaSamsung.addTime();
microondaSamsung.increasePotency();
/* Muestra por consola el estado del Microonda */
console.log(microondaSamsung);
