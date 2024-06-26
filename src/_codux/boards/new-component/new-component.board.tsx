import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../components/my-place/new-component/new-component';

export default createBoard({
    name: 'NewComponent',
    Board: () => <NewComponent />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 3024,
    },
});
