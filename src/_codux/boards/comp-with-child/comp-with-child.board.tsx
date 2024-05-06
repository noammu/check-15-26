import { createBoard } from '@wixc3/react-board';
import { CompWithChild } from '../../../components/comp-with-child/comp-with-child';

export default createBoard({
    name: 'CompWithChild',
    Board: () => <CompWithChild />,
    isSnippet: true,
});