# Javascript Basics

<img src="./assets/JavaScript-logo.png" alt="JS Logo" width="200px" height="200px">

## Voordat je begint

Nadat je de repository gecloned hebt moet je eerst local de vereiste libraries installeren.
Dit doe je door in de terminal het commando:

```bash
npm install
```

in te typen. Dit commando installeert alle vereiste libraries en software voor deze opdracht, zoals bijvoorbeeld een web server dan wel de libaries die nodig zijn om je code te testen.

## Aan de slag

In de directory `src/utils` vind je JavaScript bestanden waarin commentaar staat (zoals beschreven op [JSDoc](https://jsdoc.app/) site, het commentaar beschrijft welke functies je moet programmeren en wat de eisen zijn.

De code die je schrijft moet in dat bestand komen, zodat de bijbehorende test deze code kan controleren.
Met het commando:

```bash
npm run test:vitest
```

test je alle opdrachten.
Wil je een specifiek bestand testen, dan kun je dat doen door de filename van de test erachter te zetten zoals bijvoorbeeld:

```bash
npm run test:vitest ./test/oefening01_2a.test.js
```

:warning: Pas alleen de bestanden aan die in de `src` directory. Laat alle andere bestanden ongewijzigd!!!

## Oefening01_1 - Dataypen, operatoren en expressies

In de bestanden `src/utils/oefening01_1a.js` en `src/utils/oefening01_1b.js` staan opdrachten met betrekking tot datatypen, operatoren en expressies. Sommige opdrachten kan je met een *IF* statement uitvoeren, maar dat is NIET de bedoeling. Deze opdrachten zijn namelijk te maken zonder het gebruik van een *IF* statement. Maak gebruik van je kennis omtrent de omgang met getallen en het build-in object *Math*.

## Oefening01_2 - Conditions: if / switch

In het bestand `src/utils/oefening01_2a.js` vind je kleinere opdrachten omtrent het *IF* en *switch* statement.

In het bestand `src/utils/oefening01_2b.js` staat een groter en uit de PROG lessen bekende opdracht. Deze opdracht is aangepast en in kleiner functies opgedeeld.

:information_source: : Bestudeer voor deze opdrachten de MDN pagina [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) (tot 'Exception handling statements') en [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

## Oefening01_3 - Loops

In het bestand `src/utils/oefening01_3.js` vind je opdrachten met betrekking tot het programmeren van lussen in JavaScript.

:information_source: : Zie [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) (t/m 'while statement')

## Oefening01_4 - Strings

Het bestand `src/utils/oefening01_4.js` bevat meerdere opdrachten omtrent het gebruik van *String* Objecten.

:information_source: : Bestudeer [Text formatting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting) (tot 'Multi-line template literals') en de bijbehorende referentie pagina voor het build-in object [*Strings*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (tot 'Static methods')
