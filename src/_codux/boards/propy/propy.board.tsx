import { createBoard } from '@wixc3/react-board';
import { Propy } from '../../../components/propy/propy';

export default createBoard({
    name: 'Propy',
    Board: () => <Propy stringy="לחט" propy={55} arrrStr={['noam', 'dor', 'dandan', 'shem']} />,
    isSnippet: true,
});
