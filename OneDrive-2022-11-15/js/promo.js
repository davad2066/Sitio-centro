//disparador

function disparador(id) {
    ventana_swich();
    cargue_info(id);
}

function ventana_swich() {
    var ventana= document.getElementById("ventana");

    ventana.classList.toggle("close");
    ventana.classList.toggle("open");
}

function cargue_info(id) {
    var figura = document.getElementById(id);

// extraer
    var texto_titulo =figura.getElementsByTagName("figcaption")[0].textContent;
    var texto_parrafo =figura.getElementsByTagName("p")[0].textContent;
    var url =figura.getElementsByTagName("img")[0].getAttribute("src");

// insertar
    var ventana = document.getElementById("ventana");

    ventana.getElementsByTagName("h3")[0].innerHTML =texto_titulo;
    ventana.getElementsByTagName("p")[0].innerHTML =texto_parrafo;
    ventana.getElementsByTagName("img")[0].setAttribute("src", url);   
}
// nav btn select

function bt_select(id){
    var btn_txt = document.getElementsByClassName("btn_txt");
    for( var i = 0; i < btn_txt.length; i++){
        btn_txt[i].getElementsByTagName("a")[0].classList.remove("select");
    }
    
    document.getElementById(id).classList.add("select");
    
    document.getElementById("pop").play();
}