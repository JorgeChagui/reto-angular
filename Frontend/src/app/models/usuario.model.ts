export class Usuario {

    id: number;
    cedula: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    fechaNacimiento: Date;

    constructor() {
      this.id = null;
      this.cedula = '';
      this.nombre = '';
      this.primerApellido = '';
      this.segundoApellido = '';
      this.fechaNacimiento = new Date();
    }
  }
