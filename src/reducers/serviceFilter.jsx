import {
    FILTER_SERVICE
} from "../actions/actionTypes";

const initialState = {
    items: [],
    filter: "",
};

export default function serviceFilterReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_SERVICE: {
            const { filter, list } = action.payload;
            return {
                ...state,
                items: list.filter((item) =>
                    item.name.toUpperCase().includes(filter.toUpperCase())
                ),
                filter: filter,
            };
        }
        default:
            return state;
    }
}
