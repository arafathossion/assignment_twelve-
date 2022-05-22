import React from 'react';
import { useParams } from 'react-router-dom';

const Manufacturer_Tool = () => {
    const {_id} = useParams();
    console.log(_id)
    return (
        <div>
            <h1>Manufacturer Tool</h1>
        </div>
    );
};

export default Manufacturer_Tool;