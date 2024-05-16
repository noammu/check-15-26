import { createBoard } from '@wixc3/react-board';
import { ComputedStylesRemembers } from '../../../components/computed-styles-remembers/computed-styles-remembers';

export default createBoard({
    name: 'ComputedStylesRemembers',
    Board: () => <ComputedStylesRemembers />,
    isSnippet: true,
});