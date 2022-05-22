import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Manufacturer_Tools = () => {
    const navigate = useNavigate();
    const [tools, setTools] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    const handleClick = (itemName) => {
             navigate(`/singleTool/${itemName}`);
        console.log(itemName)
    }
    return (
        <div className=' py-24'>
            <div className="grid md:grid-cols-3 gap-8 px-16">
                {
                    tools?.map(tool => <div class="card bg-main my-custom-style rounded-xl" key={tool.itemName}>
                        <figure><img src={tool.picture} className="w-full h-72 p-4 rounded-3xl" alt="Shoes" /></figure>
                        <div class="card-body p-4">
                            <div className="flex items-center justify-between gap-4 text-center">
                                <h6 className=' text-md font-medium text-center my-custom-style p-3  md:py-2'> {tool.itemName}</h6>
                                <h6 className=' text-md font-medium text-center my-custom-style p-3  md:py-2'>Price : {tool.balance}</h6>
                            </div>

                            <div className="flex items-center justify-between gap-4 py-4">
                                <h6 className='md:basis-1/2 text-md font-medium text-center my-custom-style p-3  md:py-2'>Min Order Quantity {tool.minOrderQuantity}</h6>
                                <h6 className='md:basis-1/2 text-md font-medium text-center my-custom-style py-2'>Available Quantity {tool.quantity}</h6>
                            </div>
                            <p className='text-center'>{tool.about.length > 80 ? tool.about.slice(0, 80) : tool.about}</p>
                            <div class="card-actions justify-center">
                                <button class="btn btn-primary my-custom-style my-3" onClick={() => handleClick(tool.itemName)}>place order</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Manufacturer_Tools;