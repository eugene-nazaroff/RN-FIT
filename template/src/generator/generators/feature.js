module.exports = {
    description: 'Generate feature',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Enter feature name',
        },
    ],
    actions: [
        {
            type: 'add',
            path: 'src/features/{{name}}/presentation/{{name}}.tsx',
            templateFile: 'src/generator/templates/presentation/view/view.hbs',
        },
        {
            type: 'add',
            path: 'src/features/{{name}}/domain/',
        },
        {
            type: 'add',
            path: 'src/features/{{name}}/data/',
        },
    ],
};
