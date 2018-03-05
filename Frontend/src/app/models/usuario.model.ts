export class Usuario {

    id: number;
    cedula: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    fechaNacimiento: Date;
    empresaId: number;

    constructor() {
      this.id = null;
      this
      this.cedula = '';
      this.nombre = '';
      this.primerApellido = '';
      this.segundoApellido = null;
      this.fechaNacimiento = new Date();
      this.empresaId=null;
    }
  }
