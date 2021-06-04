// alert("bienvenidos a la libreria");
// SALUDO
document.getElementById("bienvenido").innerHTML=`<div class="alert alert-success">${(prompt("ingresa tu nombre aqui"))} Bienvenido a LEVI</div>`
console.log()

const carrito=[];
const baseDatosProductos=[];

class Libro{
    constructor(titulo, autor, paginas, valor, imagen, genero){
        this.titulo=titulo;
        this.autor=autor;
        this.paginas=paginas;
        this.valor=valor;
        this.imagen=imagen;
        this.genero=genero;
    }
}
let libro0= new Libro("Manual de JavaScript", "Miguel Angel Alvares y Manu Gutierrez", 125+" paginas", 12000, "/multimedia/Manualjs.jpg", "programacion");
let libro1= new Libro("Enfermedades neurológicas hereditarias: genes, mutaciones, clínica y epidemiología general", "Francesc Palau Martínez, Ana Cuesta Peredo, Javier García Planells", 102+" paginas",18000,"/multimedia/EnferNeuro.jpg","ciencia");
let libro2= new Libro("Manual de Ajedrez","Fernando Braga, Pedro Criado, Claudio Javier Minzer, José Nicás Montoto",246+" paginas",15000,"/multimedia/manualAjedrez.jpg");
let libro3= new Libro("Todos los cuentos de los hermanos Grimm","Jacob Grimm & Wilhelm Grimm",777+" paginas",20000, "/multimedia/herGrimm.jpg", "literatura");
let libro4= new Libro("Para chuparse los dedos","memoria chilena 2009",43+" paginas",17000, "/multimedia/recetas.jpg", "cocina");
let libro5= new Libro("Cuentos de amor locura y muerte","Horacio Quiroga",137+" paginas", 13000, "/multimedia/amor-locura-muerte.jpg", "literatura");

baseDatosProductos.push(libro0);
baseDatosProductos.push(libro1);
baseDatosProductos.push(libro2);
baseDatosProductos.push(libro3);
baseDatosProductos.push(libro4);
baseDatosProductos.push(libro5);
console.log(baseDatosProductos);

let acumuladorCardsHome=``;
for (let i = 0; i < baseDatosProductos.length; i++) {
    console.log()
    acumuladorCardsHome +=
     `<div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
      <a href="#"><img class="card-img-top" src="${baseDatosProductos[i].imagen}" alt=""></a>
      <div class="card-body">
      <h4 class="card-title"><a href="#">${baseDatosProductos[i].titulo}</a></h4>
      <h5>$${baseDatosProductos[i].valor} c/u.-</h5>
      <p class="card-text">Autor(es): ${baseDatosProductos[i].autor}</p>
      <p class="card-text">Cantidad de paginas: ${baseDatosProductos[i].paginas}</p>
      <p class="card-text">Genero: ${baseDatosProductos[i].genero}</p>
      </div>
      <div class="card-footer">
      <button id="agregar" onclick="${carrito}" onkeypress="enter(event);">Agregar al carrito</button> 
      <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
      </div>
      </div>`;
  }
   
document.write(acumuladorCardsHome)
//   document.getElementById("productos").innerHTML = acumuladorCardsHome;


//carrito de compras
console.log(JSON.parse(localStorage.getItem("carrito")));
console.log(localStorage.getItem("carrito"))

function sumarCarrito(carrito){
    guardarcarrito.push(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(`Tienes ${carrito.length} pesos en tu carrito`)

    let acumuladorCarrito =``
    for (let i=0; i< carrito.length; i++){
        acumuladorCard += 
        `<div class =" card col-12 col-md-12 col-lg-12 animate__animated animate__slideInDown" id="medidaDiv">
        <img class="card-img-top" src="${carrito[i].imagen}" alt="Tarjeta image" id="medidaCard"> 
        <div class="col card-body"> 
        <h4 class="card-title text-center">${carrito[i].titulo}</h4> 
        <p class="card-text text-center">${carrito[i].precio}</p> 
        <div class="col text-center"> 
        <a onclick="agregarProductoAlCarrito (${carrito[i].precio})"href="#" class="btn btn-info btn-default">Agregar al carrito</a> 
        </div> 
        </div>
        </div> `
    }
    document.getElementById('carritoCompras').innerHTML=acumuladorCarrito
}

    
    function enter(e) { if (e.which == 13 || e.keyCode == 13) { 
     alert("¿esta seguro de agregar al carrito?");        
         }
     }
      
    //filtro por categoria 
    function anidarCategoria(){
        let acumulador=``;
        baseDatos.forEach((element)=>{
            acumulador +=
        `<div class="col-lg-4 col-md-6 mb-4">
         <div class="card h-100">
         <a href="#"><img class="card-img-top" src="${element.imagen}" alt=""></a>
         <div class="card-body">
         <h4 class="card-title"><a href="#">${element.titulo}</a></h4>
         <h5>$${element.valor} c/u.-</h5>
         <p class="card-text">Autor(es): ${element.autor}</p>
         <p class="card-text">Cantidad de paginas: ${element.paginas}</p>
         <p class="card-text">Genero: ${element.genero}</p>
         </div>
         <div class="card-footer">
         <button id="agregar" onclick="${carrito}" onkeypress="enter(event);">Agregar al carrito</button> 
         <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
         </div>
         </div>
         </div>`; 
        return acumulador;
        } )}


//anidar por categorias
$('#cocina').onclick(function(){ 
    let baseDatosCocina = baseDatosProductos.filter(elemento => elemento.genero ==="cocina");
    let card = anidarCategoria();
    $('#cocina').html(card(baseDatosCocina));
    document.write(baseDatosCocina);
})

$('#literatura').onclick(function(){
    let baseDatosLiteratura = baseDatosProductos.filter(elemento => elemento.genero ==="literatura")
    let card = anidarCategoria()
    $('#cocina').html(card(baseDatosLiteratura))
})

$('#ciencia').onclick(function(){
    let baseDatosCiencia = baseDatosProductos.filter(elemento => elemento.genero ==="ciencia")
    let card = anidarCategoria()
    $('#cocina').html(card(baseDatosCiencia))
})

// form ingreso datos clientes on click
let datosClientes=``;
for (let i = 0; i <x; i++) {
    console.log()
    datosClientes +=
    `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
    <h2>Ingrese sus datos</h2>
    <form action="#">
    <label for="name">Nombre:</label><br>
    <input type="text" id="name" name="name" value=""><br>
    <label for="email">Correo:</label><br>
    <input type="text" id="email" name="email" value=""><br>
    <label for="">Contraseña:</label><br>
    <input type="text" id="Contraseña" name="Contraseña" value=""><br>
    <label for="">Edad:</label><br>
    <input type="text" id="edad" name="edad" value=""><br>
    <button onclick="datosClientes" onkeypress="click(event);">Enviar</button>
    </form>
    </div>
    </div>`} 

    document.write(datosClientes)

//validacion formulario 
function validarFormulario(){
    let nombre= $('#nombre').val()
    let correo= $('#correo').val()
    let contrasena= $('#contra').val()
    let edad= Number($('#edad').val())

    edad= edad || 0
    
    alert(`Hola ${nombre}, ${correo}, ${contrasena}, ${edad}`);
    if(edad >= 18){
        console.log(`Estimado ${nombre}, su correo ${correo} ha sido registrado, Gracias por estar con nosotros!`)
    }else{
        $('#aviso').html(`<p>Usted no puede registrarse debido a que es menor de edad</p>`)
    }
}


// animaciones
$('#usuario').onclick(function(){
   $('#usuario').html(datosClientes)
   //animacion
    $('#usuario').onclick(function(){
        $(".a").show(3000)
    });
    $('#usuario').onclick(function(){
        $(".a").hide(3000)
    });
    $('#usuario').onclick(function(){
        $("a").slideDown(3000)
    });
    $('#usuario').onclick(function(){
        $("a").slideToggle(3000)
    })
})

      
  $( "#levi" ).onclick(function() {
    $( "#book" ).animate({
      width: [ "toggle", "swing" ],
      height: [ "toggle", "swing" ],
      opacity: "toggle"
    }, 5000, "linear", function() {
      $( this ).after( "<div>Animation complete.</div>" );
    });
  });


// API
  
document.addEventListener('DOMContentLoaded', ()=> {
    const random = getRandomInt(1, 151)
    fetchData(random)
})
const getRandomInt = (min ,max) => {
    return Math.floor(Math.random()*(max - min))+min;
}
const fetchData = async(id) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        pintar(data)
    }catch(error){
        console.log(error)
    }
}

const pintar = (pokemon) => {
    console.log(pokemon)
    const row = document.getElementById('.row')
    const template = document.getElementById('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()
    clone.getElementById('.card-img-top').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
   fragment.appendChild(clone)
   row.appendChild(fragment)
}







