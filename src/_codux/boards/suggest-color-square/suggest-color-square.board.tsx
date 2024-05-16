import { createBoard } from '@wixc3/react-board';
import { SuggestColorSquare } from '../../../components/suggest-color-square/suggest-color-square';

export default createBoard({
    name: 'SuggestColorSquare',
    Board: () => <SuggestColorSquare />,
    isSnippet: true,
});