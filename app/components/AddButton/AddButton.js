import React, { PureComponent} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import style from './style.css';

class AddButton extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const {addButtonHandler} = this.props;
        return (
            <div>
                <FloatingActionButton className='addButton' onClick={addButtonHandler}>
                    <ContentAdd/>
                </FloatingActionButton>
            </div>
        )
    }
}

export default AddButton;