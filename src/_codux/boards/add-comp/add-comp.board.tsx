import { createBoard } from '@wixc3/react-board';
import { AddComp } from '../../../components/add-comp/add-comp';

export default createBoard({
    name: 'AddComp',
    Board: () => <AddComp />,
    isSnippet: true,
});