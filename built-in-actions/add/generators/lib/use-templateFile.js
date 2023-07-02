module.exports = {
  description: 'Add a new lib',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Please input lib name',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please input lib description',
    },
  ],
  actions: (data) => {
    return [{
      type: 'add',
      path: `../packages/${data.name}/index.js`,
      templateFile: './lib/index.js.hbs',
      skipIfExists: true,
      force: false,
      abortOnFail: true,
      data: {
        initialCode: '// write code here',
      },
      transform: (content, _answers) => content,
      skip: ({ name, description }) => {
        if (!name || !description) return 'Name and description are required!'
      },
    }]
  }
}
