const { workspace } = require('../config')
const { toSlug } = require('../../lib/string')

module.exports = {
  description: 'Add a new hooks',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the custom hooks name?',
      validate: (data) => data ? true : 'The name is required!',
    },
  ],
  actions: ({ name }) => [{
    type: 'add',
    path: `${workspace}/hooks/${toSlug(name)}.tsx`,
    templateFile: `./hooks/index.tsx.hbs`,
    skipIfExists: true,
  }]
}
