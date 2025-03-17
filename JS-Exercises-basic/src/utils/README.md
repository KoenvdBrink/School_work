# De UTILS directory

De `utils` directory dient ondersteunende functies te bevatten. Het liefst functies die je ook in andere projecten zou kunnen gebruiken.
Vergelijk baar dus met de gereedschap (hamer, tang, schroevendraaier) in een gereedschapskist die je ook voor verschillende klussen zou kunnen gebruiken.

In verband met het `separation of concerns` is het volgens de referentie architectuur die we in de frontend leerlijn zullen hanteren niet de bedoeling dat functies in deze directory interactie hebben met de Document Object Model (DOM). Dit maakt dat DOM gerelateerde statements zoals bijvoorbeeld `document.querySelector` niet gebruikt zouden mogen worden. Maar ook dat er geen relatie met de backend (via bijvoorbeeld een `fetch` statement) of andere databronnen zoals bijvoorbeeld de `localstorage` in deze functies gelegd wordt.
Zie https://en.wikipedia.org/wiki/Separation_of_concerns voor meer informatie over `separation of concerns` in het domain van de ICT.

Functies in deze directory dienen zogenaamde **pure functions** te zijn.
**Pure Functions** zijn functies die geen neveneffecten vertonen (dus geen data aanpassen) en elke keer hetzelfde resultaat bij dezelfde parameter waarden teruggeven.

Voor meer info over pure functions zie: https://en.wikipedia.org/wiki/Pure_function.
