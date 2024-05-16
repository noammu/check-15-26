import classNames from 'classnames';
import styles from './img-with-spaces.module.scss';
import ProfilePicJpg from '../../assets/profile   pic.jpg';

export interface ImgWithSpacesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ImgWithSpaces = ({ className }: ImgWithSpacesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={ProfilePicJpg} alt="" height="300" />
        </div>
    );
};
