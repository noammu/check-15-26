import classNames from 'classnames';
import styles from './propy.module.scss';
import ProfilePicJpg from '../../assets/profile    pic.jpg';

export interface PropyProps {
    className?: string;
    propy: number;
    stringy: string;
    arrrStr: string[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Propy = ({ className, propy, stringy, arrrStr }: PropyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                {propy}
                <span>text</span>
            </div>
            <div>
                <div>
                    {stringy}
                    <div>
                        {arrrStr.map((s) => (
                            <p key={s}>{s}</p>
                        ))}
                    </div>
                </div>
                <img src={ProfilePicJpg} className={styles.imgg} />
            </div>
            <p>This is a paragraph.</p>
        </div>
    );
};
