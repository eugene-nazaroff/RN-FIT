import DemoEntity from '../entities/DemoEntity';

interface DemoRepository {
    testMethod: () => DemoEntity;
}

export default DemoRepository;
