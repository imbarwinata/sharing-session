const types = [
  {
    name: 'feat',
    description: 'feat (new feature for the user, not a new feature for build script)',
  },
  {
    name: 'fix',
    description: 'fix (bug fix for the user, not a fix to a build script)',
  },
  {
    name: 'revert',
    description: 'revert (reverting changes)',
  },
  {
    name: 'docs',
    description: 'docs (changes to the documentation)',
  },
  {
    name: 'style',
    description: 'style (formatting, missing semi colons, etc; no production code change)',
  },
  {
    name: 'refactor',
    description: 'refactor (refactoring production code, eg. renaming a variable)',
  },
  {
    name: 'perf',
    description: 'perf (for performance enhancements)',
  },
  {
    name: 'test',
    description: 'test (adding missing tests, refactoring tests; no production code change)',
  },
  {
    name: 'chore',
    description: 'chore (updating grunt tasks etc; no production code change)',
  },
];

module.exports.types = types;
