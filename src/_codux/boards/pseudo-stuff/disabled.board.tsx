import { createBoard } from '@wixc3/react-board';
import { PseudoStuff } from '../../../components/pseudo-stuff/pseudo-stuff';

export default createBoard({
    name: 'disabled',
    Board: () => <PseudoStuff disabled={true} />,
    isSnippet: true,
});