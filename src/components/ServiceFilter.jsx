import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterService } from "../actions/actionCreators";

function ServiceFilter() {
    const items = useSelector(state => state.serviceFilter);
    const list = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const handleFilter = evt => {
        const { value } = evt.target;
        dispatch(filterService(value, list));
    };

    return (
        <div className="filter_form">
            <input
                className="form-control"
                onChange={handleFilter}
                value={items.filter}
                placeholder="Фильтрация"
            />
        </div>
    );
}

export default ServiceFilter;