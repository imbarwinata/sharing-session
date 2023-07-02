module.exports = {
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Please input service name',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please input service description',
    },
  ],
  actions: (data) => {
    console.log('[info] Create a new service', data)

    return []
  }
}
