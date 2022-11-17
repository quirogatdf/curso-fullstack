// import { Casino } from "./Casino";

// export abstract class Tragamoneda extends Casino {
//   private tipoApuesta: string;
//   private probabilidad: number;
//   private nombreTematica: string;
//   private cantidadCarrete: number;
//   private lineasPago: number;

//   /* Setter and Getter */
//   public setLineasPago(lineas: number): void {
//     this.lineasPago = lineas;
//   }
//   public getLineasPago(): number {
//     return this.lineasPago;
//   }
//   public setCantidadCarrete(cantidad: number): void {
//     this.cantidadCarrete = cantidad;
//   }
//   public getCantidadCarrete(): number {
//     return this.cantidadCarrete;
//   }

//   public setNombreTematica(tematica: string): void {
//     this.nombreTematica = tematica;
//   }
//   public getNombreTematica(): string {
//     return this.nombreTematica;
//   }

//   public abstract apostar();

  

//   public constructor(tematica: string, cantidadCarrete: number, lineasPago: number) {

//     super();
//     this.nombreTematica = tematica;
//     this.cantidadCarrete = cantidadCarrete;
//     this.lineasPago = lineasPago;

//   }

// }