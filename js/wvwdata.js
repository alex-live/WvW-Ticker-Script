var offlineinfo = '<div class="overlay"><br/><br/>DATEN NICHT VERFUEGBAR<br/><br/>GW2 API OFFLINE<br/>ODER<br/>WVW RESET IM GANGE<br/><img src="dzago_logo_256x256.png"></img></div>';
var homeworld = 2205; /* <----- Hier die ID des Servers eintragen, über den die aktuelle Begegnung läuft! ----- */
var mid;

getWvWData();

function getWvWData(){
	if(typeof mid === 'undefined'){
		getMatchID();
	}else{
		getWvWDetails();
	}
}
function getWvWDetails(){
	$.getJSON('https://api.guildwars2.com/v2/wvw/matches?id=' + mid, function(data) {
		getWorldName('greenworldname1',data.all_worlds.green[0]);
		getWorldName('greenworldname2',data.all_worlds.green[1]);
		getWorldName('greenworldname3',data.all_worlds.green[2]);
		getWorldName('blueworldname1',data.all_worlds.blue[0]);
		getWorldName('blueworldname2',data.all_worlds.blue[1]);
		getWorldName('blueworldname3',data.all_worlds.blue[2]);
		getWorldName('redworldname1',data.all_worlds.red[0]);
		getWorldName('redworldname2',data.all_worlds.red[1]);
		getWorldName('redworldname3',data.all_worlds.red[2]);
  	document.getElementById("pktgreen").innerHTML=Trenner(data.scores.green);
    document.getElementById("pktblue").innerHTML=Trenner(data.scores.blue);
    document.getElementById("pktred").innerHTML=Trenner(data.scores.red);
    document.getElementById("kdgreen").innerHTML=Math.round((data.kills.green/data.deaths.green)*100)/100 + " (" + data.kills.green + " / " + data.deaths.green + ")";
    document.getElementById("kdblue").innerHTML=Math.round((data.kills.blue/data.deaths.blue)*100)/100 + " (" + data.kills.blue + " / " + data.deaths.blue + ")";
    document.getElementById("kdred").innerHTML=Math.round((data.kills.red/data.deaths.red)*100)/100 + " (" + data.kills.red + " / " + data.deaths.red + ")";
    document.getElementById("tckgreen").innerHTML=Trenner(data.victory_points.green);
    document.getElementById("tckblue").innerHTML=Trenner(data.victory_points.blue);
    document.getElementById("tckred").innerHTML=Trenner(data.victory_points.red);
    document.getElementById("scrgreen").innerHTML=Trenner(data.skirmishes[data.skirmishes.length-1].scores.green);
    document.getElementById("scrblue").innerHTML=Trenner(data.skirmishes[data.skirmishes.length-1].scores.blue);
    document.getElementById("scrred").innerHTML=Trenner(data.skirmishes[data.skirmishes.length-1].scores.red);
    uhrzeit();
  });
}

function getWorldName(loc, worldid){
	if(worldid){
		$.getJSON('https://api.guildwars2.com/v2/worlds?lang=de&ids=' + worldid, function(data) {
			document.getElementById(loc).innerHTML=data[0].name + '<br>';
			return;
		})
	}
}

function getMatchID(){
	$.getJSON('https://api.guildwars2.com/v1/wvw/matches.json', function(data) {
		console.log("Searching for Match ID");
		for(var i = 0; i < data.wvw_matches.length; i++){
			var obj = data.wvw_matches[i];
			if(obj.red_world_id == homeworld){
				mid = obj.wvw_match_id;
				getWvWDetails();
			}
			else if(obj.blue_world_id == homeworld){
				mid =  obj.wvw_match_id;
				getWvWDetails();
			}
			else if(obj.green_world_id == homeworld){
				mid = obj.wvw_match_id;
				getWvWDetails();
			}
		}
		if(typeof mid === 'undefined'){
			console.log("no Match ID found, showing Offline Info");
			document.getElementById("oldiv").innerHTML=offlineinfo;
		}

	});
}
function uhrzeit(){
 a = new Date();
 b = a.getHours(); c = a.getMinutes(); d = a.getSeconds();
 if(b < 10){b = '0'+b;}
 if(c < 10){c = '0'+c;}
 if(d < 10){d = '0'+d;}
 zeit = b+':'+c+':'+d;
 document.getElementById("currtime").innerHTML=zeit;
}

function Trenner(number) {
// Info: Die '' sind zwei Hochkommas
number = '' + number;
if (number.length > 3) {
var mod = number.length % 3;
var output = (mod > 0 ? (number.substring(0,mod)) : '');
for (i=0 ; i < Math.floor(number.length / 3); i++) {
if ((mod == 0) && (i == 0))
output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
else

// hier wird das Trennzeichen festgelegt mit '.'
output+= '.' + number.substring(mod + 3 * i, mod + 3 * i + 3);
}
return (output);
}
else return number;
}
