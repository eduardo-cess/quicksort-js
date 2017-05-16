var arrayGerado = new Array();

$('#btn-gerar').click(() => {
    let tamanhoArray = parseInt(($('#qtdArray').val()));
    if(tamanhoArray){
	    for (let i = 0; i <= tamanhoArray; i++) {
	        arrayGerado.push(randomInt(-tamanhoArray, tamanhoArray));
	    }
	    construirInterfaceArray(arrayGerado);
	    console.log(arrayGerado);
    }
    else{
    	$("#mensagem").html('Primeiro insira o tamanho do array!');
    }
});

$('#btn-ordenar').click(() => {
	alert('Ainda falta inplementar')
});


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function construirInterfaceArray(array) {
	arrayGerado = new Array();
	$("#arrayText").empty();
	$("#mensagem").empty();

    for (let i = 0; i <= array.length-1; i++) {
        $("#arrayText").append("<span style='width: 10px; color:blue;text-align: justify;'> "+array[i]+" </span>");
    }
}