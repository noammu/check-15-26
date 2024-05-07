import classNames from 'classnames';
import styles from './no-board.module.scss';
import { Card, Image, Icon } from 'semantic-ui-react';

export interface NoBoardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const NoBoard = ({ className }: NoBoardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Card>
                <Image
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    wrapped
                    ui={false}
                />
                <Card.Content>
                    <Card.Header>Noammmmm</Card.Header>
                    <Card.Meta>
                        <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Noammmm is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name="user" />
                        69 Friends
                        lol
                    </a>
                </Card.Content>
            </Card>
        </div>
    );
};
