export class Solicitud {

    id: number;
    salario: number;
    fechaDeIngreso: Date;
    

    constructor() {
      this.id = null;
      this.salario = 0;
      this.fechaDeIngreso = new Date();
     
    }
  }