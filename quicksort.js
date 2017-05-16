var arrayGerado = new Array();

$('#btn-gerar').click(() => {
    let tamanhoArray = parseInt(($('#qtdArray').val()));
    if (tamanhoArray) {
        arrayGerado = [];
        geraArrayAleatorio(tamanhoArray);
        construirInterfaceArray(arrayGerado);
    } else {
        $("#mensagem").html('Primeiro insira o tamanho do array!');
    }
});
$('#btn-ordenar').click(() => {
    construirInterfaceOrdenada();
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function geraArrayAleatorio(tamanhoArray) {
    for (let i = 0; i <= tamanhoArray-1; i++) {
        arrayGerado.push(randomInt(-tamanhoArray, tamanhoArray));
    }
    console.log(arrayGerado);
}

function construirInterfaceArray(array) {
    $("#arrayText").html('');
    $("#mensagem").html('');
    for (let i = 0; i <= array.length - 1; i++) {
        $("#arrayText").append("<span style='width: 10px; color:blue;text-align: justify;'> " + array[i] + " </span>");
    }
}

function construirInterfaceOrdenada() {
    let arrayOrdenado = quickSort(arrayGerado, 0, arrayGerado.length - 1);
    console.log(arrayOrdenado);
    $("#arrayText").html('');
    $("#mensagem").html('');
    for (let i = 0; i <= arrayGerado.length - 1; i++) {
        $("#arrayText").append("<span style='color:green;text-align: justify;'> " + arrayGerado[i] + " </span>");
    }
}

function partition(array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(array, leftIndex, rightIndex) {
    var left = array[leftIndex],
        right = array[rightIndex];
    array[leftIndex] = right;
    array[rightIndex] = left;
}

function quickSort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
}