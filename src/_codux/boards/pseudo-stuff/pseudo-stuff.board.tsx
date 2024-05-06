import { createBoard } from '@wixc3/react-board';
import { PseudoStuff } from '../../../components/pseudo-stuff/pseudo-stuff';

export default createBoard({
    name: 'active',
    Board: () => <PseudoStuff disabled={false} />,
    isSnippet: true,
});
