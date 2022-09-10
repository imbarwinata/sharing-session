const types = [
  'atoms',
  'molecules',
  'organisms',
  'templates',
  'pages',
]

module.exports = {
  description: 'Add a new component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Please select the component type',
      choices: types,
    },
    {
      type: 'input',
      name: 'name',
      message: 'Please input component name',
      validate: (data) => data ? true : 'The name is required!',
    },
    {
      type: 'input',
      name: 'variant',
      message: 'Please input component variant',
      validate: (data) => data ? true : 'The variant is required!',
      default: 'index',
    },
    {
      type: 'confirm',
      name: 'wantUnitTest',
      message: 'Do you want to add unit test?',
      default: true
    },
    {
      type: 'confirm',
      name: 'wantStyles',
      description: 'Do you want to add css module?',
      default: true
    },
  ],
  actions: (data) => {
    console.log('[info] add a new component', data)
    return []
  }
}