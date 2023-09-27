function calcular() {
    // Obtener el número ingresado por el usuario
    const numero = parseInt(document.getElementById("numeroInput").value);

    // Verificar si el número es válido
    if (isNaN(numero)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }

    // Convertir el número a una cadena para contar las cifras
    const numeroStr = numero.toString();

    // Inicializar variables para los resultados
    let cantidadCifras = numeroStr.length;
    let cantidadImpares = 0;
    let cantidadPares = 0;
    let sumaImpares = 0;
    let sumaPares = 0;
    let sumaTotal = 0;
    let cifraMayor = parseInt(numeroStr[0]);
    let cifraMenor = parseInt(numeroStr[0]);

    // Iterar sobre las cifras del número
    for (let i = 0; i < cantidadCifras; i++) {
      const cifra = parseInt(numeroStr[i]);

      // Actualizar suma total
      sumaTotal += cifra;

      // Verificar si la cifra es impar o par
      if (cifra % 2 === 0) {
        cantidadPares++;
        sumaPares += cifra;
      } else {
        cantidadImpares++;
        sumaImpares += cifra;
      }

      // Actualizar cifra mayor y cifra menor
      if (cifra > cifraMayor) {
        cifraMayor = cifra;
      }
      if (cifra < cifraMenor) {
        cifraMenor = cifra;
      }
    }

    // Mostrar los resultados en el elemento con id "resultado"
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <p>Cantidad de cifras: ${cantidadCifras}</p>
      <p>Cantidad de cifras impares: ${cantidadImpares}</p>
      <p>Cantidad de cifras pares: ${cantidadPares}</p>
      <p>Suma de cifras impares: ${sumaImpares}</p>
      <p>Suma de cifras pares: ${sumaPares}</p>
      <p>Suma de todas las cifras: ${sumaTotal}</p>
      <p>Cifra mayor: ${cifraMayor}</p>
      <p>Cifra menor: ${cifraMenor}</p>
    `;
  }