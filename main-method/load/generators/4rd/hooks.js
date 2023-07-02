module.exports = {
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Please input hooks name',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please input hooks description',
    },
  ],
  actions: (data) => {
    console.log('[info] Create a new hooks', data)

    return []
  }
}
