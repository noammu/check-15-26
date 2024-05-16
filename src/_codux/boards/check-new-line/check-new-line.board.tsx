import { createBoard } from '@wixc3/react-board';
import { CheckNewLine } from '../../../components/check-new-line/check-new-line';

export default createBoard({
    name: 'CheckNewLine',
    Board: () => <CheckNewLine />,
    isSnippet: true,
});