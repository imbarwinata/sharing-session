module.exports = {
  // NOTE: not working if we use `plop.load` to load this file
  description: 'Example 2 load',
  prompts: [{
    type: 'confirm',
    name: 'wantToTest',
    message: 'Do you want to test this load?',
    default: true
  }],
  actions: (data) => {
    console.log('[info] load example', data)

    return []
  }
}
