const { workspace } = require('../config')
const { toSlug } = require('../../lib/string')

const types = [
  'atoms',
  'molecules',
  'organisms',
  'templates',
  'pages',
]

module.exports = {
  description: 'Add a new component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Please select the component type',
      choices: types,
    },
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
    {
      type: 'confirm',
      name: 'wantStorybook',
      message: 'Do you want to add storybook file?',
      default: true
    },
  ],
  actions: (data) => {
    const name = toSlug(data.name)
    const variant = toSlug(data.variant)

    let pathComponent = `${workspace}/components/${data.type}/${name}/index.tsx`
    let pathComponentTest = `${workspace}/components/${data.type}/${name}/index.spec.tsx`
    let pathComponentStyles = `${workspace}/components/${data.type}/${name}/index.module.css`
    let pathComponentStorybook = `${workspace}/components/${data.type}/${name}/index.stories.tsx`

    if (data.variant !== 'index') {
      pathComponent = `${workspace}/components/${data.type}/${name}/${variant}/index.tsx`
      pathComponentTest = `${workspace}/components/${data.type}/${name}/${variant}/index.spec.tsx`
      pathComponentStyles = `${workspace}/components/${data.type}/${name}/${variant}/index.module.css`
      pathComponentStorybook = `${workspace}/components/${data.type}/${name}/${variant}/index.stories.tsx`
    }

    const actions = [{
      type: 'add',
      path: pathComponent,
      templateFile: './components/index.tsx.hbs',
      skipIfExists: true,
    }]

    if (data.wantUnitTest) {
      actions.push({
        type: 'add',
        path: pathComponentTest,
        templateFile: './components/index.spec.tsx.hbs',
        skipIfExists: true,
      })
    }

    if (data.wantStyles) {
      actions.push({
        type: 'add',
        path: pathComponentStyles,
        templateFile: './components/index.css.hbs',
        skipIfExists: true,
      })
    }

    if (data.wantStorybook) {
      actions.push({
        type: 'add',
        path: pathComponentStorybook,
        templateFile: './components/index.stories.tsx.hbs',
        skipIfExists: true,
        data: {
          isDefault: data.variant === 'index',
        },
      })
    }

    return actions
  }
}