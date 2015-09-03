'use strict';

var natural = require('natural'),
    wordnet = new natural.WordNet();

/**
 * Runs [cb] on [n] synonyms of [word]. If [n] is 0, uses all synonyms.
 */
module.exports = function (word, n, cb) {
  wordnet.lookup(word, function(results) {

    var synonyms = results
      // Get synonyms
      .reduce(function(acc, current) {
        return acc.concat(current.synonyms)
      }, [])
      // Unique
      .reduce(function(acc, current) {
        if (acc.indexOf(current) >= 0) return acc;
        return acc.concat([current]);
      }, []);

    if (n > 0 && n < synonyms.length) synonyms.splice(n, synonyms.length - n);

    cb(synonyms);
  });
}
