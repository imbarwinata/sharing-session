const { exec } = require('child_process')
const { types } = require('./config')

module.exports = {
  description: 'Generate code',
  prompts: [
    {
      type: 'list',
      name: 'type',
      choices: types.map((row) => row.description),
      message: 'Choose the commit type:',
    },
    {
      type: 'input',
      name: 'scope',
      message: 'Please fill in the scope (optional):',
    },
    {
      type: 'input',
      name: 'subject',
      message: 'Please fill in the subject (required):',
      validate: (data) => data ? true : 'The Subject is required!',
    },
    {
      type: 'input',
      name: 'body',
      message: 'Please fill in the body (optional):',
    },
    {
      type: 'input',
      name: 'footer',
      message: 'Please fill in the footer (optional):',
    },
  ],
  actions: ({ type, scope, subject, body, footer }) => {
    const findType = types.find((row) => row.description === type)
    const { name } = findType || {}

    let message = `${name}${scope && `(${scope})`}: ${subject}`

    if (body) {
      message = `${message}\n\n${body}`
    }

    if (footer) {
      message = `${message}\n\n${footer}`
    }

    exec(`git commit -m "${message}"`, (err) => {
      if (err) {
        console.log('Failed generator commit', err)
        throw err
      }
      console.log(`Commit message: ${message}`)
    })

    return []
  },
}
