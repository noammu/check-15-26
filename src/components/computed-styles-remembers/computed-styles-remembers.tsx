import classNames from 'classnames';
import styles from './computed-styles-remembers.module.scss';

export interface ComputedStylesRemembersProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ComputedStylesRemembers = ({ className }: ComputedStylesRemembersProps) => {
    return <div className={classNames(styles.root, className)}>Computed Styles remembers one back</div>;
};
