import classNames from 'classnames';
import styles from './why-hover-is-there.module.scss';

export interface WhyHoverIsThereProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WhyHoverIsThere = ({ className }: WhyHoverIsThereProps) => {
    return <div className={classNames(styles.root, className)}>WhyHoverIsThere</div>;
};
