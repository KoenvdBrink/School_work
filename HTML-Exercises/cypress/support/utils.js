async function getHtmlText(url) {
    const result = await fetch(`../../../${url}`);
    return (await result.text())
        // Strip away all the comments
        .replace(/(?=<!--)([\s\S]*?)-->/g, '')
        .trim();
}

function isValidHtml(html) {
  // Check the doctype location
  if (!html.toLowerCase().startsWith('<!doctype html>')) {
    return {
      valid: false,
      message: 'the doctype should be on the first line',
    };
  }
  // --

  // Check the html tags
  const htmlRegExp = /<html[^<>]*>/i;
  if (!htmlRegExp.test(html)) {
    return {
      valid: false,
      message: 'there should be a valid html open tag',
    };
  }
  if (html.toLowerCase().indexOf('</html>') < 0) {
    return {
      valid: false,
      message: 'the html tag should be closed',
    };
  }
  if (!html.toLowerCase().endsWith('</html>')) {
    return {
      valid: false,
      message: 'the html tag should be closed on the last line',
    };
  }
  // --

  // Check top level html tags
  if (html.toLowerCase().indexOf('<head>') < 0) {
    return {
      valid: false,
      message: 'should contain a head open tag',
    };
  }
  if (html.toLowerCase().indexOf('</head>') < 0) {
    return {
      valid: false,
      message: 'should contain a head close tag',
    };
  }
  const bodyRegExp = /<body[^<>]*>/i;
  if (!bodyRegExp.test(html)) {
    return {
      valid: false,
      message: 'should contain a body open tag',
    };
  }
  if (html.toLowerCase().indexOf('</body>') < 0) {
    return {
      valid: false,
      message: 'should contain a body close tag',
    };
  }
  if (
    html.toLowerCase().indexOf('<head>') > html.toLowerCase().indexOf('</head>')
  ) {
    return {
      valid: false,
      message: 'should have a correct head open tag and head close tag order',
    };
  }
  if (
    html.toLowerCase().indexOf('<body') > html.toLowerCase().indexOf('</body>')
  ) {
    return {
      valid: false,
      message: 'should have a correct body open tag and body close tag order',
    };
  }
  if (
    html.toLowerCase().indexOf('<head>') > html.toLowerCase().indexOf('<body')
  ) {
    return {
      valid: false,
      message: 'should have a correct head and body tag order',
    };
  }
  // --

  // Check the head tag
  const headResult = html.match(/<html[^<>]*>([\W\w]+)<body/i);
  if (headResult[1].indexOf('<head>') < 0) {
    return {
      valid: false,
      message:
        'should contain a head open tag between the html open tag and body open tag',
    };
  }
  if (headResult[1].indexOf('</head>') < 0) {
    return {
      valid: false,
      message:
        'should contain a head close tag between the html open tag and body open tag',
    };
  }
  if (!headResult[1].trim().startsWith('<head>')) {
    return {
      valid: false,
      message: 'should start with a head open tag',
    };
  }
  if (!headResult[1].trim().endsWith('</head>')) {
    return {
      valid: false,
      message: 'should end with a head close tag',
    };
  }
  // --

  // Check the body tag
  const bodyResult = html.match(/<\/head>([\W\w]+)<\/html>/i);
  if (bodyResult[1].indexOf('<body>') < 0) {
    return {
      valid: false,
      message:
        'should contain a body open tag between the head close tag and html close tag',
    };
  }
  if (bodyResult[1].indexOf('</body>') < 0) {
    return {
      valid: false,
      message:
        'should contain a body close tag between the head close tag and html close tag',
    };
  }
  if (!bodyResult[1].trim().startsWith('<body')) {
    return {
      valid: false,
      message: 'should start with a body open tag',
    };
  }
  if (!bodyResult[1].trim().endsWith('</body>')) {
    return {
      valid: false,
      message: 'should end with a body close tag',
    };
  }
  // --

  // Check for other top level html tags
  const topLevelResult = html
    .replace(/<head>[\W\w]*<\/head>/g, '')
    .replace(/<body[\W\w]*<\/body>/g, '')
    .match(/<html[^<>]*>([\W\w]*)<\/html>/i);
  if (topLevelResult[1].trim() !== '') {
    return {
      valid: false,
      message: 'there should be no other top level tags in the html tag',
    };
  }
  // --

  // Check head contents
  const headContents = html.match(/<head>([\W\w]*)<\/head>/i)[1];
  const allowedTags = [
    'title',
    'base',
    'link',
    'style',
    'meta',
    'script',
    'noscript',
    'template',
  ];
  const headContentsTags = headContents.matchAll(/<([^\s>/]+)/g);

  // can't use Object.keys on headContentsTags resulting in not being able to find a solution for the eslint error of the for loop.
  // eslint-disable-next-line no-restricted-syntax
  for (const tag of headContentsTags) {
    if (!allowedTags.includes(tag[1].toLowerCase())) {
      return {
        valid: false,
        message: `the ${tag[1]} tag is not allowed in the head`,
      };
    }
  };

  if (
    !headContents.trim().startsWith('<') ||
    !headContents.trim().endsWith('>') ||
    !/></g.test(headContents.replace(/\s/g, ''))
  ) {
    return {
      valid: false,
      message:
        'the head may not contain content that will be displayed on the web page',
    };
  }
  // --

  return { valid: true };
}

// Checks if the immediate content and children is phrasing content only: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
function containsOnlyPhrasingContent(html, nodeName) {
    const allowed = ['A', 'ABBR', 'AREA', 'AUDIO', 'B', 'BDO', 'BR', 'BUTTON', 'CANVAS', 'CITE', 'CODE', 'COMMAND', 'DATA', 'DATALIST', 'DEL', 'DFN', 'EM', 'EMBED', 'I', 'IFRAME', 'IMG', 'INPUT', 'INS', 'KBD', 'KEYGEN', 'LABEL', 'LINK', 'MAP', 'MARK', 'MATH', 'META', 'METER', 'NOSCRIPT', 'OBJECT', 'OUTPUT', 'PICTURE', 'PROGRESS', 'Q', 'RUBY', 'SAMP', 'SCRIPT', 'SELECT', 'SMALL', 'SPAN', 'STRONG', 'SUB', 'SUP', 'SVG', 'TEXTAREA', 'TIME', 'VAR', 'VIDEO', 'WBR'];
    // Regex takes into consideration that the element might have attributes (and/or just whitespaces) when the tag is opened.
    // The value of attributes might even contain the closing tag as plain text which should be ignored. It can also span over multiple lines.
    // The contents of the element might contain child elements, invalid child elements and even nested elements.
    // The tests that were used to create this Regex with replace and substring combination:
    //   <p>test</p>
    //   <p>
    //     test
    //   </p>
    //   <p >test</p>
    //   <p
    //   >
    //     test
    //   </p>
    //   <p2>test</p2>
    //   <p title="">test</p>
    //   <p>test < test2</p>
    //   <p title="test </p> test2">test</p>
    //   <p title="test </p> test2">test < test2</p>
    //   <p title="test </p> test2" data-title="test </p> test2">test < test2</p>
    //   <p title="test </p> test2" data-title="test </p> test2"
    //   >test < test2</p>
    //   <p><span>test</span></p>
    //   <p><p><span>test</span></p></p>
    const partials = html.match(new RegExp(`<${nodeName}(\\s*>|\\s[\\w\\W]*?"\\s*>)[\\w\\W]+?</${nodeName}>`, 'g'));
    // eslint-disable-next-line no-restricted-syntax
    for (const partial of partials) {
        const el = document.createElement('div');
        el.innerHTML = partial
            // Strip all the attributes and whitespaces
            .replace(/<p(\s*>|\s[\w\W]*?"\s*>)/, '<p>')
            // Get the contents of the partial
            .substring(partial.indexOf('>') + 1, partial.lastIndexOf('<'));
        // eslint-disable-next-line no-restricted-syntax
        for (const element of el.children) {
            if (!allowed.includes(element.nodeName)) {
                return {valid: false, element};
            }
        }
    }
    return {valid: true};
}

export {
    containsOnlyPhrasingContent,
    getHtmlText,
    isValidHtml
};
