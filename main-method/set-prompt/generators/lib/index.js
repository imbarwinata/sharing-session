import { toCamelCase } from '../utils.js';

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
  actions: (data) => {
    return [{
      type: 'add',
      path: `../packages/${toCamelCase(data.name)}/index.js`,
      templateFile: './lib/index.js.hbs',
    }]
  }
}
