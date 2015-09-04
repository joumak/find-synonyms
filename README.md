# find-synonyms

> Find synonyms for words in Node

Built off @cgiffard's [synonym](https://github.com/cgiffard/Synonyms) package,
this module is just a wrapper around WordNet to easily provide synonyms.

## Usage

Install with `npm`:

```bash
$ npm install find-synonyms
```

Use in your project:

```js
var synonyms = require('find-synonyms');

// Finds up to n synonyms of word
// If n = 0, returns all found synonyms
synonyms(word, n, function (syns) {
  // syns has length at most n and has synonyms of word
});
```
