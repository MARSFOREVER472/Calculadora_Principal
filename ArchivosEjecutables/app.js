// FUNCIÓN QUE PERMITA CALCULAR LA SUMA TOTAL DE 2 NÚMEROS CUALQUIERA...

function calculateSum()
{
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if(isNaN(numero1) || isNaN(numero2))
    {
        document.getElementById("result").textContent = "POR FAVOR, INGRESE NÚMEROS VÁLIDOS!!!!!";
        return;
    }

    const suma = numero1 + numero2;
    document.getElementById("result").textContent = `Resultado: ${suma}`;
}