
const transacciones = [
  { tipo: 'ingreso', monto: 1000 },
  { tipo: 'gasto', monto: 200 },
  { tipo: 'ingreso', monto: 500 },
  { tipo: 'gasto', monto: 300 },
];

function Ejercicio3() {
  const saldoTotal = transacciones.reduce((saldo, transaccion) => {
    saldo[transaccion.tipo] = (saldo[transaccion.tipo] || 0) + transaccion.monto;
    return saldo;
  }, {});

  console.log(saldoTotal); // { ingreso: 1500, gasto: 500 }
}

Ejercicio3();