
//FUNCION CONSTRUCTORA

const Fruta = function(id,nombre, precio, imagen){
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.imagen = imagen
}

let fruta1 = new Fruta(1,"Manzana roja", 4, "./img/ManzanaRoja.jpg")
let fruta2 = new Fruta(2,"Naranjas", 3, "./img/naranjas.jpg")
let fruta3 = new Fruta(3,"Plátano", 6, "./img/platano.jpg")
let fruta4 = new Fruta(4,"Papaya", 4,"./img/papaya.jpg")
let fruta5 = new Fruta(5,"Manzana verde", 5,"./img/ManzanaVerde.jpg")


//AGREGO MIS PRODUCTOS EN UNA LISTA

let lista = [fruta1, fruta2, fruta3, fruta4,fruta5]


//FUNCIONES
function buscarFruta(){
    const body = document.querySelector('body');

    const input = document.getElementById('filtrarFruta').value ;
    const ingresa = input.trim().toLowerCase();
    const resultado = lista.filter((fruta) => fruta.nombre.toLowerCase().includes(ingresa));

    if(resultado.length > 0){
        const container = document.createElement('div');
        // container.classList.add('card-container');// para poner estilos

        resultado.forEach((fruta) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const nombre = document.createElement('h2');
            nombre.textContent = fruta.nombre;
            card.appendChild(nombre);

            const precio = document.createElement('p');
            precio.textContent = `Precio: ${fruta.precio}`;
            card.appendChild(precio);

            const imagen = document.createElement('img');
            imagen.src = fruta.imagen;
            card.appendChild(imagen);


            container.appendChild(card);
        });

        body.appendChild(container);
    }
}


const filtrarBtn = document.getElementById("filtrar");
filtrarBtn.addEventListener("click", () => {
    buscarFruta();
});



//Mostrar productos
function mostrarFrutas(){
    const seccionFrutas = document.querySelector("#seccion-frutas");
    lista.forEach(fruta => {
        const div = document.createElement("div");
        div.classList.add("tarjeta-fruta");
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="imagen-fruta" src="${fruta.imagen}">
            <div class="tarjeta-especificacion">
                <h3 class="producto-modelo">${fruta.nombre}</h3>
                <p class="producto-precio">S/.${fruta.precio}</p>
                <button class="fruta-agregar" id="${fruta.id}">Agregar al carrito</button>       
            </div>
        </div>`;
    seccionFrutas.append(div);
    })

    //agregamos evento de clic para todas las tarjetas de producto
    const listafrutas = document.querySelectorAll(".tarjeta-fruta");
    listafrutas.forEach(fruta => fruta.addEventListener('click', (e) => agregarProducto(e.currentTarget)));
}

mostrarFrutas(lista);
