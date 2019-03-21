


$(document).ready(function(){
    for (let index = 0; index < 35; index++) {    
        $( "#zeny" ).append( "<img src='https://data.irozhlas.cz/vezni-mapa/svg/zeny_" + ("0" + (index + 1)).slice(-2) + ".svg' width='100%'>" );    
    }
    $('.slider').slick({});
});