//* 1. Daten holen von input
//* 2. Output definieren
//* 3. Gechlecht prüfen
//* 4. Kalorie für männer und Frauen rechnen
//* 5. Gesamtumsatz rechnen 
//* 6. Kilojoule rechnen 
//* 7. Alle ergeblisse in output zeigen 

const rechnen = () => {
    // 1. Daten holen von input
    const groesse= document.querySelector("#kGroesse").value;
    const alter= document.querySelector("#alter").value;
    const gewicht= document.querySelector("#gewicht").value;
    const geschlecht= document.querySelector('input[name="geschlecht"]:checked').value;
    const aktivitaet= document.querySelector("#aktivitaet").value;
    
    // 2. Output definieren
    const kcalWert= document.querySelector(".kcalWert");
    const kjWert= document.querySelector(".kjWert");
    const kcalWert2= document.querySelector(".kcalWert2");
    const kjWert2= document.querySelector(".kjWert2");

    //Locale variablen
    let kcalMaenlich, kcalWeiblich,gesamt;

    // 3. Gechlecht prüfen
    if(geschlecht=="weiblich"){
        //4. Kalorie für männer und Frauen rechnen
        kcalWeiblich= Number((655.1+ (9.6 * gewicht) + (1.8 * groesse ) - (4.7 * alter)).toFixed(0));
        // 7. Alle ergeblisse in output zeigen
        kcalWert.innerHTML= kcalWeiblich;
        kjWert.innerHTML= fKj(kcalWeiblich).toFixed(0);
        gesamt=fAktiviteat(kcalWeiblich,aktivitaet);
        console.log(gesamt);
        kcalWert2.innerHTML= gesamt.toFixed(0);
        kjWert2.innerHTML= fKj(gesamt).toFixed(0);
        
    } else if(geschlecht=="maenlich"){
        //4. Kalorie für männer und Frauen rechnen
        kcalMaenlich= (66.47 + (13.7 * gewicht) + (5 * groesse) -(6.8 * alter)).toFixed(2);
        // 7. Alle ergeblisse in output zeigen
        kcalWert.innerHTML= kcalMaenlich;
        kjWert.innerHTML= fKj(kcalMaenlich).toFixed(0);
        gesamt=fAktiviteat(kcalMaenlich,aktivitaet);
        console.log(gesamt);
        kcalWert2.innerHTML= gesamt.toFixed(0);
        kjWert2.innerHTML= fKj(gesamt).toFixed(0);
        
    }
    

}

// 6. Kilojoule rechnen
const fKj = (zahl) => {
    return (zahl * 4.184);
}

// 5. Gesamtumsatz rechnen 
const fAktiviteat = (kcal, aki) =>{
    switch (aki){
        case "1":
            return kcal* 0.95;
            break;
        case "2":
            return kcal * 1.2;
            break;
        case "3":
            return kcal * 1.5;
            break;
        case "4":
            return kcal * 1.7;
            break;
        case "5":
            return kcal * 1.9;
            break;
        case "6":
            return kcal * 2.2;
            break;
        default:
            return kcal;
            break;
    }
}