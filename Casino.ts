import colors from 'colors';
import fs from 'fs';
colors.enable();

export class Casino {
  private montoDisponible: number = 0;
  private fecha: string = '';

  /* Setter and Getter */
  public setMontoDisponible(monto: number): void {
    this.montoDisponible = monto;
      fs.writeFileSync('billetera.txt', this.montoDisponible.toString())
  }
  public getMontoDisponible(): number {
    // try {
    //   fs.accessSync('billetera.txt');
      let montoLocal = fs.readFileSync('billetera.txt', 'utf8')
      this.montoDisponible = parseInt(montoLocal);
      return this.montoDisponible

    // } catch{
      // fs.writeFile('billetera.txt','1000', (err)=>{});
      // this.montoDisponible = 1000;
      // return this.montoDisponible
    // }

  }
  public setFecha(fecha: Date): void {
    const f = fecha;
    this.fecha = `${f.getDate()}/${f.getMonth()}/${f.getFullYear()} - ${f.getHours()}:${f.getMinutes()}`
  }
  public getFecha():string{
    return this.fecha;
  }
  /* Constructor */
  constructor() {
    try{
      fs.accessSync('billetera.txt');
      this.montoDisponible = parseInt(fs.readFileSync('billetera.txt','utf8'));

    } catch{
      this.montoDisponible = 1000;
    }

  }

  public ingresarApuesta(monto: number): boolean {
    if (this.montoDisponible < monto) {
      console.log(`Monto insuficiente para realizar un nuevo juego.`.red)
      return false;
    } else {
      this.montoDisponible -= monto;
      this.setMontoDisponible(this.montoDisponible);
      // console.log(`Monto disponible ${this.montoDisponible}`.bgBlue)
      return true;
    }
  }
}