// mapa
const map = new mapboxgl.Map({
    container: "map",
    style: "https://data.irozhlas.cz/mapa-domu/map_styl/style.json",
    zoom: 6,
    maxZoom: 11,
    attributionControl: false,
    center: [15.3350758, 49.7417517],
  });

map.getCanvas().style.cursor = 'default';
map.fitBounds([[12.09,51.06],[18.87,48.55]]);
  
  map.addControl(new mapboxgl.AttributionControl({
    compact: true,
    customAttribution: "obrazový podkres <a target=\"_blank\" href=\"https://samizdat.cz\">Samizdat</a>, data <a target=\"_blank\" href=\"http://vdp.cuzk.cz/\">ČÚZK</a>",
  }));
  
  map.scrollZoom.disable(); // zoom myší teprve až po interakci s mapou
  map.on("click", (e) => {
    map.scrollZoom.enable();
  });
  
  map.addControl(new mapboxgl.NavigationControl(), "top-left"); // buttonky pro zoom a rotaci
  
  
  map.on("load", () => {
    //legenda
    var i;
    var colors = ['#fef0d9','#fdcc8a','#fc8d59','#e34a33','#b30000'];
    var layers = ['< 0,09 % obyvatel', '0,09–0,31 %', '0,31–0,71 %', '0,71–1,64 %', '1,64–3,08 %'];

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
    map.addLayer({ // pridat vrstvu domu
      id: "vezniobcespojenegeojson",
      type: "fill",
      source: {
        type: "vector",
        tiles: ["https://data.irozhlas.cz/vezni-mapa/tiles/{z}/{x}/{y}.pbf"],
      },
      "source-layer": "vezniobcespojenegeojson",
      paint: {
        "fill-color": [
            "step",
            ["get", "pct"],
            "#fef0d9",
            0.09,
            "#fdcc8a",
            0.31,
            "#fc8d59",
            0.71,
            "#e34a33",
            1.64,
            "#b30000"
          ],
        "fill-opacity": 0.8,
        "fill-outline-color": "hsla(59, 0%, 0%, 0.15)",
      },
    });

    map.on('mousemove', function(e) {
        var obce = map.queryRenderedFeatures(e.point, {
          layers: ['vezniobcespojenegeojson']
        });
        if (obce.length > 0) {
            document.getElementById('pd').innerHTML = '<p><strong>' + obce[0].properties.n + '</strong>, okres ' + obce[0].properties.okres + ': <strong>' + obce[0].properties.pct + ' % obyvatel ve vězení</strong><br>' + obce[0].properties.pocobyv + ' obyvatel | ' + obce[0].properties.veznu + ' ve vězení, z toho ' + obce[0].properties.muzu + ' mužů a ' + obce[0].properties.zen + ' žen | ' + obce[0].properties.trest + ' ve výkonu trestu, ' + obce[0].properties.vazba + ' ve vazbě a ' + obce[0].properties.dete + ' v detenci</p>';
          } else {
            document.getElementById('pd').innerHTML = '<p>Vyberte obec na mapě!</p>';
        }        
    });
  
    map.addLayer({
      id: "labels",
      source: {
        tiles: [
          "https://interaktivni.rozhlas.cz/tiles/ton_l2/{z}/{x}/{y}.png",
        ],
        type: "raster",
        tileSize: 256,
      },
      type: "raster",
    });
  
    if (window.location.href.includes("latlng")){ //posunuti mapy dle url
      var ll = window.location.href.split("latlng=")[1].split('&')[0];
      map.setCenter([parseFloat(ll.split('|')[1]), parseFloat(ll.split('|')[0])]);
      map.setZoom(parseInt(ll.split('|')[2]));
    };
  });
  
  map.on('moveend', function(e) { // poloha do url pro sdileni
    var cen = map.getCenter().wrap();
    window.history.pushState('', '', window.location.pathname + '?latlng=' + cen.lat + '|' + cen.lng + '|' + map.getZoom());
  });
  
  $("#inp-geocode").on("focus input", () => $("#inp-geocode").css("border-color", "black"));
  
  // geocoder
  const form = document.getElementById("frm-geocode");
  form.onsubmit = function submitForm(event) {
    event.preventDefault();
    const text = document.getElementById("inp-geocode").value;
    if (text === "") {
      map.flyTo({
        center: [15.3350758, 49.7417517],
        zoom: 7,
      });
    } else {
      $.get(`https://api.mapy.cz/geocode?query=${text}`, (data) => {
        if (typeof $(data).find("item").attr("x") === "undefined") {
          $("#inp-geocode").css("border-color", "red");
          return;
        }
        const x = parseFloat($(data).find("item").attr("x"));
        const y = parseFloat($(data).find("item").attr("y"));
        if (x < 12 || x > 19 || y < 48 || y > 52) { // omezení geosearche na česko, plus mínus
          $("#inp-geocode").css("border-color", "red");
          return;
        }
        map.flyTo({
          center: [x, y],
          zoom: 12,
        });
      }, "xml");
    }
  };
  