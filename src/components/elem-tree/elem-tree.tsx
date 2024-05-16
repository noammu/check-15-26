import classNames from 'classnames';
import styles from './elem-tree.module.scss';
import { AddComp } from '../add-comp/add-comp';
import CoduxSvg from '../../assets/codux.svg';

export interface ElemTreeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ElemTree = ({ className }: ElemTreeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={CoduxSvg} alt="" className={styles.imgmgmg} />
            <nav className={styles.navnav}>
                <a href="/home" className={styles.link}>
                    Home
                </a>{' '}
                |{' '}
                <a href="/projects" className={styles.link}>
                    Projects
                </a>{' '}
                |{' '}
                <a href="/about" className={styles.link}>
                    About
                </a>{' '}
                |{' '}
                <a href="/contact" className={styles.link}>
                    Contact Us
                </a>
            </nav>
            <div>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.imggg}
                />
            </div>
            <div>
                <h4>Heading 4</h4>
            </div>
            <div>
                <h1>I'm an h1!</h1>
            </div>
            <div>
                <audio
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
                />
                <AddComp className={styles.compstyle} />
                <p>This is a paragraph.</p>
            </div>
            <div>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
            <div>
                <form>
                    <label>First name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Last name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};
