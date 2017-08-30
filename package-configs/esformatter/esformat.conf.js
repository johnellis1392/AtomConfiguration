{
  "plugins": ["esformatter-jsx"],

    // this is the section this plugin will use to store the settings for the jsx formatting
    "jsx": {
      // whether to recursively format jsx expressions with esformatter
      // set this to false if you don't want JSXExpressions to be formatted recursively, like when using problematic plugins
      "formatJSXExpressions": true,
      // By default ObjectExpression and ArrayExpression in JSXExpressions are inlined,
      // if false, the Expression might expand several lines
      "JSXExpressionsSingleLine": true,
      // by default is true if set to false it works the same as esformatter-jsx-ignore
      "formatJSX": false,
      // keep the node attributes on the same line as the open tag. Default is true.
      // Setting this to false will put each one of the attributes on a single line
      "attrsOnSameLineAsTag": true,
      // how many attributes should the node have before having to put each
      // attribute in a new line. Default 1
      "maxAttrsOnTag": 5,
      // if the attributes are going to be put each one on its own line, then keep the first
      // on the same line as the open tag
      "firstAttributeOnSameLine": true,
      // default to one space. Make it empty if you don't like spaces between JSXExpressionContainers
      "spaceInJSXExpressionContainers": " ",
      // align the attributes with the first attribute (if the first attribute was kept on the same line as on the open tag)
      "alignWithFirstAttribute": true,
      "htmlOptions": { // same as the ones passed to js-beautifier.html
        "brace_style": "collapse",
        "indent_char": "\t",
        "indent_size": 1,
        "max_preserve_newlines": 2,
        "preserve_newlines": true,
        "wrap_line_length": 500
      }
    },
    "indent": {
      "value": "\t",
      "FunctionExpression": 1,
      "ArrayExpression": 1,
      "ObjectExpression": 1
    },
    "whiteSpace": {
      "before": {
        "FunctionExpressionOpeningBrace": 1,
        "FunctionExpressionClosingBrace": 1
      },
      "after": {
        "FunctionExpressionOpeningBrace": 1,
        "FunctionExpressionClosingBrace": -1
      }
    },
    "lineBreak": {
      "before": {
        "ArrayExpressionClosing": 1
      },
      "after": {
        "ArrayExpressionOpening": 1,
        "ArrayExpressionComma": 1
      }
    },
    "collapseObjects": {
      "ObjectExpression": {
        "maxLineLength": 80,
        "maxKeys": 3,
        "maxDepth": 2,
        "forbidden": ["FunctionExpression"]
      },
      "ArrayExpression": {
        "maxLineLength": 80,
        "maxKeys": 3,
        "maxDepth": 2,
        "forbidden": ["FunctionExpression"]
      }
    }
}
