import "./unveil.js"
import './mapa.js'
// grafy
$(document).ready(function(){
    for (let index = 0; index < 35; index++) {
        $( "#vazba" ).append( "<div><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' data-src='https://data.irozhlas.cz/vezni-mapa/svg/vazba_" + ("0" + (index + 1)).slice(-2) + ".svg' width='100%' /></div>" );        
        $( "#zeny" ).append( "<div><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' data-src='https://data.irozhlas.cz/vezni-mapa/svg/zeny_" + ("0" + (index + 1)).slice(-2) + ".svg' width='100%' /></div>" );
        $( "#cizinci" ).append( "<div><img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' data-src='https://data.irozhlas.cz/vezni-mapa/svg/cizinci_" + ("0" + (index + 1)).slice(-2) + ".svg' width='100%' /></div>" );
    }
    $('.slider').slick({
        mobileFirst: true
    });
});

$(document).ready(function(){
    $("img").unveil();
});

