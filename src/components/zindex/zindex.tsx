import classNames from 'classnames';
import styles from './zindex.module.scss';
import ProfilePicJpg from '../../assets/profile    pic.jpg';

export interface ZindexProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Zindex = ({ className }: ZindexProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles.ppppp}>Noammu</p>
            <img src={ProfilePicJpg} alt="" height="200" className={styles.espeon} />
        </div>
    );
};
