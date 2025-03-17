# Javascript Intermediate

<img src="./assets/JavaScript-logo.png" alt="JS Logo" width="200px" height="200px">

## Voordat je begint
Nadat je de repository gecloned hebt moet je eerst local de vereiste libraries installeren.
Dit doe je door in de terminal het commando:
```
npn install
```
in te typen. Dit commando installeert alle vereiste libraries en software voor deze opdracht, zoals bijvoorbeeld een web server dan wel de libaries die nodig zijn om je code te testen.

## Aan de slag

In de directory `src` vind je JavaScript bestanden waarin [JSDoc](https://jsdoc.app/) commentaar staat die aangeeft welke functies je zou moeten programmeren en aan welke eisen de functies zouden moeten voldoen.

De code die je schrijft moet in dat oefeningbestand komen te staan, zodat het bijbehorende testbestand deze code vervolgens kan testen.


:warning: : Pas alleen de bestanden in de `src` directory op de aangewezen punten aan, en laat alle andere bestanden ongewijzigd!!!

## Assignment02_1 - Arrays Basics

In de bestanden `src\assignment02_1a.js` staan enkele simpele oefenopdrachten met betrekking tot de JS arrays.

:information_source: : Bestudeer voor deze oefeningen de volgende MDN pagina omtrent [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections).  

## Assignment02_2 - Advanced Arrays en Objects

:information_source: : Bestudeer voor deze oefeningen de diverse methoden die de Array bied (zie ook de linker kolom op https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) vanaf de methode `Array.prototype.concat()` tot/met `Array.prototype.values()`. 

:label: : De oefening met betrekking tot de functie `calculate` is optioneel. Maar als je ermee aan de slag gaat bestueer dan de link: [spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

:information_source: : Voor de oefening met betrekking tot de `getTotalDropPrice`, kun je het beste eerst bekijken hoe je het beste met link: [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) kunt werken.

## Assignment02_3 - Classes
:information_source: : In de eerste oefening dien je een constructor voor de klasse Trip te implementeren. Het is te adviseren om hiervoor gebruik te maken van de link: [Builder Pattern](https://youtu.be/M7Xi1yO_s8E).

:label: : De functie (isTrip) voor de 2e opdracht vind je onder de Trip klasse.

:label: : De oefeningen met betrekking tot de methoden `getKeys` en `getValues` zijn optioneel. Maar weet dat deze oefeningen gebruik maken van het feit dat een klasse in JavaScript in principe een functie is met de attributen als array.

:label: : De functies `tripRatingFilter` als ook `allTripTitles` zouden in principe beter methoden van een klasse TripService kunnen zijn. Het gebruik van service klassen komt echter in de volgende JS03 oefenreeks aan de orde.
