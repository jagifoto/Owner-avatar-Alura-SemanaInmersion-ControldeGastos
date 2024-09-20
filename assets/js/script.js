let listaNombresGastos = [];
let listaValoresGastos = [];


// esta funcion se invoca al momento en que el usuario hace clic en el 
//boton

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    
    console.log(nombreGasto);
    console.log(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);    
    console.log(listaValoresGastos);


    //alert('Click de usuario');
    actualizarListaGastos();

}

function actualizarListaGastos(){
   const listaElementos = document.getElementById('listaDeGastos');
   const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number (listaValoresGastos[posicion]);
        htmlLista += `<li>${elemento} - USD $ ${valorGasto} 
        <button onclick="eliminarGasto(${posicion});"> Eliminar</button> </li>`;
       //Calculando el Total de Gastos
       totalGastos += Number(valorGasto);
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    console.log(htmlLista);
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}


function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1,);
    listaValoresGastos.splice(posicion, 1,);
    actualizarListaGastos();

}