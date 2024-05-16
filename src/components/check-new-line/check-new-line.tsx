import classNames from 'classnames';
import styles from './check-new-line.module.scss';

export interface CheckNewLineProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CheckNewLine = ({ className }: CheckNewLineProps) => {
    return <div className={classNames(styles.root, className)}>CheckNewLine</div>;
};
