import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    EDIT_SERVICE_FIELD,
    EDIT_SERVICE,
    CLEAR_SERVICE_FIELD,
    FILTER_SERVICE,
} from "./actionTypes";

export function addService(name, price) {
    return { type: ADD_SERVICE, payload: { name, price } };
}

export function removeService(id) {
    return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
    return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function editServiceField(id, name, price) {
    return { type: EDIT_SERVICE_FIELD, payload: { id, name, price } };
}

export function editService(id, name, price) {
    return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function clearServiceField() {
    return { type: CLEAR_SERVICE_FIELD };
}
export function filterService(filter, list) {
    return { type: FILTER_SERVICE, payload: { filter, list } };
}
