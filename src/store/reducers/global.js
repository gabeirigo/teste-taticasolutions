import { SELECT_INSTANCE, UNSELECT_INSTANCE } from "../actions/global";

const initialState = {
    instanceSelected: {}
}

function global(state = initialState, action) {
    switch (action.type) {
        case SELECT_INSTANCE:
            return { ...state, instanceSelected: action.payload }
        case UNSELECT_INSTANCE:
            return { ...state, instanceSelected: {} }
        default:
            return state;
    }
}

export default global;