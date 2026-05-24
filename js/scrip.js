
// =============================================
// script.js — Desafío Fibonacci y Primos
// =============================================
 
// ---------------------------------------------
// FUNCIÓN: Cambiar modo del formulario
// Muestra u oculta campos según el modo elegido
// ---------------------------------------------
function cambiarModo() {
  var modo = document.getElementById("modo").value;
 
  // Mostrar u ocultar campos usando getElementById
  document.getElementById("grupo-terminos").style.display =
    (modo === "combinado" || modo === "fibonacci" || modo === "ahorro") ? "block" : "none";
 
  document.getElementById("grupo-numero").style.display =
    (modo === "primo") ? "block" : "none";
 
  document.getElementById("grupo-monto").style.display =
    (modo === "ahorro") ? "block" : "none";
 
  limpiar();
}
 
// ---------------------------------------------
// FUNCIÓN: Verificar si un número es primo
// Cuenta divisores: si solo tiene 2, es primo
// ---------------------------------------------
function esPrimo(n) {
  if (n < 2) return false;
  var contador = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      contador++;
    }
  }
  return contador === 2;
}
 
// ---------------------------------------------
// FUNCIÓN: Obtener todos los divisores de n
// ---------------------------------------------
function getDivisores(n) {
  var divisores = [];
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
}
 
// ---------------------------------------------
// FUNCIÓN: Generar secuencia Fibonacci
// Retorna un array de n términos sin usar vectores
// extra — solo variables a, b, c
// ---------------------------------------------
function generarFibonacci(n) {
  var terminos = [];
  var a = 1, b = 1, c;
  terminos.push(a);
  if (n > 1) terminos.push(b);
  for (var i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    terminos.push(c);
  }
  return terminos;
}
 
// ---------------------------------------------
// FUNCIÓN PRINCIPAL: Calcular según el modo
// Lee el valor del select con getElementById
// ---------------------------------------------
function calcular() {
  var modo = document.getElementById("modo").value;
 
  // Mostrar área de resultado, ocultar placeholder
  document.getElementById("placeholder").style.display = "none";
  document.getElementById("resultado").style.display = "block";
 
  // Ejecutar la función correspondiente al modo
  if (modo === "combinado") {
    calcularCombinado();
  } else if (modo === "fibonacci") {
    calcularFibonacci();
  } else if (modo === "primo") {
    calcularPrimo();
  } else if (modo === "ahorro") {
    calcularAhorro();
  }
}
 
// ---------------------------------------------
// MODO 1: Fibonacci + Primos combinado
// Genera secuencia y detecta cuáles son primos
// ---------------------------------------------
function calcularCombinado() {
  var n = parseInt(document.getElementById("terminos").value);
 
  // Validar entrada
  if (isNaN(n) || n < 2 || n > 40) {
    mostrarError("Ingresa un número entre 2 y 40.");
    return;
  }
 
  var terminos = generarFibonacci(n);
  var primos = terminos.filter(function(x) { return esPrimo(x); });
 
  // Construir HTML del resultado
  var html = '<p class="result-title">Fibonacci + Primos — ' + n + ' términos</p>';
 
  // Tarjetas de estadísticas
  html += '<div class="stats-row">';
  html += '<div class="stat-card"><div class="stat-num" style="color:var(--teal);">' + n + '</div><div class="stat-label">Términos Fibonacci</div></div>';
  html += '<div class="stat-card"><div class="stat-num" style="color:var(--prime-color);">' + primos.length + '</div><div class="stat-label">Son primos</div></div>';
  html += '<div class="stat-card"><div class="stat-num" style="color:var(--gold);">' + (n - primos.length) + '</div><div class="stat-label">No son primos</div></div>';
  html += '<div class="stat-card"><div class="stat-num" style="color:#90A0B7;">' + terminos[terminos.length - 1].toLocaleString() + '</div><div class="stat-label">Último término</div></div>';
  html += '</div>';
 
  // Instrucción de colores
  html += '<p style="font-size:13px;color:#90A0B7;margin-bottom:0.75rem;">';
  html += '<span style="color:var(--prime-color);">Rojo = primo ✦</span> &nbsp;·&nbsp; <span style="color:var(--teal);">Azul = no primo</span>';
  html += '</p>';
 
  // Grilla de términos con colores
  html += '<div class="sequence-grid">';
  for (var j = 0; j < terminos.length; j++) {
    var isPrime = esPrimo(terminos[j]);
    var clase = isPrime ? 'is-prime' : 'not-prime';
    html += '<div class="seq-item ' + clase + '" title="Término ' + (j + 1) + ': ' + terminos[j] + (isPrime ? ' (PRIMO)' : '') + '">';
    html += terminos[j].toLocaleString();
    if (isPrime) html += ' ✦';
    html += '</div>';
  }
  html += '</div>';
 
  // Leyenda
  html += '<div class="legend">';
  html += '<div class="legend-item"><div class="legend-dot" style="background:rgba(230,57,70,0.4);"></div>Primo de Fibonacci</div>';
  html += '<div class="legend-item"><div class="legend-dot" style="background:rgba(0,180,216,0.3);"></div>No primo</div>';
  html += '</div>';
 
  // Lista de primos encontrados
  if (primos.length > 0) {
    html += '<div style="margin-top:1.5rem;padding:1rem;background:rgba(230,57,70,0.06);border-radius:12px;border:1px solid rgba(230,57,70,0.15);">';
    html += '<p style="font-size:12px;font-family:Space Mono,monospace;color:var(--prime-color);margin-bottom:8px;">PRIMOS ENCONTRADOS</p>';
    html += '<p style="font-family:Space Mono,monospace;font-size:14px;color:#FF6B7A;">' + primos.join(' · ') + '</p>';
    html += '</div>';
  }
 
  // Mostrar resultado usando getElementById
  document.getElementById("resultado").innerHTML = html;
}
 
// ---------------------------------------------
// MODO 2: Solo secuencia Fibonacci
// ---------------------------------------------
function calcularFibonacci() {
  var n = parseInt(document.getElementById("terminos").value);
 
  if (isNaN(n) || n < 2 || n > 40) {
    mostrarError("Ingresa un número entre 2 y 40.");
    return;
  }
 
  var terminos = generarFibonacci(n);
  var suma = terminos.reduce(function(acc, v) { return acc + v; }, 0);
 
  var html = '<p class="result-title">Secuencia de Fibonacci — ' + n + ' términos</p>';
 
  html += '<div class="stats-row">';
  html += '<div class="stat-card"><div class="stat-num" style="color:var(--teal);">' + n + '</div><div class="stat-label">Términos generados</div></div>';
  html += '<div class="stat-card"><div class="stat-num" style="color:var(--gold);">' + terminos[n - 1].toLocaleString() + '</div><div class="stat-label">Último término</div></div>';
  html += '<div class="stat-card"><div class="stat-num" style="color:#90A0B7;">' + suma.toLocaleString() + '</div><div class="stat-label">Suma total</div></div>';
  html += '</div>';
 
  html += '<div class="sequence-grid">';
  terminos.forEach(function(t, i) {
    html += '<div class="seq-item not-prime" title="Término ' + (i + 1) + '">' + t.toLocaleString() + '</div>';
  });
  html += '</div>';
 
  document.getElementById("resultado").innerHTML = html;
}
 
// ---------------------------------------------
// MODO 3: Verificar número primo
// ---------------------------------------------
function calcularPrimo() {
  var num = parseInt(document.getElementById("numero").value);
 
  if (isNaN(num) || num < 1) {
    mostrarError("Ingresa un número entero positivo.");
    return;
  }
 
  var primo = esPrimo(num);
  var divisores = getDivisores(num);
 
  var html = '<p class="result-title">Verificación de número primo</p>';
  html += '<div class="prime-result">';
  html += '<p style="font-size:14px;color:#90A0B7;">El número</p>';
  html += '<p style="font-family:Space Mono,monospace;font-size:3rem;font-weight:700;color:var(--white);">' + num.toLocaleString() + '</p>';
  html += '<p class="prime-verdict ' + (primo ? 'yes' : 'no') + '">' + (primo ? '✦ ES NÚMERO PRIMO' : '✗ NO es número primo') + '</p>';
  html += '<p style="font-size:14px;color:#90A0B7;margin-bottom:1rem;">Divisores encontrados (' + divisores.length + '):</p>';
 
  html += '<div class="divisors-list">';
  divisores.forEach(function(d) {
    html += '<span class="divisor-pill">' + d + '</span>';
  });
  html += '</div>';
 
  if (primo) {
    html += '<p style="margin-top:1.5rem;font-size:13px;color:#50FA7B;background:rgba(80,250,123,0.07);padding:10px 16px;border-radius:10px;">';
    html += 'Solo tiene 2 divisores (1 y sí mismo) → número primo válido como clave de seguridad';
    html += '</p>';
  } else {
    html += '<p style="margin-top:1.5rem;font-size:13px;color:#FF6B7A;background:rgba(230,57,70,0.07);padding:10px 16px;border-radius:10px;">';
    html += 'Tiene ' + divisores.length + ' divisores → no es primo, no es óptimo como clave de seguridad';
    html += '</p>';
  }
 
  html += '</div>';
 
  document.getElementById("resultado").innerHTML = html;
}
 
// ---------------------------------------------
// MODO 4: Ahorro progresivo con Fibonacci
// Cada mes se deposita el siguiente número Fibonacci
// ---------------------------------------------
function calcularAhorro() {
  var n = parseInt(document.getElementById("terminos").value);
  var base = parseInt(document.getElementById("monto").value) || 1;
 
  if (isNaN(n) || n < 2 || n > 30) {
    mostrarError("Ingresa entre 2 y 30 meses.");
    return;
  }
 
  // Generar montos usando Fibonacci multiplicado por la base
  var meses = [];
  var a = base, b = base, c;
  meses.push({ mes: 1, ahorro: a });
  if (n > 1) meses.push({ mes: 2, ahorro: b });
  for (var i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    meses.push({ mes: i + 1, ahorro: c });
  }
 
  var total = meses.reduce(function(acc, m) { return acc + m.ahorro; }, 0);
 
  var html = '<p class="result-title">Plan de Ahorro Fibonacci — ' + n + ' meses</p>';
 
  html += '<div class="stats-row">';
  html += '<div class="stat-card"><div class="stat-num" style="color:var(--gold);">Bs. ' + total.toLocaleString() + '</div><div class="stat-label">Total acumulado</div></div>';
  html += '<div class="stat-card"><div class="stat-num" style="color:var(--teal);">Bs. ' + meses[n - 1].ahorro.toLocaleString() + '</div><div class="stat-label">Depósito mes ' + n + '</div></div>';
  html += '<div class="stat-card"><div class="stat-num" style="color:#90A0B7;">' + n + '</div><div class="stat-label">Meses planificados</div></div>';
  html += '</div>';
 
  // Tabla de meses
  html += '<div style="overflow-x:auto;">';
  html += '<table class="savings-table">';
  html += '<thead><tr><th>Mes</th><th>Depósito (Bs.)</th><th>Acumulado (Bs.)</th><th>¿Es primo?</th></tr></thead>';
  html += '<tbody>';
 
  var acumulado = 0;
  meses.forEach(function(m) {
    acumulado += m.ahorro;
    var isPrime = esPrimo(m.ahorro);
    html += '<tr>';
    html += '<td>Mes ' + m.mes + '</td>';
    html += '<td class="' + (isPrime ? 'is-p' : '') + '">' + m.ahorro.toLocaleString() + (isPrime ? ' ✦' : '') + '</td>';
    html += '<td>Bs. ' + acumulado.toLocaleString() + '</td>';
    html += '<td style="color:' + (isPrime ? '#FF6B7A' : '#4A5568') + ';">' + (isPrime ? 'Sí' : 'No') + '</td>';
    html += '</tr>';
  });
 
  html += '</tbody></table></div>';
  html += '<p style="font-size:12px;color:#4A5568;margin-top:0.75rem;">✦ El depósito de ese mes es número primo</p>';
 
  document.getElementById("resultado").innerHTML = html;
}
 
// ---------------------------------------------
// FUNCIÓN: Mostrar mensaje de error
// ---------------------------------------------
function mostrarError(mensaje) {
  document.getElementById("resultado").innerHTML =
    '<div style="text-align:center;padding:2rem;">' +
    '<p style="color:var(--prime-color);font-size:1rem;">⚠ ' + mensaje + '</p>' +
    '</div>';
}
 
// ---------------------------------------------
// FUNCIÓN: Limpiar resultado
// ---------------------------------------------
function limpiar() {
  document.getElementById("placeholder").style.display = "flex";
  document.getElementById("resultado").style.display = "none";
  document.getElementById("resultado").innerHTML = "";
}
 
