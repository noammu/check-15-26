import classNames from 'classnames';
import styles from './comp-with-child.module.scss';

export interface CompWithChildProps {
    className?: string;
    children?: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CompWithChild = ({ className, children }: CompWithChildProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
