// PARTICULAS

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#00f5ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 2
        }

    }

});

// ENTRAR

document.getElementById("btnEntrar").onclick = function(){

    document.getElementById("inicio").style.display = "none";

    document.getElementById("principal").style.display = "block";
};

// MOSTRAR MODULOS

function mostrarModulo(id){

    let modulos = document.getElementsByClassName("modulo");

    for(let i = 0; i < modulos.length; i++){

        modulos[i].style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

// MODULO 1

function poblacion(){

    let meses =
    parseInt(document.getElementById("meses").value);

    let a = 0;
    let b = 1;
    let c;

    let texto = "";

    for(let i = 1; i <= meses; i++){

        texto += "Mes " + i + ": " + b + " conejos <br>";

        c = a + b;
        a = b;
        b = c;
    }

    document.getElementById("resultado1").innerHTML =
    texto;
}

// MODULO 2

function ahorro(){

    let meses =
    parseInt(document.getElementById("ahorroMeses").value);

    let a = 0;
    let b = 1;
    let c;

    let total = 0;
    let texto = "";

    for(let i = 1; i <= meses; i++){

        total += b;

        texto +=
        "Mes " + i +
        ": Bs. " + b +
        " | Total acumulado: Bs. " + total +
        "<br>";

        c = a + b;
        a = b;
        b = c;
    }

    document.getElementById("resultado2").innerHTML =
    texto;
}

// MODULO 3

function verificarPrimo(){

    let numero =
    parseInt(document.getElementById("numeroPrimo").value);

    let contador = 0;

    for(let i = 1; i <= numero; i++){

        if(numero % i == 0){

            contador++;
        }
    }

    if(contador == 2){

        document.getElementById("resultado3").innerHTML =
        "🟢 El número " + numero +
        " es PRIMO y puede servir como clave segura.";

    }

    else{

        document.getElementById("resultado3").innerHTML =
        "🔴 El número " + numero +
        " NO es primo.";
    }

}

// MODULO 4

function fiboprimos(){

    let cantidad =
    parseInt(document.getElementById("cantidad").value);

    let a = 0;
    let b = 1;
    let c;

    let fibonacci = "";
    let primos = "";

    for(let i = 1; i <= cantidad; i++){

        fibonacci += b + " ";

        let divisores = 0;

        for(let j = 1; j <= b; j++){

            if(b % j == 0){

                divisores++;
            }

        }

        if(divisores == 2){

            primos += b + " ";
        }

        c = a + b;
        a = b;
        b = c;
    }

    document.getElementById("resultado4").innerHTML =

    "<h3>🌟 Fibonacci:</h3>" +
    fibonacci +

    "<br><br><h3>✨ Fibonacci Primos:</h3>" +
    primos;
}
function poblacion(){

    let meses =
    parseInt(document.getElementById("meses").value);

    let lista =
    document.getElementById("listaConejos");

    let total =
    document.getElementById("totalConejos");

    if(isNaN(meses) || meses <= 0){

        lista.innerHTML = `
        <p class="mensaje-inicial">
        ⚠️ Ingresa un número válido de meses
        </p>
        `;

        total.innerHTML = "0";

        return;
    }

    let a = 0;
    let b = 1;
    let c;

    let contenido = "";

    for(let i = 1; i <= meses; i++){

        let conejitos = "";

        let mostrar = b;

        // LIMITE VISUAL

        if(mostrar > 20){

            mostrar = 20;
        }

        for(let j = 1; j <= mostrar; j++){

            conejitos += "<span>🐇</span>";
        }

        if(b > 20){

            conejitos += " ...";
        }

        contenido += `

        <div class="item-conejo">

            <div class="info-mes">

                <div class="mes-box">
                    Mes ${i}
                </div>

                <div class="conejitos">
                    ${conejitos}
                </div>

            </div>

            <div class="total-mes">
                ${b} conejos
            </div>

        </div>

        `;

        c = a + b;
        a = b;
        b = c;
    }

    lista.innerHTML = contenido;

    total.innerHTML = a;
}
function poblacion(){

    let meses =
    parseInt(document.getElementById("meses").value);

    let inicial =
    parseInt(document.getElementById("inicial").value);

    let lista =
    document.getElementById("listaConejos");

    let total =
    document.getElementById("totalConejos");

    if(isNaN(meses) || meses <= 0){

        lista.innerHTML =
        `<div class="mensaje-vacio">
        ⚠️ Ingresa meses válidos
        </div>`;

        return;
    }

    if(isNaN(inicial) || inicial <= 0){

        inicial = 1;
    }

    let a = 0;
    let b = inicial;
    let c;

    let contenido = "";

    for(let i = 1; i <= meses; i++){

        let conejos = "";

        let limite = b;

        if(limite > 18){

            limite = 18;
        }

        for(let j = 1; j <= limite; j++){

            conejos += "<span>🐇</span>";
        }

        if(b > 18){

            conejos += "...";
        }

        contenido += `

        <div class="item-conejo">

            <div class="info-conejo">

                <div class="tag-mes">
                    Mes ${i}
                </div>

                <div class="bunnies">
                    ${conejos}
                </div>

            </div>

            <div class="total-item">
                ${b} conejos
            </div>

        </div>

        `;

        c = a + b;
        a = b;
        b = c;
    }

    lista.innerHTML = contenido;

    total.innerHTML = a;
}
/*modulo 3 */
function verificarPrimo() {
    // 1. Obtener los elementos del HTML mediante sus IDs
    const inputNumero = document.getElementById("numeroPrimo");
    const contenedorResultado = document.getElementById("resultado3");
    
    // 2. Extraer el valor e ingresarlo como un número entero
    const n = parseInt(inputNumero.value);

    // Validar si el usuario dejó el campo vacío o ingresó algo inválido
    if (isNaN(n)) {
        contenedorResultado.innerHTML = `<span style="color: #ef4444;">⚠ Por favor, ingrese un número válido.</span>`;
        return;
    }

    // 3. Aplicar la lógica del algoritmo de primalidad (Raíz cuadrada para optimizar)
    let esPrimo = true;

    if (n <= 1) {
        esPrimo = false;
    } else {
        // Buscamos divisores desde 2 hasta la raíz cuadrada de n
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                esPrimo = false;
                break; // Si encuentra un divisor, rompe el ciclo de inmediato
            }
        }
    }

    // 4. Mostrar el resultado con estilos que combinen con tu paleta Cyberpunk
    if (esPrimo) {
        // Estilo verde neón si pasa la prueba de seguridad
        contenedorResultado.innerHTML = `
            <span style="color: #10b981; font-weight: bold;">
                [SISTEMA SEGURO] 🔐 El número ${n} es PRIMO. Cumple con la integridad criptográfica RSA.
            </span>`;
    } else {
        // Estilo rosa/magenta neón si el número es compuesto (no es primo)
        contenedorResultado.innerHTML = `
            <span style="color: #ec4899; font-weight: bold;">
                [ALERTA DE VULNERABILIDAD] 🔓 El número ${n} NO es primo. Es un número compuesto (factorizable).
            </span>`;
    }
}
function verificarPrimo() {
    const inputNumero = document.getElementById("numeroPrimo");
    const contenedorResultado = document.getElementById("resultado3");
    const n = parseInt(inputNumero.value);

    // Limpiamos clases de estado vacío inicial
    contenedorResultado.className = "";

    if (isNaN(n)) {
        contenedorResultado.innerHTML = `
            <div class="fila-auditoria-log" style="border-left: 4px solid #ef4444;">
                <div class="detalle-paso-cripto txt-magenta">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span><strong>Error de Sistema:</strong> Por favor introduce un valor numérico entero.</span>
                </div>
            </div>`;
        return;
    }

    // Inicializamos variables de control
    let htmlPasos = "";
    let esPrimo = true;
    let detalleDivisibilidad = "";

    // FILA 1: Evaluación Inicial de Límites
    if (n <= 1) {
        esPrimo = false;
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #ec4899;">
                <span class="badge-paso-cripto">Filtro 1</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-ban txt-magenta"></i>
                    <span>Evaluación de rango básico: Valores menores o iguales a 1 no poseen propiedades primas.</span>
                </div>
                <span class="valor-paso-cripto txt-magenta">Inseguro</span>
            </div>`;
    } else {
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #10b981;">
                <span class="badge-paso-cripto">Filtro 1</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-check-double txt-verde"></i>
                    <span>Evaluación de rango básico: Número mayor que 1. Supera el descarte lineal.</span>
                </div>
                <span class="valor-paso-cripto txt-verde">Válido</span>
            </div>`;

        // FILA 2: Ejecución del bucle iterativo (Cálculo de raíz para optimizar)
        let divisorEncontrado = null;
        const limiteRaiz = Math.floor(Math.sqrt(n));

        for (let i = 2; i <= limiteRaiz; i++) {
            if (n % i === 0) {
                esPrimo = false;
                divisorEncontrado = i;
                break;
            }
        }

        if (!esPrimo) {
            htmlPasos += `
                <div class="fila-auditoria-log" style="border-left: 4px solid #ec4899;">
                    <span class="badge-paso-cripto">Filtro 2</span>
                    <div class="detalle-paso-cripto">
                        <i class="fa-solid fa-code-branch txt-magenta"></i>
                        <span>Análisis de divisibilidad modular: Se detectó que es divisible exactamente por <strong>${divisorEncontrado}</strong> (un factor ajeno a 1 y n).</span>
                    </div>
                    <span class="valor-paso-cripto txt-magenta">Compuesto</span>
                </div>`;
        } else {
            htmlPasos += `
                <div class="fila-auditoria-log" style="border-left: 4px solid #10b981;">
                    <span class="badge-paso-cripto">Filtro 2</span>
                    <div class="detalle-paso-cripto">
                        <i class="fa-solid fa-bolt txt-verde"></i>
                        <span>Análisis de divisibilidad modular: Evaluados divisores hasta su raíz [√${n} = ${limiteRaiz}]. Ningún factor exacto hallado.</span>
                    </div>
                    <span class="valor-paso-cripto txt-verde">Íntegro</span>
                </div>`;
        }
    }

    // FILA 3: Veredicto Final Estructural
    if (esPrimo) {
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.04);">
                <span class="badge-paso-cripto" style="background: #10b981; color: #0d0e15;">Certificado</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-shield-halved txt-verde"></i>
                    <span><strong>Conclusión de infraestructura:</strong> El número ${n} es estrictamente <strong>PRIMO</strong>. Clave asimétrica criptográficamente fuerte.</span>
                </div>
                <span class="valor-paso-cripto txt-verde">100% SEGURO</span>
            </div>`;
    } else {
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #ec4899; background: rgba(236, 72, 153, 0.04);">
                <span class="badge-paso-cripto" style="background: #ec4899; color: #ffffff;">Alerta</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-triangle-exclamation txt-magenta"></i>
                    <span><strong>Conclusión de infraestructura:</strong> Clave <strong>VULNERABLE</strong>. El número puede desarmarse en factores simples; inválido para RSA.</span>
                </div>
                <span class="valor-paso-cripto txt-magenta">VULNERABLE</span>
            </div>`;
    }

    // Insertamos la colección de filas dinámicas
    contenedorResultado.innerHTML = htmlPasos;
}
function verificarPrimo() {
    const inputNumero = document.getElementById("numeroPrimo");
    const contenedorResultado = document.getElementById("resultado3");
    const n = parseInt(inputNumero.value);

    // Esto elimina la decoración de "Consola Vacía" al procesar los datos
    contenedorResultado.className = ""; 

    if (isNaN(n)) {
        contenedorResultado.innerHTML = `
            <div class="fila-auditoria-log" style="border-left: 4px solid #ef4444;">
                <div class="detalle-paso-cripto txt-magenta">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span><strong>Error de Entrada:</strong> Por favor introduce un número entero válido.</span>
                </div>
            </div>`;
        return;
    }

    let htmlPasos = "";
    let esPrimo = true;

    if (n <= 1) {
        esPrimo = false;
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #ec4899;">
                <span class="badge-paso-cripto">Filtro 1</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-ban txt-magenta"></i>
                    <span>Evaluación de rango básico: Valores ≤ 1 no poseen propiedades primas.</span>
                </div>
                <span class="valor-paso-cripto txt-magenta">Inseguro</span>
            </div>`;
    } else {
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #10b981;">
                <span class="badge-paso-cripto">Filtro 1</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-check-double txt-verde"></i>
                    <span>Evaluación de rango: Número mayor que 1. Supera el descarte inicial.</span>
                </div>
                <span class="valor-paso-cripto txt-verde">Válido</span>
            </div>`;

        let divisorEncontrado = null;
        const limiteRaiz = Math.floor(Math.sqrt(n));

        for (let i = 2; i <= limiteRaiz; i++) {
            if (n % i === 0) {
                esPrimo = false;
                divisorEncontrado = i;
                break;
            }
        }

        if (!esPrimo) {
            htmlPasos += `
                <div class="fila-auditoria-log" style="border-left: 4px solid #ec4899;">
                    <span class="badge-paso-cripto">Filtro 2</span>
                    <div class="detalle-paso-cripto">
                        <i class="fa-solid fa-code-branch txt-magenta"></i>
                        <span>Análisis modular: Detectado divisor exacto por <strong>${divisorEncontrado}</strong>.</span>
                    </div>
                    <span class="valor-paso-cripto txt-magenta">Compuesto</span>
                </div>`;
        } else {
            htmlPasos += `
                <div class="fila-auditoria-log" style="border-left: 4px solid #10b981;">
                    <span class="badge-paso-cripto">Filtro 2</span>
                    <div class="detalle-paso-cripto">
                        <i class="fa-solid fa-bolt txt-verde"></i>
                        <span>Análisis modular: Evaluado hasta su raíz (√${n} ≈ ${limiteRaiz}). Ningún factor hallado.</span>
                    </div>
                    <span class="valor-paso-cripto txt-verde">Íntegro</span>
                </div>`;
        }
    }

    if (esPrimo) {
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.04);">
                <span class="badge-paso-cripto" style="background: #10b981; color: #0d0e15;">Certificado</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-shield-halved txt-verde"></i>
                    <span><strong>Infraestructura:</strong> El número ${n} es <strong>PRIMO</strong>. Óptimo para llaves RSA.</span>
                </div>
                <span class="valor-paso-cripto txt-verde">100% SEGURO</span>
            </div>`;
    } else {
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #ec4899; background: rgba(236, 72, 153, 0.04);">
                <span class="badge-paso-cripto" style="background: #ec4899; color: #ffffff;">Alerta</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-triangle-exclamation txt-magenta"></i>
                    <span><strong>Infraestructura:</strong> Clave <strong>VULNERABLE</strong>. Rompe la asimetría matemática.</span>
                </div>
                <span class="valor-paso-cripto txt-magenta">VULNERABLE</span>
            </div>`;
    }

    contenedorResultado.innerHTML = htmlPasos;
}
function verificarPrimo() {
    const inputNumero = document.getElementById("numeroPrimo");
    const contenedorResultado = document.getElementById("resultado3");
    const n = parseInt(inputNumero.value);

    contenedorResultado.className = ""; 

    if (isNaN(n)) {
        contenedorResultado.innerHTML = `
            <div class="fila-auditoria-log" style="border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.05);">
                <div class="detalle-paso-cripto txt-magenta">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span><strong>Error de Entrada:</strong> Por favor introduce un número entero válido en el campo.</span>
                </div>
            </div>`;
        return;
    }

    let htmlPasos = "";
    let esPrimo = true;

    // FILA 1: Evaluación Inicial de Límites
    if (n <= 1) {
        esPrimo = false;
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #ec4899;">
                <span class="badge-paso-cripto">Filtro 1</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-ban txt-magenta"></i>
                    <span>Evaluación de rango básico: El valor ingresado <strong>${n}</strong> es ≤ 1. No posee propiedades primas.</span>
                </div>
                <span class="valor-paso-cripto txt-magenta">Inseguro</span>
            </div>`;
    } else {
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #10b981;">
                <span class="badge-paso-cripto" style="background: rgba(16, 185, 129, 0.1) !important; border-color: rgba(16, 185, 129, 0.25) !important; color: #10b981 !important;">Filtro 1</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-check-double txt-verde"></i>
                    <span>Evaluación de rango: Número mayor que 1. Supera con éxito el descarte lineal inicial.</span>
                </div>
                <span class="valor-paso-cripto txt-verde">Válido</span>
            </div>`;

        // FILA 2: Análisis Modular Estricto
        let divisorEncontrado = null;
        const limiteRaiz = Math.floor(Math.sqrt(n));

        for (let i = 2; i <= limiteRaiz; i++) {
            if (n % i === 0) {
                esPrimo = false;
                divisorEncontrado = i;
                break;
            }
        }

        if (!esPrimo) {
            htmlPasos += `
                <div class="fila-auditoria-log" style="border-left: 4px solid #ec4899;">
                    <span class="badge-paso-cripto">Filtro 2</span>
                    <div class="detalle-paso-cripto">
                        <i class="fa-solid fa-code-branch txt-magenta"></i>
                        <span>Análisis modular: Se detectó un residuo cero. El número es divisible exactamente por <strong>${divisorEncontrado}</strong>.</span>
                    </div>
                    <span class="valor-paso-cripto txt-magenta">Compuesto</span>
                </div>`;
        } else {
            htmlPasos += `
                <div class="fila-auditoria-log" style="border-left: 4px solid #10b981;">
                    <span class="badge-paso-cripto" style="background: rgba(16, 185, 129, 0.1) !important; border-color: rgba(16, 185, 129, 0.25) !important; color: #10b981 !important;">Filtro 2</span>
                    <div class="detalle-paso-cripto">
                        <i class="fa-solid fa-bolt txt-verde"></i>
                        <span>Análisis modular: Evaluado exhaustivamente hasta su raíz <code>√${n} ≈ ${limiteRaiz}</code> sin hallar factores comunes.</span>
                    </div>
                    <span class="valor-paso-cripto txt-verde">Íntegro</span>
                </div>`;
        }
    }

    // FILA 3: Conclusión de Infraestructura Criptográfica
    if (esPrimo) {
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.06); box-shadow: inset 0 0 12px rgba(16, 185, 129, 0.05);">
                <span class="badge-paso-cripto" style="background: #10b981 !important; color: #0d0e15 !important; font-weight: bold;">Certificado</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-shield-halved txt-verde"></i>
                    <span><strong>Infraestructura:</strong> El número <strong>${n}</strong> es estructuralmente <strong>PRIMO</strong>. Altamente óptimo para implementar llaves asimétricas RSA.</span>
                </div>
                <span class="valor-paso-cripto txt-verde">100% SEGURO</span>
            </div>`;
    } else {
        htmlPasos += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #ec4899; background: rgba(236, 72, 153, 0.06); box-shadow: inset 0 0 12px rgba(236, 72, 153, 0.05);">
                <span class="badge-paso-cripto" style="background: #ec4899 !important; color: #ffffff !important; font-weight: bold;">Alerta</span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-triangle-exclamation txt-magenta"></i>
                    <span><strong>Infraestructura:</strong> Clave <strong>VULNERABLE</strong>. El número se descompone con facilidad, rompiendo el principio de seguridad asimétrica.</span>
                </div>
                <span class="valor-paso-cripto txt-magenta">VULNERABLE</span>
            </div>`;
    }

    contenedorResultado.innerHTML = htmlPasos;
}
function calcularAhorroFibonacci() {
    const inputMeses = document.getElementById("mesesAhorro");
    const inputBase = document.getElementById("baseAhorro");
    const contenedorResultado = document.getElementById("resultadoAhorro");
    const txtTotal = document.getElementById("totalAcumuladoAhorro");

    const meses = parseInt(inputMeses.value);
    const base = parseFloat(inputBase.value);

    // Validación de entradas con alerta de color
    if (isNaN(meses) || meses <= 0 || isNaN(base) || base <= 0) {
        contenedorResultado.className = "";
        contenedorResultado.innerHTML = `
            <div class="fila-auditoria-log" style="border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.05);">
                <div class="detalle-paso-cripto txt-magenta">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span><strong>Error de Parámetros:</strong> Por favor introduce valores mayores a 0 en ambos campos.</span>
                </div>
            </div>`;
        txtTotal.innerText = "$0";
        return;
    }

    // Limpiar el contenedor eliminando los estilos de la "caja vacía"
    contenedorResultado.className = ""; 

    let htmlFilas = "";
    let totalAcumulado = 0;

    // Variables base para ejecutar Fibonacci puro
    let a = 1;
    let b = 1;

    for (let i = 1; i <= meses; i++) {
        let factorFibonacci;
        
        if (i === 1 || i === 2) {
            factorFibonacci = 1;
        } else {
            factorFibonacci = a + b;
            a = b;
            b = factorFibonacci;
        }

        // El depósito real de este mes es el término de Fibonacci por la cantidad base elegida
        const depositoMes = factorFibonacci * base;
        totalAcumulado += depositoMes;

        // Inyección de filas estructuradas con formato CSS unificado
        htmlFilas += `
            <div class="fila-auditoria-log" style="border-left: 4px solid #f6ad55; margin-bottom: 8px;">
                <span class="badge-paso-cripto" style="background: rgba(246, 173, 85, 0.1) !important; border-color: rgba(246, 173, 85, 0.25) !important; color: #f6ad55 !important;">
                    Mes Bs{i}
                </span>
                <div class="detalle-paso-cripto">
                    <i class="fa-solid fa-money-bill-trend-up txt-verde"></i>
                    <span>Factor Fibonacci: <code>F(Bs{i}) = Bs{factorFibonacci}</code> ➔ Depósito mensual calculado: <strong>Bs${depositoMes.toLocaleString()}</strong></span>
                </div>
                <span class="valor-paso-cripto txt-verde" style="font-weight: 700;">
                    +Bs{depositoMes.toLocaleString()}
                </span>
            </div>`;
    }

    // Actualizar los contenedores de la interfaz
    contenedorResultado.innerHTML = htmlFilas;
    txtTotal.innerText = `Bs${totalAcumulado.toLocaleString()}`;
}
function analizarRSA(){

    let numero =
    parseInt(
    document.getElementById("numeroRSA").value
    );

    let resultado =
    document.getElementById("resultadoRSA");

    if(isNaN(numero)){

        resultado.innerHTML = `

        <i class="fa-solid fa-triangle-exclamation"></i>

        <h3>
            Entrada inválida
        </h3>

        <p>
            Ingresa un número válido.
        </p>

        `;

        return;
    }

    if(numero <= 1){

        resultado.innerHTML = `

        <i class="fa-solid fa-circle-xmark"></i>

        <h3>
            Número inseguro
        </h3>

        <p>
            ${numero} no puede utilizarse
            en criptografía RSA.
        </p>

        `;

        return;
    }

    let primo = true;

    for(let i=2; i<=Math.sqrt(numero); i++){

        if(numero % i === 0){

            primo = false;

            break;
        }

    }

    if(primo){

        resultado.innerHTML = `

        <i class="fa-solid fa-shield-halved"></i>

        <h3>
            Clave criptográfica válida
        </h3>

        <p>
            El número ${numero} es primo
            y posee integridad matemática.
        </p>

        `;

    }else{

        resultado.innerHTML = `

        <i class="fa-solid fa-bug"></i>

        <h3>
            Vulnerabilidad detectada
        </h3>

        <p>
            El número ${numero} no es primo
            y no es seguro para RSA.
        </p>

        `;

    }

}

function analizarRSA() {
    // 1. Obtener el número que ingresó el usuario
    const inputNumero = document.getElementById("numeroRSA");
    const numero = parseInt(inputNumero.value);
    const contenedorResultado = document.getElementById("resultadoRSA");

    // Obtener los tres cuadros de métricas por su ID
    const statusPrimalidad = document.getElementById("statusPrimalidad");
    const statusComplejidad = document.getElementById("statusComplejidad");
    const statusSeguridad = document.getElementById("statusSeguridad");

    // 2. Validación si el campo está vacío o es menor/igual a 0
    if (isNaN(numero) || numero <= 0) {
        // Devolver los cuadros a su estado gris de espera
        statusPrimalidad.innerHTML = `<span class="dot-status gray"></span><p>Primalidad: <strong class="txt-gray">Pendiente</strong></p>`;
        statusComplejidad.innerHTML = `<span class="dot-status gray"></span><p>Complejidad ($\\sqrt{n}$): <strong class="txt-gray">Sin evaluar</strong></p>`;
        statusSeguridad.innerHTML = `<span class="dot-status gray"></span><p>Nivel de Seguridad: <strong class="txt-gray">Bloqueado</strong></p>`;

        contenedorResultado.innerHTML = `
            <i class="fa-solid fa-circle-exclamation" style="color: #f43f5e; text-shadow: 0 0 15px rgba(244,63,94,0.6);"></i>
            <h3 class="txt-red">Por favor, ingresa un número entero positivo válido.</h3>
        `;
        return;
    }

    // 3. Algoritmo de Primalidad optimizado con raíz cuadrada y contador de iteraciones
    let esPrimo = true;
    let iteraciones = 0;

    if (numero <= 1) {
        esPrimo = false;
    } else {
        const limite = Math.sqrt(numero);
        for (let i = 2; i <= limite; i++) {
            iteraciones++; // Cuenta cuántas vueltas da el bucle for
            if (numero % i === 0) {
                esPrimo = false;
                break; // Rompe el ciclo si encuentra un divisor
            }
        }
    }

    // 4. LÓGICA PARA ACTUALIZAR LOS 3 CUADRITOS EN TIEMPO REAL

    if (esPrimo) {
        // --- CASO PRIMO (SEGURO) ---
        
        // Cuadro 1: Primalidad -> Verde
        statusPrimalidad.innerHTML = `
            <span class="dot-status green"></span>
            <p>Primalidad: <strong class="txt-green">Es Primo</strong></p>
        `;

        // Cuadro 2: Complejidad -> Muestra cuántas vueltas dio (si es 2 o 3, dio 0 vueltas)
        statusComplejidad.innerHTML = `
            <span class="dot-status green"></span>
            <p>Complejidad ($\\sqrt{n}$): <strong class="txt-green">${iteraciones} vueltas</strong></p>
        `;

        // Cuadro 3: Nivel de Seguridad -> Si es primo, es seguro
        statusSeguridad.innerHTML = `
            <span class="dot-status green"></span>
            <p>Nivel de Seguridad: <strong class="txt-green">Alta</strong></p>
        `;

        // Mensaje central del Escudo
        contenedorResultado.innerHTML = `
            <i class="fa-solid fa-shield-halved"></i>
            <h3>Clave criptográfica válida</h3>
            <p>El número ${numero} es primo y posee una integridad matemática óptima para cifrado RSA.</p>
        `;

    } else {
        // --- CASO COMPUESTO / INSEGURO (NO PRIMO) ---
        
        // Cuadro 1: Primalidad -> Rojo
        statusPrimalidad.innerHTML = `
            <span class="dot-status red"></span>
            <p>Primalidad: <strong class="txt-red">Compuesto</strong></p>
        `;

        // Cuadro 2: Complejidad -> Rojo (Rompieron el sistema rápido)
        statusComplejidad.innerHTML = `
            <span class="dot-status red"></span>
            <p>Complejidad ($\\sqrt{n}$): <strong class="txt-red">${iteraciones} iter.</strong></p>
        `;

        // Cuadro 3: Nivel de Seguridad -> Peligro, vulnerable
        statusSeguridad.innerHTML = `
            <span class="dot-status red"></span>
            <p>Nivel de Seguridad: <strong class="txt-red">Inseguro</strong></p>
        `;

        // Mensaje central del Escudo en Rojo
        contenedorResultado.innerHTML = `
            <i class="fa-solid fa-unlock-keyhole" style="color: #f43f5e; text-shadow: 0 0 15px rgba(244,63,94,0.8);"></i>
            <h3 class="txt-red">Clave Vulnerable</h3>
            <p>El número ${numero} NO es primo. Puede ser descompuesto fácilmente, destruyendo el cifrado RSA.</p>
        `;
    }
}
document.getElementById("btnPrimos").addEventListener("click", function () {
    document.getElementById("conclusionRSA").classList.remove("oculto");
});

// Vincular esta función al evento input o dejarla activa globalmente
document.getElementById("inputCantidadHibrido").addEventListener("input", function() {
    const cantidad = parseInt(this.value);
    const consola = document.getElementById("consolaSalidaHibrida");

    if (isNaN(cantidad) || cantidad <= 0) {
        consola.innerHTML = `<div class="aviso-vacio-hibrido">Aquí aparecerá la simulación matemática híbrida.</div>`;
        return;
    }

    // Algoritmo de primalidad por descarte radical
    function esPrimo(n) {
        if (n <= 1) return false;
        const limite = Math.sqrt(n);
        for (let i = 2; i <= limite; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let a = 0, b = 1;
    let htmlInyeccion = "";
    const iteraciones = Math.min(cantidad, 45);

    for (let i = 0; i < iteraciones; i++) {
        let numeroActual;
        if (i === 0) numeroActual = a;
        else if (i === 1) numeroCurrent = b;
        else {
            numeroActual = a + b;
            a = b;
            b = numeroActual;
        }

        const primoCheck = esPrimo(numeroActual);
        const claseFiltro = primoCheck ? "es-primo" : "no-primo";
        const badgeTexto = primoCheck ? "✓ Primo Detectado" : "Compuesto";

        htmlInyeccion += `
            <div class="tarjeta-num-hibrida-nodo ${claseFiltro}">
                <div>
                    <div class="val-num-h">${numeroActual}</div>
                    <div class="meta-num-h">Índice Sucesión: F(${i})</div>
                </div>
                <span class="status-badge-h">${badgeTexto}</span>
            </div>
        `;
    }

    consola.innerHTML = htmlInyeccion;
});
function ejecutarAnalisisHibrido() {
    const inputCantidad = document.getElementById("inputCantidadHibrido");
    const consola = document.getElementById("consolaSalidaHibrida");
    const cantidad = parseInt(inputCantidad.value);

    // Reiniciar visual si se borra o es inválido
    if (isNaN(cantidad) || cantidad <= 0) {
        consola.innerHTML = `
            <div class="aviso-vacio-hibrido" style="color: #ef4444;">
                <i class="fa-solid fa-triangle-exclamation"></i> Por favor, ingresa un número válido mayor a 0.
            </div>
        `;
        return;
    }

    // Validador matemático de primos
    function esPrimo(n) {
        if (n <= 1) return false;
        const limite = Math.sqrt(n);
        for (let i = 2; i <= limite; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let a = 0, b = 1;
    let htmlInyeccion = "";
    // Límite de seguridad para evitar congelar el procesador
    const iteraciones = Math.min(cantidad, 45);

    for (let i = 0; i < iteraciones; i++) {
        let numeroActual;
        if (i === 0) {
            numeroActual = a;
        } else if (i === 1) {
            numeroActual = b;
        } else {
            numeroActual = a + b;
            a = b;
            b = numeroActual;
        }

        const primoCheck = esPrimo(numeroActual);
        const claseFiltro = primoCheck ? "es-primo" : "no-primo";
        const badgeTexto = primoCheck ? "✓ Primo Detectado" : "Compuesto";

        htmlInyeccion += `
            <div class="tarjeta-num-hibrida-nodo ${claseFiltro}">
                <div>
                    <div class="val-num-h">${numeroActual}</div>
                    <div class="meta-num-h">Índice Sucesión: F(${i})</div>
                </div>
                <span class="status-badge-h">${badgeTexto}</span>
            </div>
        `;
    }

    consola.innerHTML = htmlInyeccion;
}
function ejecutarAnalisisHibrido() {
    const inputCantidad = document.getElementById("inputCantidadHibrido");
    const consola = document.getElementById("consolaSalidaHibrida");
    const cantidad = parseInt(inputCantidad.value);

    // Validación elegante si el campo está vacío o es erróneo
    if (isNaN(cantidad) || cantidad <= 0) {
        consola.innerHTML = `
            <div class="aviso-vacio-hibrido" style="color: #ef4444; margin-top: 80px;">
                <i class="fa-solid fa-triangle-exclamation"></i> Por favor, introduce un número válido mayor a cero.
            </div>
        `;
        return;
    }

    // Algoritmo optimizado mediante raíz cuadrada
    function verificarPrimalidad(n) {
        if (n <= 1) return false;
        const raiz = Math.sqrt(n);
        for (let i = 2; i <= raiz; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    let a = 0, b = 1;
    let acumuladorHTML = "";
    // Límite técnico seguro para evitar retraso de renderizado
    const bucleMaximo = Math.min(cantidad, 45);

    for (let i = 0; i < bucleMaximo; i++) {
        let numeroActual;
        if (i === 0) {
            numeroActual = a;
        } else if (i === 1) {
            numeroActual = b;
        } else {
            numeroActual = a + b;
            a = b;
            b = numeroActual;
        }

        const esPrimo = verificarPrimalidad(numeroActual);
        const claseFila = esPrimo ? "es-primo" : "no-primo";
        const etiquetaEstado = esPrimo ? "✓ Primo" : "Compuesto";

        // Construcción horizontal idéntica a tu módulo premium de población
        acumuladorHTML += `
            <div class="tarjeta-num-hibrida-nodo ${claseFila}">
                <div class="info-izq-hibrida">
                    <span class="indice-lbl-h">Mes ${i + 1}</span>
                    <span class="val-num-h">${numeroActual}</span>
                </div>
                <span class="status-badge-h">${etiquetaEstado}</span>
            </div>
        `;
    }

    // Inyección limpia eliminando el aviso por defecto
    consola.innerHTML = acumuladorHTML;
}