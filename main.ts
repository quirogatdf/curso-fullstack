import readlyneSync from 'readline-sync';
import { Blackjack } from "./Blackjack";

const startGame = readlyneSync.question(`
####################################\r
# Desea iniciar una nueva partida? #\r
#   1: Si                          #\r
#   2: No                          #\r
####################################\n
Ingrese una opcion: `.blue.bold);

if (startGame === '1') {
  let continued: boolean = true;
  const blackjack = new Blackjack();

  while (continued) {
    
    const isApuesta: number = parseInt(readlyneSync.question(`Ingresar monto de la apuesta: $`.yellow));
    if (!isNaN(isApuesta)) {

      const isValited = blackjack.ingresarApuesta(isApuesta);
      if (isValited) {
        blackjack.generarMano();
        blackjack.verificarGanador();
      }
    } else {
      console.log(`Fin del juego, el monto ingresado es inválido`.bgRed)
    }
    if (readlyneSync.keyInYN('Desea jugar nuevamente?')) {
      continued = true;
    } else {
      continued = false;
    }
  }
} else {
  console.log(`Fin del juego, su monto total es `)
}

