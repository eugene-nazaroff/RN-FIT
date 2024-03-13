import { Container, ContainerModule } from 'inversify';
import { postsContainerModule } from '../../modules/posts/DI/container';


export const appContainer = new Container();
appContainer.load(postsContainerModule)








