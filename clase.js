  
class Empleado {
    constructor(id, nombre, fechaIngreso, salario) {
      (this.id = id),
        (this.nombre = nombre),
        (this.fechaIngreso = fechaIngreso),
        (this.salario = salario);
    }
  
    calcularTiempo() {
      let fechaActual = new Date();
      let fechaYear = fechaActual.getFullYear();
      let fechaSplit = this.fechaIngreso.split("-");
      return fechaYear - fechaSplit[2];
    }
    getSalario() {
      return this.salario;
    }
  
    setNombre(nombre) {
      return (this.nombre = nombre);
    }
  
    setSalario(salario) {
      return (this.salario = salario);
    }
  
    calcularBonificacion() {
      if (this.calcularTiempo() === 1) {
        let bonificacion = this.salario * 0.05;
        console.log("La bonificacion es de: $" + bonificacion);
      } else if (this.calcularTiempo() == 2) {
        let bonificacion = this.salario * 0.1;
        console.log("La bonificacion es de: $" + bonificacion);
      }else if (this.calcularTiempo() == 3) {
        let bonificacion = this.salario * 0.15;
        console.log("La bonificacion es de: $" + bonificacion);
      }else if (this.calcularTiempo() >= 4) {
        let bonificacion = this.salario * 0.20;
        console.log("La bonificacion es de: $" + bonificacion);
      }
    }
  }
  
  class Departamento {
    constructor(nombre) {
      (this.nombre = nombre), (this.empleadoList = []), this.gerente, this.listagerente=[];
    }
  
    agregarEmpleadoList(empleado) {
      let empleadoExiste = this.empleadoList.indexOf(empleado);
      if (empleadoExiste != -1) {
        console.log("No se puede agregar un mismo empleado");
      } else {
        this.empleadoList.push(empleado);
        console.log("Se agrego el empleado correctamente");
      }
    }
  
    calcularSumaSalario() {
      let sumaSalario = 0;
      if (this.empleadoList.length > 0) {
        this.empleadoList.forEach((empleado) => {
          sumaSalario += empleado.getSalario();
          console.log("Suma del departamento: " + sumaSalario);
        });
      }
    }
  
    eliminarEmpleadoList(empleado) {
      let posicionEmpleado = this.empleadoList.indexOf(empleado);
  
      if (posicionEmpleado != -1) {
        this.empleadoList.splice(posicionEmpleado, 1);
        console.log("Se elimino correctamente");
      } else {
        console.log("No existe el empledo a eliminar");
      }
    }
    agregarGerente(gerente) {
      let posiciongerente = this.listagerente.indexOf(gerente);
  
      if (posiciongerente != -1) {
        this.listagerente.splice(posiciongerente, 1);
        console.log("Ya existe un gerente");
      } else {
        
        console.log("Se agrego el gerente");
      }
  }
}
  
  const empleado1 = new Empleado(1, "Julio", "01-01-2019", 400);
  empleado1.setNombre("Mauricio");
  const depa = new Departamento("RRHH");
  depa.agregarEmpleadoList(empleado1);
  depa.agregarEmpleadoList(empleado1);
  empleado1.calcularTiempo();
  const gerente1 = new Departamento('Pedro')
  console.log(gerente1.agregarGerente())