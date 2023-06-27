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
    return [
      {
        type: 'add',
        path: `../packages/${data.name}/index.js`,
        templateFile: './lib/index.js.hbs',
      },
      {
        type: 'log',
        message: `[${new Date()}] Lib ${data.name} created successfully!`,
      },
    ]
  }
}
