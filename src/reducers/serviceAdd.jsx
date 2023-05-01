import {
    CHANGE_SERVICE_FIELD,
    ADD_SERVICE,
    EDIT_SERVICE_FIELD,
    CLEAR_SERVICE_FIELD,
    EDIT_SERVICE,
    REMOVE_SERVICE,
} from "../actions/actionTypes";

const initialState = {
    name: "",
    price: "",
};

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD: {
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        }
        case EDIT_SERVICE_FIELD: {
            return action.payload;
        }
        case REMOVE_SERVICE:
        case EDIT_SERVICE:
        case CLEAR_SERVICE_FIELD:
        case ADD_SERVICE: {
            return initialState;
        }
        default:
            return state;
    }
}