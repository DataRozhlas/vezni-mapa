title: "Odkud pochází nejvíc vězňů a jak je na tom vaše obec? Mapa ukazuje ohniska kriminality"
perex: "Zatímco v okresech Praha-západ, Havlíčkův Brod, Žďár nad Sázavou či Pelhřimov pobývá za mřížemi méně než jeden z každého tisíce obyvatel, na Ústecku, Teplicku, Chomutovsku či Mostecku jsou ve vězení čtyři až pět lidí z tisíce. V těsném závěsu za nimi následují okresy Ostrava-město, Karviná, Děčín a Bruntál."
published: "26. března 2019"
styles: ["https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css", "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v3.1.2/mapbox-gl-geocoder.css", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css","https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"]
libraries: ["https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js", "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v3.1.2/mapbox-gl-geocoder.min.js", jquery, "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"] #jquery, d3, highcharts, datatables
options: [noheader, nopic] #wide, noheader (, nopic)
---

Ukazují to aktuální [data od Vězeňské služby České republiky](https://github.com/DataRozhlas/vezni-mapa/tree/master/data). Server iROZHLAS.cz je spojil s [údaji o počtu obyvatel](https://www.czso.cz/csu/czso/pocet-obyvatel-v-obcich-see2a5tx8j) a vytvořil interaktivní mapu, která nabízí netradiční pohled na rozložení kriminality. 

<wide>
<h3>Kolik procent obyvatel je ve vězení – v mapě najdete údaje pro každou obec </h3>
<div id="map"><div class='map-overlay' id='legend'></div></div>
<div id='pd'><p>Vyberte obec na mapě!</p></div>
</wide>

"Příležitosti pro páchání kriminality jsou v prostoru rozmístěné extrémně nerovnoměrně. V některých regionech v Česku se vyskytuje daleko menší počet kriminálních příležitostí a důvodů s trestnou činností začít," okomentoval mapu sociální geograf Martin Šimon, který prostorové vzorce kriminality [dlouhodobě studuje](https://www.soc.cas.cz/en/lide/martin-simon).

Mapa ukazuje místa trvalého pobytu vězněných osob. Ta se mohou lišit od míst, kde ke zločinům dochází. Většina se jich totiž odehrává ve velkých městech – jen v Praze evidují policistů třetinu všech tuzemských trestných činů.

<a href="https://www.irozhlas.cz/veda-technologie/technologie/kriminalita-mapy-geografie-data-policie-datari-podcast_1902150701_cib">
<right>
<h3>Polovina zločinů se odehraje na pěti procentech ulic, říkají sociální geografové</h3>
<p>Poslechněte si podcast Dataři o kriminalitě se sociálními geografy Martinem Šimonem a Janou Jíchovou</p>
</right>
</a>

## Příjmová chudoba cti netratí

V mapě se proto vyplatí sledovat širší trendy, ne ojedinělé lokální výstřelky. "Zvýšený podíl vězňů je logický v regionech, které mají zvýšený výskyt i jiných negativních sociálních jevů. Jsou to regiony, kde se propojuje nezaměstnanost, rozvodovost a různé další atributy sociální exkluze," vysvětluje sociální geograf.

"Nejsou to nutně regiony, které by byly chudé z hlediska příjmů. V Česku máme spoustu chudých regionů, typicky na Vysočině. A tam je kriminalita i počet vězňů relativně zanedbatelný."

Na opačném konci škály jsou severozápadní Čechy a sever Moravy. Vyšší hodnoty podílu vězňů jsou vidět jak na Bruntálsku coby venkovském regionu, tak ve třetím nejlidnatějším městě Ostravě. Ve venkovských obcích okolo Ostravy jsou hodnoty podprůměrné, naproti tomu v Ústeckém kraji jsou zvýšené hodnoty ve městech i v menších obcích okolo.

<right>
<a href="https://interaktivni.rozhlas.cz/sudety/">
<h3>Existují Sudety? Hranice jsou zřetelné i sedmdesát let po vysídlení Němců</h3>
<img src="https://www.irozhlas.cz/sites/default/files/styles/zpravy_rubrikovy_nahled/public/images/03646494.jpeg?itok=_MkSFTuE"></img>
<p>Statistiky nezaměstnanosti, kvality vzdělání nebo volební účasti v Česku dodnes kopírují hranice historických Sudet. </p>
</a>
</right>

"Spousta lidí vnímá tyto regiony velmi podobně, ale jak ukazuje i tato mapa, jsou mezi nimi rozdíly. Jeden z diametrálních rozdílů, který byl dlouhodobě vidět v datech, je, že Ostravsko má z řady historických důvodů v průměru vyšší míru vzdělanosti oproti Ústecku," říká sociolog Šimon.

"Severní část Olomouckého kraje je region, který byl po druhé světové válce vysídlený. Je tam menší počet obcí, které jsou relativně málo zalidněné. Není tam žádné velké centrum, které by nabízelo pracovní příležitosti a dlouhodobě je to jeden z regionů, kde jsou nízké mzdy, málo pracovních příležitostí a v minulosti tam byla v důsledku krachu řady firem dlouhodobě vysoká nezaměstnanost. To může být jeden z faktorů, které pravděpodobně přispěly k tomu, že si část tehdejších obyvatel regionu vyzkoušela kriminální kariéru. V severních Čechách je to v důsledku ekonomických problémů transformace velmi podobné."

"V současnosti máme ve většině regionů velmi nízkou nezaměstnanost, jednu z nejnižších v EU, takže tento typ motivace opadá. Naopak, ke kriminalitě může vést jiný typ sociálních problémů vyplývajících z exekučního byznysu. Lidé z regionů, které jsou v současnosti nadměrně postiženy exekučním byznysem, mají vyšší pravděpodobnost, že se dostanou do bezvýchodné životní situace, a že někteří z nich zvolí kriminální dráhu," domnívá se Martin Šimon.

## Největší obec bez vězňů: Bystřice u Jablunkova
Při čtení mapy je potřeba vzít v úvahu obvyklou délku trestů: spíš než o současné kriminalitě vypovídá mapa o situaci před několika lety, kdy byly trestné činy spáchány. "Mapa tedy ukazuje, ve kterých regionech byly příhodné podmínky pro start kriminální kariéry zhruba před deseti lety," podotýká sociolog.

Protože má Česká republika přes šest tisíc obcí – a tři čtvrtiny z nich mají méně než tisíc obyvatel – vystupují některé obce z mapy jen náhodou. Například Županovice v okrese Jindřichův Hradec mají jako jediná obec více než tříprocentní podíl vězňů. Pečlivější pohled ale ukáže, že celá vesnice má 65 obyvatel a shodou okolností dva z nich jsou právě ve výkonu trestu.

"Může to být zajímavost pro čtenáře, ale z hlediska statistiky a analytických výzkumů vězeňské populace to je informace, která je sice extrémní, ale věcně není podstatná," komentuje to sociolog.

Důležitější podle něj je uvědomit si, že víc než polovina obcí nikoho ze svých trvale hlášených obyvatel ve vězení nemá. Nejlidnatější z nich je Bystřice u Jablunkova, jediná obec z kategorie nad pět tisíc obyvatel, ve které vězeňská služba neeviduje místo pobytu žádného z uvězněných. 

"Obce, kde je vyšší míra kriminality se nejčastěji dostávají do centra pozornosti. My bychom se ale z hlediska prevence kriminality měli zajímat i obce, které mají výrazně podprůměrný počet vězňů. Co dělají jinak, že tam ten problém nevzniká?" ptá se sociální geograf Šimon.

## Přeplněné věznice 
Z deseti a půl milionu obyvatel České republiky je podle dat Vězeňské služby za mřížemi 21 674 lidí, z toho drtivá většina ve výkony trestu, 1766 ve vazbě a 86 v detenci.

<wide>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="https://data.irozhlas.cz/vezni-mapa/svg/vazba_00.svg" width="100%">
<div class="slider" id="vazba">
</div>
</wide>

S více než dvěma stovkami uvězněných na 100 tisíc obyvatel se Česko řadí v Evropě mezi státy s nejvyšším podílem vězňů na celé populaci. Podle databáze [World Prison Brief](http://www.prisonstudies.org/) je vzhledem k počtu obyvatel více vězňů jen v Moldavsku, Litvě, Bělorusku a Rusku.

Podobně jako v zahraničí tvoří i v Česku více než devadesát procent vězeňské populace muži. "Žen ve výkony trestu je mnohem méně. Máme jednu ženskou věznici ve Světlé nad Sázavou, ženy jsou také umístěny ve Velkých Přílepech a v Řepích, to jsou pobočky vazební věznice Praha-Ruzyně. Před dvěma lety jsme potomotevřeli ženskou pobočku věznice Nové Sedlo v Drahonicích," říká mluvčí vězeňské služby Petra Kučerová.

<wide>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="https://data.irozhlas.cz/vezni-mapa/svg/zeny_00.svg" width="100%">
<div class="slider" id="zeny">
</div>
</wide>

Více než žen je v českých věznicích cizích státních příslušníků, nejčastěji Slováků, Vietnamců a Ukrajinců, což jsou zároveň tři nejpočetnější menšiny.

<wide>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="https://data.irozhlas.cz/vezni-mapa/svg/cizinci_00.svg" width="100%">
<div class="slider" id="cizinci">
</div>
</wide>

Při umísťování vězně k výkonu trestu do konkrétní věznice hraje roli především druh uloženého trestu, tedy zda soud odsouzeného pošle do vězení s ostrahou nebo se zvýšenou ostrahou. "Pak jsou důležitým faktorem ubytovací kapacity. V současné době jsme přeplnění na 104 procent, takže je to také důležitý aspekt, říká mluvčí vězeňské služby Petra Kučerová.

Podle [poslední statistiky](https://www.vscr.cz/wp-content/uploads/2019/03/MSH02-2019.pdf) je nejvíce přeplněná věznice Oráčov v Olomouckém kraji. Kapacitu 476 vězňů překračuje o 31 procent. Nejvíce volných míst je naopak v Praze Ruzyni, která je zaplněna na 82 procent.

"O umístění vězňů do jednotlivých věznic rozhoduje dispečer na generálním ředitelství vězeňské služby. Není na to žádná komise, rozhoduje pouze dispečer," říká mluvčí Kučerová. Vedle typu vězení a jeho kapacity bere podle ní dispečer v úvahu také její vzdálenost od místa bydliště.  

"Snažíme se, aby se nezpřetrhaly rodinné vazby. Pokud je odsouzený má a přijde do výkonu trestu z fungujícího rodinného prostředí, je žádoucí, aby se po výkonu trestu měl kam vrátit, aby měl stabilní rodinné zázemí. Jde o to, aby ho jeho rodina, se kterou je v kontaktu, mohla navštěvovat. Víme, že to má na odsouzenéí pozitivní vliv, obzvláště jsou-li tam nějaké vazby s dětmi," vysvětluje mluvčí. "Rozhodnutí ovlivňují i další faktory, jako je zdravotní stav, nebo například dieta, kterou odsouzený má a my ji musíme dodržovat."