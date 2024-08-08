console.log("Scrpit Funcionando")
function somar(num1, num2) {

    // converter os números
    const num1float = parseFloat(num1);
    const num2float = parseFloat(num2);

    //calcular soma
    const soma = num1float + num2float;
    alert("O resultado é: " + soma)

}

function ativarForm(event) {
    event.preventDefault() //cancela a atualização da página.
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    somar(num1, num2)

}



// eventListener função pra ser ativada quando o evento ser detectado
document.getElementById("idForm").addEventListener("submit", ativarForm)

