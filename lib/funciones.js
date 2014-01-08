function restaurante(){
    var alto_section = $('section').height()+25;
    $('#fondo_amigos').css({'height':''+alto_section+'px'});
    $('#fondo_bodega').fadeOut(1500);
    $('#fondo_amigos').fadeIn(1500);
    $('#introduccion_portada').html("<span>texto1</span><span>blab bla bla</span>");
} 
function bodega(){
    var alto_section = $('section').height()+25;
    $('#fondo_bodega').css({'height':''+alto_section+'px'});
    $('#fondo_amigos').fadeOut(1500);
    $('#fondo_bodega').fadeIn(1500);
    $('#introduccion_portada').html("<span>texto2</span><span>blab bla bla</span>");

} 