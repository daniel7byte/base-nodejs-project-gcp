// @ts-nocheck
const { generateTemplateFiles } = require('generate-template-files')

generateTemplateFiles([
  // Example of generating multiple files
  {
    option: 'Create a route, controller, service and repository',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates'
    },
    stringReplacers: ['__model__'],
    output: {
      path: './src',
      pathAndFileNameDefaultCase: '(SnakeCase)'
    },
    onComplete: (results) => {
      console.log('results', results)
    }
  }
  // Example of generating a single file
  // {
  //   option: 'Create a route, controller, service and repository',
  //   defaultCase: '(pascalCase)',
  //   entry: {
  //     folderPath: './tools/templates'
  //   },
  //   stringReplacers: ['__model__'],
  //   output: {
  //     path: './src',
  //     pathAndFileNameDefaultCase: '(SnakeCase)'
  //   },
  //   onComplete: (results) => {
  //     console.log('results', results)
  //   }
  // }
])
