export default {
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
  actions: (data) => [
    {
      type: 'addMany',
      templateFiles: './lib/*.hbs',
      destination: `../packages/${data.name}`,
      verbose: true,
      skipIfExists: true,
      force: false,
      abortOnFail: true,
      data: {
        initialCode: '// write code here',
        initialCodeTest: 'expect(1).toEqual(1);',
      },
      transform: (content, _answers) => content,
      skip: ({ name, description }) => {
        if (!name || !description) return 'Name and description are required!'
      },
    },
    {
      type: 'modify',
      path: `../packages/index.js`,
      pattern: `/* PLOP_INJECT_EXPORTS */`,
      templateFile: `./general/index.js.hbs`,
    },
  ]
}
