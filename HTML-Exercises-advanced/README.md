# HTML Advanced

<img src="./assets/HTML5_Badge.svg" alt="JS Logo" width="200px" height="200px">
<img src="./assets/CSS3_logo.svg" alt="JS Logo" width="200px" height="200px">

## Introductie
Bij deze oefeningen wordt er gekeken naar formulieren en de accessibility van de webpagina.
De accessibility gaat getest worden met een screenreader ([ChromeVox](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=nl)). Hiermee kunnen we kijken hoe blinde mensen de gemaakte webpagina's ervaren.

:bulb: Vergeet niet met `npm install` in de root van je repository de vereiste packages te installeren.

:bulb: Run het `npm test:cypress` commando om Cypress op te starten

De leerstof voor de opdrachten staat hieronder beschreven, de daadwerkelijke opdrachten staan beschreven in de `assignment-x.html` bestanden in de `pages` folder.

## Installatie "Text to Speech for Chrome"

Om de "Text to Speech" functionaliteit toe te voegen aan Google Chrome is een screenreader nodig.
Tijdens de lessen gaan we de [ChromeVox](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=nl) Chrome extensie gebruiken.

Deze screenreader extensie is [hier](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=nl) te installeren.
Klik bij deze pagina op "Toevoegen aan Chrome".

![example-add-chromevox.png](/assets/example-add-chromevox.png)

ChromeVox kan vervelend zijn als je het niet nodig hebt, aangezien deze "Text to Speech" functionaliteit niet makkelijk uit te schakelen is.
Toch moeten we deze gebruiken, aangezien andere screenreader extensies zoals 'NaturalReader' en 'Pericles' geen rekening houden met WAI-ARIA guidelines.

ChromeVox kan in- en uitgeschakeld worden op Windows en Linux apparaten met de volgende toetscombinatie `Shift + alt + A + A`, op Mac apparaten kan de `Cmd + Ctrl + A + A` toetscombinatie gebruikt worden.

Bij het gebruik van ChromeVox worden belangrijke elementen op de pagina hardop gelezen en gehighlight.
Ook worden elementen op de pagina voorgelezen en gehighlight bij het aanklikken.
Zie de afbeelding hieronder.

![example-use-chromevox.png](/assets/example-use-chromevox.png)

## Opdrachten & Leerstof

De HTML bestanden welke voor deze opdrachten aangepast moeten worden zijn te vinden in de map `public/pages/`.

<details>
  <summary>
    Assignment 1. WAI-ARIA</a>
  </summary>
  <ul>
    <li>Accessibility <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">[lees]</a></li>
    <ul>
      <li>WAI-ARIA <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics">[lees]</a></li>
        <ul>
          <li>Roles</li>
          <li>Properties</li>
          <li>States</li>
        </ul>
      <li>ARIA Tab Role <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role">[lees]</a></li>
    </ul>
    <li>HTML &lt;label> element <a href="https://developer.mozilla.org/nl/docs/Web/HTML/Element/label">[lees]</a></li>
  </ul>
</details>

<details>
  <summary>
    Assignment 2. Accessible tables and multimedia</a>
  </summary>
  <ul>
    <li>HTML table accessibility <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced">[lees]</a></li>
    <ul>
      <li>&lt;caption></li>
      <li>scope</li>
      <li>headers</li>
    </ul>
    <li>Accessible multimedia <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia">[lees]</a></li>
    <ul>
      <li>Simple images</li>
      <li>Accessible audio and video controls</li>
    </ul>
</ul>
</details>

<details>
  <summary>
    Assignment 3. Forms, text input, labels and buttons</a>
  </summary>
  <ul>
    <li>Your first HTML form <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form">[lees]</a></li>
    <li>How to structure an HTML form <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form">[lees]</a></li>
    <ul>    
      <li>The &lt;fieldset> and &lt;legend> elements</li>
      <li>The &lt;label> element</li>
    </ul>
    <li>The native form widgets <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets">[lees]</a></li>
    <ul>
      <li>Common attributes</li>
      <li>Text input fields (single-line, multi-line, text)</li>
      <ul>
        <li>The &lt;input> (Form Input) element <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">[lees]</a></li>
        <li>The &lt;textarea> element <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea">[lees]</a></li>
      </ul>
      <li> Actual buttons <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">[lees]</a></li>
      <ul>
        <li>Submit</li>
        <li>Reset</li>
        <li>Anonymous</li>
      </ul>
    <li>HTML &lt;form> element <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form">[lees]</a></li>
  </ul>
</details>

<details>
  <summary>
    Assignment 4. Checkboxes, Radio buttons and Select-boxes
  </summary>
  <ul>
  <li>The native form widgets <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets">[lees]</a></li>
    <ul>
      <li>Checkable items: checkboxes and radio buttons</li>
      <ul>
        <li>checkbox <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">[lees]</a></li>
        <li>radio buttons <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio">[lees]</a></li>
      </ul>
      <li>Select boxes <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select">[lees]</a></li>
  </ul>
</details>

<details>
  <summary>
    Assignment 5. Other input types
  </summary>
  <ul>
    <li>The native form widgets <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets">[lees]</a></li>
    <ul>
      <li>File picker</li>
      <li>datepicker <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date">[lees]</a></li>
      <li>colorpicker <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color">[lees]</a></li>
      <li>number <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number">[lees]</a></li>
      <li>password <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password">[lees]</a></li>
      <li>hidden <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden">[lees]</a></li>
    </ul>
  </ul>
</details>

<details>
  <summary>
    Assignment 6. Form properties, actions and encoding
  </summary>
  <ul>
    <li>Sending form data <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data">[lees]</a></li>
    <li>HTML <form> element</li>
    <ul>
      <li>action attribute <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-action">[lees]</a></li>
      <li>autocomplete attribute <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-autocomplete">[lees]</a></li>
      <li>enctype attribute <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-enctype">[lees]</a></li>
      <li>method attribute <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method">[lees]</a></li>
    </ul>
  </ul>
</details>

<details>
  <summary>
    Assignment 7. HTML5 form validation
  </summary>
  <ul>
    <li>Form data validation <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation">[lees]</a></li>
    <ul>
    <li>Form-element validation</li>
      <ul>
        <li>required</li>
        <li>pattern</li>
        <li>minlength</li>
        <li>maxlength</li>
        <li>min</li>
        <li>max</li>
        <li>input type (e.g. email/color)</li>
      </ul>
    </ul>
  </ul>
</details>

