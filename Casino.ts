import colors from 'colors';

colors.enable();

export class Casino {
  private montoDisponible: number;

  /* Setter and Getter */
  public setMontoDisponible(monto: number): void {
    this.montoDisponible = monto;
  }
  public getMontoDisponible(): number {
    return this.montoDisponible
  }
  /* Constructor */
  constructor() {
    this.montoDisponible = 100;
  }
  public ingresarApuesta(monto: number): boolean {
    if (this.montoDisponible < monto) {
      console.log(`Monto insuficiente para realizar un nuevo juego.`.red)
      return false;
    } else {
      this.montoDisponible -= monto;
      // console.log(`Monto disponible ${this.montoDisponible}`.bgBlue)
      return true;
    }
  }
}