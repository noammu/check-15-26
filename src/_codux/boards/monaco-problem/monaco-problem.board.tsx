import { createBoard } from '@wixc3/react-board';
import { MonacoProblem } from '../../../components/monaco-problem/monaco-problem';

export default createBoard({
    name: 'MonacoProblem',
    Board: () => <MonacoProblem />,
    isSnippet: true,
});