import { Casino } from "./Casino";

export abstract class Tragamoneda extends Casino {
  private nombreTematica: string = 'Tragamoneda';
  private cantidadCarrete: number = 0;



  /* Setter and Getter */
  public setNombreTematica(nombre: string): void {
    this.nombreTematica = nombre;
  }
  public getNombreTematica(): string {
    return this.nombreTematica;
  }
  public setCantidadLineas(lineas: number): void {
    this.cantidadCarrete = lineas;
  }
  public getCantidadLineas(): number {
    return this.cantidadCarrete;
  }

  public abstract verificaPremio(): void;

  public generarValores(lineas: number): void {
    let valores= new Array(lineas);
    for (let i = 0; i < lineas; i++) {
      
      valores[i] = (Math.ceil(Math.random() * 7))
    }
    console.log(valores);

  }

}