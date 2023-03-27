import useCase from "./src/generator/generators/domain/useCase.js";
import viewModel from "./src/generator/generators/domain/useCase.js";
import view from "./src/generator/generators/presentation/view.js";
import stack from "./src/generator/generators/presentation/navigation/stack.js";
import feature from "./src/generator/generators/feature.js"

export default plop => {
    plop.setGenerator('view', view)
    plop.setGenerator('viewModel', viewModel)
    plop.setGenerator('useCase', useCase )
    plop.setGenerator('navigator', stack )
    plop.setGenerator("feature", feature)
};

