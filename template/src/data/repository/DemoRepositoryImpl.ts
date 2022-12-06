import DemoEntity from '../../domain/entities/DemoEntity';
import DemoRepository from '../../domain/repository/DemoRepository';

class DemoRepositoryImpl implements DemoRepository {
    testMethod(): DemoEntity {
        return new DemoEntity('-1');
    }
}

export default new DemoRepositoryImpl();
