import "./unveil.js"

mapboxgl.accessToken = 'pk.eyJ1IjoidG9jaXQiLCJhIjoiY2pzczY0bWh5MWJ3cDN6bzZieGl6ZzB1eSJ9.QuIC52CEfSwa5JI8yNVCtw';


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/tocit/cjtl5cjaq60lh1fpw28zddqpv',
    center: [15.913330, 49.848861],
    zoom: 7   
});    


map.on('load', function() {
    //legenda
    var i;
    var colors = ['#fef0d9','#fdcc8a','#fc8d59','#e34a33','#b30000'];
    var layers = ['< 0,09 % obyvatel', '0,9–0,31 %', '0,31–0,71 %', '0,71–1,64 %', '1,64–3,08 %'];

    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
      
        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
      

    //tooltip
    map.on('mousemove', function(e) {
        var obce = map.queryRenderedFeatures(e.point, {
          layers: ['vezniobcespojene']
        });
        if (obce.length > 0) {
            document.getElementById('pd').innerHTML = '<p><strong>' + obce[0].properties.n + '</strong>, okres ' + obce[0].properties.okres + ': <strong>' + obce[0].properties.pct + ' % obyvatel ve vězení</strong><br>' + obce[0].properties.pocobyv + ' obyvatel | ' + obce[0].properties.veznu + ' ve vězení, z toho ' + obce[0].properties.muzu + ' mužů a ' + obce[0].properties.zen + ' žen | ' + obce[0].properties.trest + ' ve výkonu trestu, ' + obce[0].properties.vazba + ' ve vazbě a ' + obce[0].properties.dete + ' v detenci</p>';
          } else {
            document.getElementById('pd').innerHTML = '<p>Vyberte obec na mapě!</p>';
        }        
    });
      
    //geocoder
    map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        countries: 'cz',
        placeholder: 'Hledej'
    }));
        
    map.getCanvas().style.cursor = 'default';

    map.fitBounds([[12.09,51.06],[18.87,48.55]]);

    // zoom myší teprve až po interakci s mapou
    map.scrollZoom.disable(); 
    map.on("click", (e) => {
        map.scrollZoom.enable();
    });

    map.addControl(new mapboxgl.NavigationControl({showCompass: false}), "top-left"); // buttonky pro zoom a rotaci

});




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

