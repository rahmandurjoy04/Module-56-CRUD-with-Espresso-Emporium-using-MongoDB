import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const UpdateCoffee = () => {

    const {_id,name,supplier,taste,category,details,price,photo} = useLoaderData();

    const handleUpdateCoffee = (e)=>{
           e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                const updatedCoffee = Object.fromEntries(formData.entries())
        
                // Update coffee data to the DB
                fetch(`http://localhost:3000/coffees/${_id}`,{
                    method:'PUT',
                    headers:{
                        'content-type':"application/json"
                    },
                    body:JSON.stringify(updatedCoffee)
                })
                .then(res=>res.json())
                .then(data =>{
                    if(data.modifiedCount){
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Coffee Updated Successfully!",
                          showConfirmButton: false,
                          timer: 1500
                        });
                    }
                })
    }
    return (
        <div>
            <div className='p-24 bg-[#F4F3F0]'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-4xl text-[#374151]">Update Coffee</h1>
            </div>
            {/* Form */}
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <fieldset className="fieldset p-2">
                        <label className='label text-[#1B1A1ACC]'>Name</label>
                        <input type="text" defaultValue={name} name='name' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset  p-2">
                        <label className='label text-[#1B1A1ACC]'>Price</label>
                        <input type="text" defaultValue={price} name='price' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Price" />
                    </fieldset>
                    <fieldset className="fieldset p-2">
                        <label className='label text-[#1B1A1ACC]'>Supplier</label>
                        <input type="text" defaultValue={supplier} name='supplier' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Supplier" />
                    </fieldset>
                    <fieldset className="fieldset  p-2">
                        <label className='label text-[#1B1A1ACC]'>Taste</label>
                        <input type="text" defaultValue={taste} name='taste' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Taste" />
                    </fieldset>
                    <fieldset className="fieldset p-2">
                        <label className='label text-[#1B1A1ACC]'>Category</label>
                        <input type="text" defaultValue={category} name='category' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Category" />
                    </fieldset>
                    
                    
                    <fieldset className="fieldset p-2">
                        <label className='label text-[#1B1A1ACC]'>Details</label>
                        <input type="text" defaultValue={details} name='details' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Details" />
                    </fieldset>

                </div>
                <fieldset className="fieldset mt-4 p-2">
                        <label className='label text-[#1B1A1ACC]'>Photo</label>
                        <input type="text" defaultValue={photo} name='photo' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Photo URL" />
                    </fieldset>
                    <div className='mx-1 mt-3'>
                    <input type='submit' className='bg-[#D2B48C] btn border-[#331A15] text-[#331A15] text-xl w-full p-1 mx-auto rounded' value='Update Coffee'></input>
                    </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateCoffee;