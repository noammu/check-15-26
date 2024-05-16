import { createBoard } from '@wixc3/react-board';
import { WhyHoverIsThere } from '../../../components/why-hover-is-there/why-hover-is-there';

export default createBoard({
    name: 'WhyHoverIsThere',
    Board: () => <WhyHoverIsThere />,
    isSnippet: true,
});