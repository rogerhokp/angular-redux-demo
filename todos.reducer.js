import Immutable from 'immutable';

const INIT_STATE = Immutable.fromJS([]);

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return state.push(action.payload.text);
        case 'REMOVE_ALL_TODO':
            return state.clear();
        default:
            return state
    }

}
