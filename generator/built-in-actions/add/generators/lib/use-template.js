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
      skipIfExists: true,
      template: `/**
* @function {{ name }}
* @description {{ description }}
* 
* @param {???} ??? - ???
* @returns {???} ???
*/
function {{ name }}() {
  // write code here
}`,
    }]
  }
}
