module.exports = {
    description: 'Generate stack navigator',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Enter navigator name',
        },
    ],
    actions: [
        {
            type: 'add',
            path: 'src/presentation/navigation//{{name}}/{{name}}Stack.tsx',
            templateFile:
                'src/generator/templates/presentation/navigation/stackNavigator/stackNavigator.hbs',
        },
        {
            type: 'add',
            path: 'src/presentation/navigation//{{name}}/{{name}}Stack.types.tsx',
            templateFile:
                'src/generator/templates/presentation/navigation/stackNavigator/stackNavigator.types.hbs',
        },
    ],
};
