const choicesExpand = [
  {
    key: 'A',
    value: 'Aaa',
  },
  {
    key: 'b',
    value: 'Bbb',
  },
  {
    key: 'c',
    value: 'Ccc',
  },
]

module.exports = {
  description: 'Example all prompts',
  prompts: [
    {
      type: 'input',
      name: 'input',
      message: 'Please input anything',
      validate: (data) => data ? true : 'The input is required!',
    },
    {
      type: 'number',
      name: 'number',
      message: 'Please input a number',
      validate: (data) => data ? true : 'The input is required!',
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Do you want to try this confirm?',
      default: true,
    },
    {
      type: 'list',
      name: 'list',
      message: 'Please select one',
      choices: choicesExpand.map((choice) => choice.value),
    },
    {
      type: 'rawlist',
      name: 'rawlist',
      message: 'Please select one',
      choices: choicesExpand.map((choice) => choice.value),
      loop: false, // enable looping when user press up or down arrow
      filter: answer => `${answer}-rawlist`,
    },
    {
      type: 'expand',
      name: 'expand',
      message: 'Please select one',
      choices: choicesExpand,
    },
    {
      name: 'checkbox',
      type: 'checkbox',
      message: 'Please select',
      choices: choicesExpand.map((choice) => choice.value),
      default: ['Bbb'],
    },
    {
      name: 'password',
      type: 'password',
      message: 'Please input password',
      validate: (data) => data ? true : 'The password is required!',
    },
    {
      name: 'editor',
      type: 'editor',
      message: 'Please input anything',
      waitUserInput: true,
    },
  ],
  actions: (data) => {
    console.log('[Info] Result:', data);
    return [];
  }
}
