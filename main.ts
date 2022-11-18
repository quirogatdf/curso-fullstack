import readlineSync from 'readline-sync';
import { Blackjack } from "./Blackjack";
import { TragamonedaRockero } from './TragamonedaRockero';



console.log(`╔════════════════════════════════════╗`.cyan);
console.log(`╠ ¤ `.cyan + `Bienvenido al Casino Sun City`.rainbow + ` ¤ ═╣`.cyan);
console.log(`╚════════════════════════════════════╝`.cyan);
const gamesAvailable = ['Tragamoneda', 'Ruleta ', 'Blackjack'];
const selectedGame = readlineSync.keyInSelect(gamesAvailable, 'Bienvenido, que Juego desea iniciar'.blue.bold);


switch (selectedGame) {
  case 0:
    /* Tragamoneda Rockero */
    console.log(`Resultado de su tirada`.rainbow);
    const tragamonedaRockero = new TragamonedaRockero();
    tragamonedaRockero.generarValores(3);

    break;
  case 1:
    console.log(`Juego disponible, proximamente`.red);
    break;

  case 2: {
    /* Inicia Blackjack */
    const startGame = readlineSync.question(`
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

        const isApuesta: number = parseInt(readlineSync.question(`Ingresar monto de la apuesta: $`.yellow));
        if (!isNaN(isApuesta)) {

          const isValited = blackjack.ingresarApuesta(isApuesta);
          if (isValited) {
            blackjack.generarMano();
            blackjack.verificarGanador();
          }
        } else {
          console.log(`Fin del juego, el monto ingresado es inválido`.bgRed)
        }
        if (readlineSync.keyInYN('Desea jugar nuevamente?')) {
          continued = true;
        } else {
          continued = false;
        }
      }
    } else {
      console.log(`Fin del juego, su monto total es `)
    }
  }
    break;
}




