const { pageWorkspace } = require('../config')
const { toSlug } = require('../../lib/string')

module.exports = {
  description: 'Add a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Please input component name',
      validate: (data) => data ? true : 'The name is required!',
    },
    {
      type: 'input',
      name: 'variant',
      message: 'Please input component variant',
      validate: (data) => data ? true : 'The variant is required!',
      default: 'index',
    },
    {
      type: 'input',
      name: 'pageTitle',
      message: 'Please enter page title',
      validate: (data) => data ? true : 'The page title is required!',
    },
    {
      type: 'input',
      name: 'pageDescription',
      message: 'Please enter page description',
      validate: (data) => data ? true : 'The page description is required!',
    },
    {
      type: 'confirm',
      name: 'wantUnitTest',
      message: 'Do you want to add unit test?',
      default: true
    },
    {
      type: 'confirm',
      name: 'wantStyles',
      message: 'Do you want to add css module?',
      default: true
    },
  ],
  actions: (data) => {
    const name = toSlug(data.name)
    const variant = toSlug(data.variant)

    let pathComponent = `${pageWorkspace}/${name}/${variant}.tsx`
    let pathComponentTest = `${pageWorkspace}/${name}/${variant}.spec.tsx`
    let pathComponentStyles = `${pageWorkspace}/${name}/${variant}.module.css`

    if (data.variant !== 'index') {
      pathComponent = `${pageWorkspace}/${name}/${variant}/index.tsx`
      pathComponentTest = `${pageWorkspace}/${name}/${variant}/index.spec.tsx`
      pathComponentStyles = `${pageWorkspace}/${name}/${variant}/index.module.css`
    }

    const actions = [{
      type: 'add',
      path: pathComponent,
      templateFile: './pages/index.tsx.hbs',
      skipIfExists: true,
    }]

    if (data.wantUnitTest) {
      actions.push.apply(actions, [{
        type: 'add',
        path: pathComponentTest,
        templateFile: './pages/index.spec.tsx.hbs',
        skipIfExists: true,
      }])
    }

    if (data.wantStyles) {
      actions.push.apply(actions, [{
        type: 'add',
        path: pathComponentStyles,
        templateFile: './pages/index.css.hbs',
        skipIfExists: true,
      }])
    }

    return actions
  }
}