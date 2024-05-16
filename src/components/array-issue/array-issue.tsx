import classNames from 'classnames';
import styles from './array-issue.module.scss';

export interface ArrayIssueProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ArrayIssue = ({ className }: ArrayIssueProps) => {
    const stringArray = ['have ', 'to ', 'use ', 'map'];
    const intArray = [1, 2, 3];
    const elementsArray = [<div>div</div>, <p>pp</p>];
    return (
        <div className={classNames(styles.root, className)}>
            <div>{stringArray}</div>
            <div>{intArray}</div>
        </div>
    );
};
