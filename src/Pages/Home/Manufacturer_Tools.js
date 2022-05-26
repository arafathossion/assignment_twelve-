import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../fierbase.init';

const Manufacturer_Tools = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    // const [tools, setTools] = useState();
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setTools(data))
    // }, [])

    const { isLoading, error, data: tools, refetch } = useQuery('repoData', () =>
        fetch('https://serene-hamlet-44786.herokuapp.com/tools').then(res =>
            res.json()
        )
    )

    // console.log(tools)

    const handleClick = (_id) => {
        navigate(`/singleTool/${_id}`);
        // console.log(_id)
    }
    // if(user) {
    //     refetch()
    // }
    const reLoadToolsPain = tools?.slice(-6);
    // console.log(tools, "6" ,reLoadToolsPain)
    return (
        <div className=' py-24'>

            <div className='text-center pb-20'>
                <h1 className='text-3xl font-extrabold capitalize'>Millons business trust us</h1>
                <h4 className='text-3xl font-medium uppercase py-4 text-teal-500'>our some products</h4>
            </div>



            <div className="grid md:grid-cols-3 gap-8 px-16">
                {
                    reLoadToolsPain?.map(tool => <div className="card bg-main my-custom-style rounded-xl" key={tool._id}>
                        <figure><img src={tool.picture} className="w-full h-72 p-4 rounded-3xl" alt="Shoes" /></figure>
                        <div className="card-body p-4">
                            <div className="flex items-center justify-between gap-4 text-center">
                                <h6 className=' text-md font-medium text-center my-custom-style p-3  md:py-2'> {tool.itemName}</h6>
                                <h6 className=' text-md font-medium text-center my-custom-style p-3  md:py-2'>Price : {tool.balance}</h6>
                            </div>

                            <div className="flex items-center justify-between gap-4 py-4">
                                <h6 className='md:basis-1/2 text-md font-medium text-center my-custom-style p-3  md:py-2'>Min Order Quantity {tool.minOrderQuantity}</h6>
                                <h6 className='md:basis-1/2 text-md font-medium text-center my-custom-style py-2'>Available Quantity {tool.quantity}</h6>
                            </div>
                            <p className='text-center'>{tool.about.length > 80 ? tool.about.slice(0, 80) : tool.about}</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary my-custom-style my-3" onClick={() => handleClick(tool._id)}>place order</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Manufacturer_Tools;