import { useEffect, useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, editServiceField } from "../actions/actionCreators";

function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const filterItems = useSelector((state) => state.serviceFilter);
    const [data, setData] = useState(items);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(items);
        console.log(filterItems);
        const res = filterItems.filter ? filterItems.items : items;
        setData(res);
    }, [filterItems, items]);

    const handleRemove = id => {
        dispatch(removeService(id));
    };

    const handleEdit = item => {
        dispatch(editServiceField(item.id, item.name, item.price));
    };

    return (
        <ul className="list-group">
            {data.map((o) => (
                <li key={o.id} className="list-group-item">
                    {o.name} {o.price}
                    <div>
                        <button className="btn btn-secondary" onClick={() => handleEdit(o)}>
                            <img src="./img/edit.png" alt="edit"></img>
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleRemove(o.id)}
                        >
                            X
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ServiceList;
