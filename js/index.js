
var inpNum = document.getElementById('inpNum');
var btn = document.getElementById('btn');
var ul = document.getElementById('ulSorteio');

btn.addEventListener('click', function(){

    ul.innerHTML = '';

    var numero = Number(inpNum.value);
    var numerosSorteados = []

    for(n = 0; n < 6; n++){
            
        //Gera um número random de 1 a 60
        //Add 1 para ter certeza que vai de 1 a 60
        var numerosSorteado = Math.floor(Math.random() * 60) + 1;
            
        numerosSorteados.push(numerosSorteado);

    }

    var correspondencia = 0;

    for(var n = 0; n < numerosSorteados.length; n++){

        if(numerosSorteados[n] === numero){

            correspondencia++;

        }

    }

    var resultado = [

        document.createElement('li'),
        document.createElement('li'),
        document.createElement('li'),

    ]

    if(numero > 60){

        resultado[0].textContent = 'Número maior que 60, diminua!'

        resultado.forEach(function(li){

            ul.appendChild(li);

        });

    }else{
    
        resultado[0].textContent = `Número sorteado: ${numerosSorteados.join(', ')}`;
        resultado[1].textContent = `Numero escolhido: ${numero}`;
        resultado[2].textContent = `Número de correspondência: ${correspondencia}`;
    
        resultado.forEach(function(li){

            ul.appendChild(li);

        });

    }
});
