import classNames from 'classnames';
import styles from './recursive.module.scss';

export interface RecursiveProps {
    className?: string;
    deepness: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Recursive = ({ className, deepness }: RecursiveProps) => {
    if (deepness <= 0) return <h4>We are at the end of the recursion!</h4>;
    return (
        <div className={classNames(styles.root, className)}>
            <h4>We are {deepness} deep in the recursion</h4>
            <Recursive deepness={deepness - 1} />
        </div>
    );
};
