import classNames from 'classnames';
import styles from './suggest-color-square.module.scss';

export interface SuggestColorSquareProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SuggestColorSquare = ({ className }: SuggestColorSquareProps) => {
    return <div className={classNames(styles.root, className)}>SuggestColorSquare</div>;
};
