import classNames from 'classnames';
import styles from './abuse-style-panel.module.scss';

export interface AbuseStylePanelProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AbuseStylePanel = ({ className }: AbuseStylePanelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <label className={styles.label}>Label</label>
            <input className={styles.iniputput} />
            AbuseStylePanel
            <div
                className={classNames(
                    styles.asdf,
                    styles.asdfsdf,
                    styles.sdfsdfsdfsd,
                    styles.cvbcv,
                    styles.zxcz,
                    styles.asdf,
                    styles.hryt,
                    styles.oloo,
                    styles.uilu,
                    styles.sdfqwe3,
                    styles.qwew,
                    styles.nbnm,
                    styles.lkujlkjo,
                    styles.xcvxcv,
                    styles.asda,
                    styles.zxczcx,
                    styles.kjk,
                    styles.lk,
                    styles.llllkhhgf,
                    styles.fswqweqweq,
                    styles.etryretjf,
                    styles.fgnbl,
                    styles.ccvbx,
                    styles.xcdscv,
                    styles.nmkgh,
                    styles.nbnmnmn,
                    styles.nmnmhjmgfd,
                    styles.dfhgyhdf,
                )}
            >
                <span style={{ backgroundColor: 'green' }}>text</span>
            </div>
            <span className={styles.stu}></span>
        </div>
    );
};
