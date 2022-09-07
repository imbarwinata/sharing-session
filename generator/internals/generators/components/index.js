module.exports = {
  description: 'Add a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the component name?',
      validate: (data) => data ? true : false,
    },
  ],
  actions: (data) => {
    console.log('[info] add a new component', data)
    return []
  }
}