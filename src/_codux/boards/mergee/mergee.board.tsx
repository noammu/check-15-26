import { createBoard } from '@wixc3/react-board';
import { Mergee } from '../../../components/mergee/mergee';

export default createBoard({
    name: 'Mergee',
    Board: () => <Mergee />,
    isSnippet: true,
});