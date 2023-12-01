function calcularSomatorio(){
    let somatorio = 0
    var valor = document.getElementById("n1").value
    var resultado = document.querySelector('span')

    for(var i = 1; i < valor; i++){
        if(i % 3 == 0 || i % 5 == 0){
            somatorio += i;
        }
    }

    resultado.innerHTML = parseInt(somatorio);
}