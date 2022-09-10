const { workspace } = require('../config')

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
    path: `${workspace}/hooks/${name.split(' ').join('-')}.tsx`,
    templateFile: `./hooks/index.tsx.hbs`,
    skipIfExists: true,
  }]
}
