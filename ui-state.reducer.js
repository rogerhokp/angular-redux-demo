import Immutable from 'immutable';

const INIT_STATE = Immutable.fromJS({
    username: 'Roger'
});

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case 'SET_USERNAME':
            return state.set('username', action.payload.userName);
        default:
            return state
    }

}
