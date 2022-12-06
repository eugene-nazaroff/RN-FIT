import DemoRepository from '../repository/DemoRepository';

export class DemoUseCase {
    constructor(private readonly _repository: DemoRepository) {}

    execute() {
        return this._repository.testMethod();
    }
}
