import { addMessageAction } from '../../redux/dialogs_reducer';
import Dialogs from './dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withauthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessageText) => {
            dispatch(addMessageAction(newMessageText));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs); 