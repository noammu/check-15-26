import classNames from 'classnames';
import styles from './follow-children-issue.module.scss';
import { CompWithChild } from '../comp-with-child/comp-with-child';

export interface FollowChildrenIssueProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FollowChildrenIssue = ({ className }: FollowChildrenIssueProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <CompWithChild>
                <h1>childrennn</h1>
            </CompWithChild>
        </div>
    );
};
