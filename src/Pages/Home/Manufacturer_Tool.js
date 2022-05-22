import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import auth from '../../fierbase.init';

const Manufacturer_Tool = () => {
    const [user, loading] = useAuthState(auth);
    const {_id} = useParams();
    console.log(_id);
    const url = `http://localhost:5000/tools/${_id}`
    const { isLoading, error, data:tool } = useQuery('singleTool', () =>
    fetch(url).then(res =>
      res.json()
    )
    )
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(user)
    return (
        <div>
            <h1>Manufacturer Tool {tool?.itemName}</h1>
            <h1>Min Order Quantity : {tool?.minOrderQuantity}</h1>
            <img src={tool?.picture} alt="Tool" />
        </div>
    );
};

export default Manufacturer_Tool;