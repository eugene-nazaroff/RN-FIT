module.exports = {
    description: 'Generate useCase.hbs',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Enter useCase name',
        },
        {
            type: 'input',
            name: 'feature',
            message: 'Enter feature name',
        },
    ],
    actions: [
        {
            type: 'add',
            path: 'src/domain/useCases/{{feature}}/{{name}}UseCase.ts',
            templateFile: 'src/generator/templates/domain/useCase.hbs',
        },
    ],
};
