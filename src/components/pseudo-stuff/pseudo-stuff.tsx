import classNames from 'classnames';
import styles from './pseudo-stuff.module.scss';

export interface PseudoStuffProps {
    className?: string;
    disabled?: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PseudoStuff = ({ className, disabled }: PseudoStuffProps) => {
    return <button className={styles.pdpd} disabled={disabled} >Pseudo stuff</button>
};
