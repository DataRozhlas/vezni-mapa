title: "Vězeňská populace"
perex: ""
published: "26. března 2019"
styles: ["https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css", "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v3.1.2/mapbox-gl-geocoder.css", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css","https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"]
libraries: ["https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js", "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v3.1.2/mapbox-gl-geocoder.min.js", jquery, "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"] #jquery, d3, highcharts, datatables
options: [noheader, nopic] #wide, noheader (, nopic)
---

<wide>
<h2>Odkud pochází nejvíc vězňů?</h2>
<div id="map"><div class='map-overlay' id='legend'></div></div>
<div id='pd'><p>Vyberte obec na mapě!</p></div>
</wide>

<wide>
<img src="https://data.irozhlas.cz/vezni-mapa/svg/zeny_00.svg" width="100%">
<div class="slider" id="zeny">
</div>
</wide>

<wide>
<img src="https://data.irozhlas.cz/vezni-mapa/svg/cizinci_00.svg" width="100%">
<div class="slider" id="cizinci">
</div>
</wide>

<wide>
<img src="https://data.irozhlas.cz/vezni-mapa/svg/vazba_00.svg" width="100%">
<div class="slider" id="vazba">
</div>
</wide>