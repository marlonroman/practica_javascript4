

function sumar(){
    const num1 = document.getElementById("numero1").value;
    const num2 = document.getElementById("numero2").value;
    
    numero1 = Number(num1);
    numero2 = Number(num2);
    console.log(numero1);
    sumar = numero1 + numero2;
    document.getElementById("mostrar").textContent = sumar
}

function restar(){
    num1 = Number(document.getElementById("numero1").value);
    num2 = Number(document.getElementById("numero2").value);
    console.log(num1);
    restar = num1 - num2;
    document.getElementById("mostrar").textContent = restar;
}


