var minutes=0;
var secondes=0;
var dixiemes=0;
			
var monChrono;
			
var demarre=false;
			
function afficheChrono() {
	document.getElementById("dixiemes").innerHTML = dixiemes;
	document.getElementById("secondes").innerHTML = secondes;
	document.getElementById("minutes").innerHTML = minutes;
	}
	
function Chrono() {
	dixiemes++;
		
	if (dixiemes>9) {
		dixiemes=0;
		secondes++;
		}
		
	if (secondes>59) {
		secondes=0;
		minutes++;
		}

	afficheChrono();	
		
	//console.log(monChrono);
	monChrono = setTimeout(Chrono,100);
	demarre=true;
	}
	
function razChrono() {
	minutes=0;
	secondes=0;
	dixiemes=0;
	demarre=false;

	afficheChrono();
	}
	
function stopChrono() {
	clearTimeout(monChrono);
	demarre=false;
	}
