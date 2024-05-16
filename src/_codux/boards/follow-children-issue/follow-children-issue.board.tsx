import { createBoard } from '@wixc3/react-board';
import { FollowChildrenIssue } from '../../../components/follow-children-issue/follow-children-issue';

export default createBoard({
    name: 'FollowChildrenIssue',
    Board: () => <FollowChildrenIssue />,
    isSnippet: true,
});