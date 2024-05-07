import classNames from 'classnames';
import styles from './monaco-problem.module.scss';

export interface MonacoProblemProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MonacoProblem = ({ className }: MonacoProblemProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>this isn't ok</h1>
        </div>
    );
};
