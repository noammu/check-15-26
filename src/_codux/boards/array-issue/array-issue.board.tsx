import { createBoard } from '@wixc3/react-board';
import { ArrayIssue } from '../../../components/array-issue/array-issue';

export default createBoard({
    name: 'ArrayIssue',
    Board: () => <ArrayIssue />,
    isSnippet: true,
});