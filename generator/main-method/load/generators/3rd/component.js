module.exports = {
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Please input component name',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please input component description',
    },
  ],
  actions: (data) => {
    console.log('[info] Create a new component', data)

    return []
  }
}
