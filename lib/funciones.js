function restaurante(){
//    var alto_section = $('section').height()+25;
//    $('#fondo_amigos').css({'height':''+alto_section+'px'});
    $('#fondo_bodega').fadeOut(1500);
    $('#fondo_amigos').fadeIn(1500);
} 
function bodega(){
//    var alto_section = $('section').height()+25;
//    $('#fondo_bodega').css({'height':''+alto_section+'px'});
    $('#fondo_amigos').fadeOut(1500);
    $('#fondo_bodega').fadeIn(1500);
} 
function colocacion_paso2(){
    alto_pantalla= $(window).height()-50;
    alto_imagen= $('#im_paso2').height();
    if(alto_imagen<alto_pantalla){
        $('.arreglo_posicion').css({'height':alto_pantalla+'px'});
        $('#im_paso2').fadeIn();
    }
    else{
        $('.arreglo_posicion').css({'height':(alto_imagen+120)+'px'});
        $('#im_paso2').fadeIn();
    }
}