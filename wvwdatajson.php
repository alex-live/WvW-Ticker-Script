<head>
    <link href="css/wvwdatajson.css" rel="stylesheet">
</head>
<body>
	<div class="outer">
		<div id="oldiv"></div>
    <!-- Gruene Fraktion -->
    <div class="ticker abschnitt1">
    	<div class="ticker box1">
    		<span id="greenworldname1"></span><span id="greenworldname2"></span><span id="grennworldname3"></span>
    	</div>
    	<div class="ticker box2">
    		<img class="marker" src="marker.png"> k/d: <span id="kdgreen"></span><br/>
    		<img class="marker" src="marker.png"> Gefecht: <span id="tckgreen"></span><br/>
    		<img class="marker" src="marker.png"> Gesamt: <span id="scrgreen"></span><br/>
    		<img class="marker" src="marker.png"> Match: <span id="pktgreen"></span>
    	</div>
    </div>

    <!-- Blaue Fraktion -->
    <div class="ticker abschnitt2">
    	<div class="ticker box1">
    		<span id="blueworldname1"></span><span id="blueworldname2"></span><span id="blueworldname3"></span>
    	</div>
    	<div class="ticker box2">
    		<img class="marker" src="marker.png"> k/d: <span id="kdblue"></span><br/>
    		<img class="marker" src="marker.png"> Gefecht: <span id="tckblue"></span><br/>
    		<img class="marker" src="marker.png"> Gesamt: <span id="scrblue"></span><br/>
    		<img class="marker" src="marker.png"> Match: <span id="pktblue"></span>
    	</div>
    </div>

    <!-- Rote Fraktion -->
    <div class="ticker abschnitt3">
    	<div class="ticker box1">
    		<span id="redworldname1"></span><span id="redworldname2"></span><span id="redworldname3"></span>
    	</div>
    	<div class="ticker box2">
    		<img class="marker" src="marker.png"> k/d: <span id="kdred"></span><br/>
    		<img class="marker" src="marker.png"> Gefecht: <span id="tckred"></span><br/>
    		<img class="marker" src="marker.png"> Gesamt: <span id="scrred"></span><br/>
    		<img class="marker" src="marker.png"> Match: <span id="pktred"></span>
    	</div>
    </div>

    <!-- Zusatzinfo -->
    <div class="ticker abschnitt4">
    	<div class="ticker box3">
    		<span><a href="http://www.gw2dzagonur.de" target="_blank">www.gw2dzagonur.de</a></span>
    		<img class="timer" src="time.png"> letzte Aktualisierung: <span id="currtime">Aktuelle Uhrzeit</span>
    	</div>
    </div>
  </div>

    <body onload="window.setInterval('getWvWData()',10000)">
    <!-- JAVASCRIPT LINKS -->
    <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script src="js/wvwdata.js"></script>
</body>
