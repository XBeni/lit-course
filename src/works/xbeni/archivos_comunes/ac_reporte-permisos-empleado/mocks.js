export const loadEmpleadosRpe = () => {
  return [{ nombre: 'Natanael Beniamin Cioarba', id_empleado: 'EMP_301' }, { nombre: 'Rosario Gamonal', id_empleado: 'EMP_302' }, { nombre: 'Abel Lawfa awfawfa', id_empleado: 'EMP_303' }, { nombre: 'Juan del Castillo', id_empleado: 'EMP_304' }];
};

export const getDatosReporteRpe = (idEmpleado, fechaInicio, fechaFin) => {
  // AJAX REQUEST SEGUN ID EMPLEADO > (FECHA I - FECHA F) EXTRAIGA DATOS SOLICITADOS ENTRE ESOS RANGOS DE FECHAS
  return [{ dia: '01/09/2020', tipoPermiso: 'c formación', horas: '4' }, { dia: '10/10/2020', tipoPermiso: 'd baja medica', horas: '8' }, { dia: '15/09/2020', tipoPermiso: 'e formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'a formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'dato centro', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'bb formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'formación', horas: '10' }, { dia: '15/09/2020', tipoPermiso: 'z formación', horas: '10' }, { dia: '31/09/2020', tipoPermiso: 'x ultimo dato', horas: '2' }];
};
