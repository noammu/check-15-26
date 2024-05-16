import { createBoard } from '@wixc3/react-board';
import { BadName } from '../../../components/good-name/good-name';

export default createBoard({
    name: 'BadName',
    Board: () => <BadName />,
    isSnippet: true,
});