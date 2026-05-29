# 🌌 Math Galaxy - Centro Matemático Interactivo 🚀

¡Bienvenido a **Math Galaxy**! Una plataforma web interactiva con una interfaz Cyberpunk premium diseñada bajo conceptos de diseño moderno como *Glassmorphism* (efecto de cristal translúcido), animaciones fluidas de levitación holográfica y gradientes cromáticos de alto contraste.

Este sistema simula y demuestra de manera práctica cómo los algoritmos matemáticos avanzados resuelven problemas lógicos y modelan situaciones del mundo real, abarcando desde la biología y las finanzas hasta la seguridad informática avanzada.

---

## 🔗 Demo En Vivo
Puedes interactuar con todos los módulos y algoritmos de la suite en tiempo real a través del despliegue en producción:
📌 **[Ver Centro Matemático en Vivo](TU_ENLACE_DE_GITHUB_PAGES_AQUÍ)**

---

## 💻 Módulos de Simulación Integrados

La suite interactiva está compuesta por 4 núcleos de análisis lógico independientes:

### 📊 Módulo 1: Fibonacci en Crecimiento Poblacional
* **Contexto del Problema:** Modelado del crecimiento idealizado de una población biológica (basado en el dilema reproductivo de parejas de conejos), donde cada generación se expande de manera orgánica dependiendo de las dos anteriores.
* **Lógica del Algoritmo:** Se inicializan variables base en `a = 1` y `b = 1`. A través de un bucle iterativo controlado por la cantidad de meses ingresada, se calcula el nuevo estado mediante la expresión `c = a + b`, actualizando cíclicamente las posiciones en memoria (`a = b` y `b = c`).
* **Suposiciones del Modelo:** Cada pareja tarda un mes en madurar, cada pareja fértil produce una nueva pareja mensualmente, la población nunca disminuye y el ambiente cuenta con recursos ilimitados.

### 💰 Módulo 2: Fibonacci en Crecimiento Financiero
* **Contexto del Problema:** Simulación inteligente de ahorro progresivo y acumulación acelerada de capital aplicando la serie matemática a estrategias de inversión moderna.
* **Características del Panel:** Herramientas dinámicas de visualización estructuradas en tres capas de proyección: *Crecimiento*, *Ahorro Inteligente* y *Proyección*, demostrando analíticamente cómo pequeños depósitos constantes e incrementales generan grandes masas de capital con el tiempo.

### 🔒 Módulo 3: Seguridad Digital con Números Primos
* **Contexto del Problema:** Entorno interactivo de simulación criptográfica basada en el estándar RSA, demostrando de forma práctica cómo la asimetría modular y la dificultad computacional de factorizar productos de números primos gigantescos protegen la confianza en internet.
* **Terminal Criptográfica:** Consola de simulación integrada que ejecuta en vivo un protocolo estructurado paso a paso:
    1. `> Iniciando protocolo RSA...`
    2. `> Escaneando integridad matemática...`
    3. `> Verificando número primo...`
    4. `✓ Sistema criptográfico listo`
* **Dinámica del Control:** Explica de manera interactiva la **Eficiencia Algorítmica** (reducción drástica de ciclos de procesamiento para validaciones en microsegundos) y la **Asimetría Modular** (generar la clave es inmediato; revertir el proceso o factorizar tomaría miles de años a una supercomputadora clásica).

### ⚡ Módulo 4: Sucesión Híbrida de Fibonacci y Primos
* **Contexto del Problema:** Un laboratorio experimental que rastrea, aísla e identifica aquellos eslabones ocultos de la cadena de Fibonacci que conservan simultáneamente la propiedad de la invisibilidad aritmética (es decir, que además de pertenecer a la serie, son números primos).
* **Análisis del Código:** El algoritmo genera el elemento tradicional de la secuencia sumando los dos valores previos ($F_n = F_{n-1} + F_{n-2}$). Posteriormente, extrae el valor y lo inyecta a un bucle de descarte radical continuo por raíz cuadrada (`i <= Math.sqrt(n)`) para evitar latencias de cómputo, verificando su divisibilidad en microsegundos.

---

## 🛠️ Arquitectura Web y UI/UX
* **Maquetación Semántica:** Estructura modular dinámica construida en HTML5 adaptada para colapsar de forma limpia en dispositivos móviles.
* **Hologramas con Levitación Automatizada:** Uso de animaciones cíclicas infinitas (`@keyframes`) en CSS3 combinadas con desfases de tiempo (`animation-delay`) para lograr un efecto orgánico de balanceo en las pantallas flotantes laterales.
* **Filtros y Efectos Especiales:** Inclusión de propiedades de brillo neón cian externo (`box-shadow`), opacidades de fondo mediante canales alfa y textos con gradientes de color dinámicos basados en máscaras de recorte (`-webkit-background-clip: text`).

---

## 📁 Estructura del Proyecto

El código fuente está organizado de la siguiente manera:
```text
├── index.html        # Documento principal y estructura de los módulos
├── scrip.js          # Control lógico de los algoritmos y consolas
├── css/
│   └── stilos.css    # Diseño de la interfaz, efectos neón y animaciones
└── img/              # Banco de recursos gráficos de la plataforma
    ├── chanchito.jpg
    ├── codigo.jpg
    ├── cripto.jpg
    ├── huella.jpg
    ├── numeros.jpg
    └── tesoro.jpg