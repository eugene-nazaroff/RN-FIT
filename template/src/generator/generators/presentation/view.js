module.exports = {
    description: 'Generate view',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Enter view name',
        },
        {
            type: 'input',
            name: 'feature',
            message: 'Enter feature',
        },
    ],
    actions: [
        {
            type: 'add',
            path: 'src/presentation/views/{{feature}}/{{name}}/{{name}}View.tsx',
            templateFile: 'src/generator/templates/presentation/view/view.hbs',
        },
        {
            type: 'add',
            path: 'src/presentation/views/{{feature}}/{{name}}/index.ts',
            templateFile: 'src/generator/templates/presentation/view/view.index.hbs',
        },
        {
            type: 'add',
            path: 'src/presentation/viewModels/{{feature}}/{{name}}ViewModel.ts',
            templateFile: 'src/generator/templates/presentation/viewModel/viewModel.hbs',
        },
    ],
};
