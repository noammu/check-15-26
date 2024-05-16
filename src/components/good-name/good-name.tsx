import classNames from 'classnames';
import styles from './good-name.module.scss';

export interface BadNameProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BadName = ({ className }: BadNameProps) => {
    return <div className={classNames(styles.root, className)}>BadName</div>;
};
