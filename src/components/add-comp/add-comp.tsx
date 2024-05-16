import classNames from 'classnames';
import styles from './add-comp.module.scss';
import { CompWithChild } from '../comp-with-child/comp-with-child';
import { BadName } from '../good-name/good-name';

export interface AddCompProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AddComp = ({ className }: AddCompProps) => {
    
    return (
        <div className={classNames(styles.root, className)}>
            <BadName />
            <div>
                <div>
                    <CompWithChild>
                        <h1>Heading 1</h1>
                        <p>childddddd</p>
                    </CompWithChild>
                </div>
            </div>
            AddComp
            <div />
        </div>
    );
};
