
	// $(document).ready(function(){
	// 	alert('teste')
	// });
var arrayGerado = new Array();
$('#btn-gerar').click(()=>{
	let tamanhoArray = parseInt(($('#qtdArray').val()));
	for (let i = 0; i <= tamanhoArray; i++) {
		arrayGerado.push(randomInt(-tamanhoArray,tamanhoArray));
	}
	console.log(arrayGerado)
});

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// function()