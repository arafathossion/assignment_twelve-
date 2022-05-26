import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const Swal = require('sweetalert2')
    const imgbb = '6ce04091a7d1d65abae484ceea98277f'
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = newProduct => {
        const img = newProduct.picture[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgbb}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imgResult => {
                if (imgResult.success) {
                    const image = imgResult.data.url;
                    const addNewProduct = {
                        itemName: newProduct.itemName,
                        about: newProduct.about,
                        balance: newProduct.balance,
                        quantity: newProduct.quantity,
                        minOrderQuantity: newProduct.minOrderQuantity,
                        picture: image,
                    }
                    fetch('https://serene-hamlet-44786.herokuapp.com/tools', {
                        method: 'POST', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(addNewProduct),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data?.acknowledged === true) {
                                Swal.fire(
                                    'Good job!',
                                    'You clicked the button!',
                                    'success'
                                )
                            }
                            console.log('Success:', data);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                    console.log(addNewProduct)
                }
            })

        reset();
    };
    return (
        <div className="grid grid-cols-1 mx-4 my-10 justify-items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 w-full md:w-1/2 justify-items-center">
                <input {...register("itemName")}
                    className="input bg-main my-custom-style w-11/12 sm:w-2/3 md:w-11/12 lg:w-4/5 my-3 md:my-4 text-lg font-medium text-teal-500 capitalize placeholder:text-lg placeholder:font-medium placeholder:text-teal-500 placeholder:capitalize"
                    placeholder='Enter a product Awesome name'
                />
                <input {...register("picture")} type="file" accept="image/*"
                    className="input bg-main my-custom-style w-11/12 sm:w-2/3 md:w-11/12 lg:w-4/5 my-3 md:my-4 text-lg font-medium text-teal-500 capitalize placeholder:text-lg placeholder:font-medium placeholder:text-teal-500 placeholder:capitalize"
                    placeholder='product image link'
                />
                <input {...register("about")}
                    className="input bg-main my-custom-style w-11/12 sm:w-2/3 md:w-11/12 lg:w-4/5 my-3 md:my-4 text-lg font-medium text-teal-500 capitalize placeholder:text-lg placeholder:font-medium placeholder:text-teal-500 placeholder:capitalize"
                    placeholder='Product Details'
                />
                <input {...register("minOrderQuantity")}
                    className="input bg-main my-custom-style w-11/12 sm:w-2/3 md:w-11/12 lg:w-4/5 my-3 md:my-4 text-lg font-medium text-teal-500 capitalize placeholder:text-lg placeholder:font-medium placeholder:text-teal-500 placeholder:capitalize"
                    placeholder='min order quantity'
                />
                <input {...register("quantity")}
                    className="input bg-main my-custom-style w-11/12 sm:w-2/3 md:w-11/12 lg:w-4/5 my-3 md:my-4 text-lg font-medium text-teal-500 capitalize placeholder:text-lg placeholder:font-medium placeholder:text-teal-500 placeholder:capitalize"
                    placeholder='product quantity'
                />
                <input {...register("balance")}
                    className="input bg-main my-custom-style w-11/12 sm:w-2/3 md:w-11/12 lg:w-4/5 my-3 md:my-4 text-lg font-medium text-teal-500 capitalize placeholder:text-lg placeholder:font-medium placeholder:text-teal-500 placeholder:capitalize"
                    placeholder='product price'
                />
                <input type="submit" value="Submit" className='btn my-custom-style bg-main text-teal-500 border-0 my-5' />
            </form>
        </div>
    );
};

export default AddProduct;