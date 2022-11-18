import colors from 'colors';
import fs from 'fs';
import { Casino } from "./Casino";

colors.enable();

export class Blackjack extends Casino {
  constructor() {
    super();
  }
  private montoApuesta: number = 0;

  private manoJugador: number[] = [0, 0];
  private puntosJugador: number = 0;

  private manoCrupier: number[] = [0, 0];
  private puntosCrupier: number = 0;

  public generarCarta(): number {
    let valorFinal: number = 0;
    let carta: number = Math.ceil(Math.random() * 15)
    if (carta >= 10 && carta < 14) {
      valorFinal = 10;
    } else if (carta == 14) {
      valorFinal = 11;
    } else {
      valorFinal = carta
    }
    return valorFinal;
  }


  public generarMano(): void {
    this.manoJugador[0] = this.generarCarta();
    this.manoJugador[1] = this.generarCarta();
    this.manoCrupier[0] = this.generarCarta();
    this.manoCrupier[1] = this.generarCarta();
  }
  public ingresarApuesta(monto: number): boolean {
    this.montoApuesta = monto;
    return super.ingresarApuesta(monto);
  }
  public verificarGanador() {
    /* Inicializar variables */
    let totalJugador = 0;
    let totalCrupier = 0;

    /* Se suman los puntajes */
    totalJugador = this.manoJugador[0] + this.manoJugador[1];
    totalCrupier = this.manoCrupier[0] + this.manoCrupier[1];

    /* Muestra por consola los puntajes obtenidos */
    console.log(`Puntos del Jugador`.bold);
    console.log(`${totalJugador}`.yellow)
    console.log(`\nPuntos del Crupier`.bold);
    console.log(`${totalCrupier}`.yellow)

    /* Verifica quien fue el ganador */
    console.log(`\nRESULTADO`.bold);
    let msg : string ="";
    if ((totalJugador == 21) && (totalCrupier != 21)) {
      let nuevoSaldo = (super.getMontoDisponible() + this.montoApuesta * 2.5);
      super.setMontoDisponible(nuevoSaldo);
      msg = 'Blackjack! > El jugador ah ganado';
      console.log(msg .green);
      console.log(`Su monto disponible es ${nuevoSaldo}` .bgGreen);
    };

    if ((totalCrupier == 21) && (totalJugador != 21)) {
      msg = 'Blackjack! > El Crupier ah ganado'
      console.log(msg .red);
      console.log(`Su monto disponible es ${super.getMontoDisponible()}`.bgRed);
    };

    if ((totalJugador < 21 && (totalJugador > totalCrupier)) || (totalCrupier > 21 && totalJugador<21)) {
      let nuevoSaldo = (super.getMontoDisponible() + this.montoApuesta * 2);
      super.setMontoDisponible(nuevoSaldo);
      msg =`El jugador ha ganado`
      console.log(msg .green);
      console.log(`Su monto disponible es ${nuevoSaldo}` .bgGreen);
    }

    if ((totalCrupier < 21 && (totalCrupier > totalJugador)) || (totalJugador > 21 && totalCrupier<21)) {
      msg = `El crupier ha ganado`;
      console.log(msg .red);
      console.log(`Su monto disponible es ${super.getMontoDisponible()}`.bgRed);
    }
    if ((totalJugador > 21 && totalCrupier > 21) || (totalJugador == totalCrupier)) {
      msg = `Empate`;
      console.log(msg.yellow);
      this.setMontoDisponible(this.getMontoDisponible() + this.montoApuesta);
      console.log(`Su monto disponible es ${super.getMontoDisponible()}`.bgYellow);

    }

    super.setFecha(new Date);
    let fechaLog = super.getFecha();
    fs.appendFile('Blackjack.txt', ` ${fechaLog} >>> ${msg}\n`, (err)=>{});
  }

}
