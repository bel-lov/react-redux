import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    changeServiceField,
    addService,
    editService,
    clearServiceField,
} from "../actions/actionCreators";

function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { name, value } = evt.target;
        dispatch(changeServiceField(name, value));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (item.name === "") return;

        if (item.id) {
            dispatch(editService(item.id, item.name, item.price));
        } else {
            dispatch(addService(item.name, item.price));
        }
    };

    const handleClear = evt => {
        evt.preventDefault();
        dispatch(clearServiceField());
    };

    return (
        <div className="add_form">
            <input
                className="form-control"
                name="name"
                onChange={handleChange}
                value={item.name}
                placeholder="Наименование"
            />
            <input
                className="form-control"
                name="price"
                type="number"
                onChange={handleChange}
                value={item.price}
                placeholder="Стоимость"
            />
            <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
            {item.id && <button className="btn btn-cancel" onClick={handleClear}>Cancel</button>}
        </div>
    );
}

export default ServiceAdd;