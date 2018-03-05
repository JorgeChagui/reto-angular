export class Solicitud {

  id: number;
  salario: number;
  fechaIngreso: Date;


  constructor() {
    this.id = null;
    this.salario = null;
    this.fechaIngreso = new Date();

  }
}
