import { Casino } from "./Casino";

export class Craps extends Casino {
  private dadoUno: number;
  private dadoDos: number;

  public lanzarDados(dadoUno: number, dadoDos: number): boolean {

    if (dadoUno % 2 == 0 || dadoDos % 2 == 0) {
      return true
    };
    if ((dadoUno + dadoDos) === 3) {
      return true
    }
    return false
  }
}