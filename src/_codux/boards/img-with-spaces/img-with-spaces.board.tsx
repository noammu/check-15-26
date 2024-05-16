import { createBoard } from '@wixc3/react-board';
import { ImgWithSpaces } from '../../../components/img-with-spaces/img-with-spaces';

export default createBoard({
    name: 'ImgWithSpaces',
    Board: () => <ImgWithSpaces />,
    isSnippet: true,
});