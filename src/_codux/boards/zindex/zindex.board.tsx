import { createBoard } from '@wixc3/react-board';
import { Zindex } from '../../../components/zindex/zindex';

export default createBoard({
    name: 'Zindex',
    Board: () => <Zindex />,
    isSnippet: true,
});