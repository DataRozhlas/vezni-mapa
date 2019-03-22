


$(document).ready(function(){
    for (let index = 0; index < 35; index++) {    
        $( "#zeny" ).append( "<div><img src='https://data.irozhlas.cz/vezni-mapa/svg/zeny_" + ("0" + (index + 1)).slice(-2) + ".svg' width='100%'></div>" );
        $( "#cizinci" ).append( "<div><img src='https://data.irozhlas.cz/vezni-mapa/svg/cizinci_" + ("0" + (index + 1)).slice(-2) + ".svg' width='100%'></div>" );
        $( "#vazba" ).append( "<div><img src='https://data.irozhlas.cz/vezni-mapa/svg/vazba_" + ("0" + (index + 1)).slice(-2) + ".svg' width='100%'></div>" );    
    }
    $('.slider').slick({
        mobileFirst: true,
        lazyLoad: "ondemand"
    });
});