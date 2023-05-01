import { nanoid } from 'nanoid';
import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    EDIT_SERVICE,
} from "../actions/actionTypes";

const initialState = [
    { id: nanoid(), name: "Замена ремня ГРМ", price: 30000 },
    { id: nanoid(), name: "Замена стартера", price: 8000 },
];

export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE: {
            const { name, price } = action.payload;
            return [...state, { id: nanoid(), name, price: Number(price) }];
        }
        case REMOVE_SERVICE: {
            const { id } = action.payload;
            return state.filter(service => service.id !== id);
        }
        case EDIT_SERVICE: {
            const editedItem = { ...action.payload };
            editedItem.price = Number(editedItem.price);
            state = state.map(item => item.id === editedItem.id ? editedItem : item);
            return state;
        }

        default:
            return state;
    }
}
