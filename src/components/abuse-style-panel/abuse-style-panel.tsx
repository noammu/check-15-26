import classNames from 'classnames';
import styles from './abuse-style-panel.module.scss';
import { useState } from 'react';
import { WhyHoverIsThere } from '../why-hover-is-there/why-hover-is-there';
import EspeonPng from '../../assets/espeon.png';

export interface AbuseStylePanelProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AbuseStylePanel = ({ className }: AbuseStylePanelProps) => {
    const [bla, setBla] = useState(7);

    return (
        <div className={classNames(styles.root, className)}>
            <button onClick={() => setBla((prev) => prev + 1)}>increment</button>
            <button onClick={() => setBla((prev) => prev - 1)}>decrement</button>
            <h1 className={styles.special}> {bla} </h1>
            <WhyHoverIsThere />
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
            <img src={EspeonPng} alt="" height="55" />
        </div>
    );
};
