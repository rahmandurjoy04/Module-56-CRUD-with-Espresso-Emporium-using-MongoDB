import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);

        // Send coffee data to the DB
        fetch('http://localhost:3000/coffees',{
            method:'POST',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                console.log('After adding coffee to db',data);
                Swal.fire({
                    title: "Coffee added Successfully!",
                    icon: "success",
                    draggable: true
                  });

            }
        })
    }
    return (
        <div className='p-24 bg-[#F4F3F0]'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-4xl text-[#374151]">Add New Coffee</h1>
                <p className='text-sm text-[#1B1A1AB3]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            {/* Form */}
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <fieldset className="fieldset p-2">
                        <label className='label text-[#1B1A1ACC]'>Name</label>
                        <input type="text" name='name' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset  p-2">
                        <label className='label text-[#1B1A1ACC]'>Price</label>
                        <input type="text" name='price' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Price" />
                    </fieldset>
                    <fieldset className="fieldset p-2">
                        <label className='label text-[#1B1A1ACC]'>Supplier</label>
                        <input type="text" name='supplier' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Supplier" />
                    </fieldset>
                    <fieldset className="fieldset  p-2">
                        <label className='label text-[#1B1A1ACC]'>Taste</label>
                        <input type="text" name='taste' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Taste" />
                    </fieldset>
                    <fieldset className="fieldset p-2">
                        <label className='label text-[#1B1A1ACC]'>Category</label>
                        <input type="text" name='category' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Category" />
                    </fieldset>
                    
                    
                    <fieldset className="fieldset p-2">
                        <label className='label text-[#1B1A1ACC]'>Details</label>
                        <input type="text" name='details' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Coffee Details" />
                    </fieldset>

                </div>
                <fieldset className="fieldset mt-4 p-2">
                        <label className='label text-[#1B1A1ACC]'>Photo</label>
                        <input type="text" name='photo' className="input text-[#1B1A1A99] bg-white w-full" placeholder="Enter Photo URL" />
                    </fieldset>
                    <div className='mx-1 mt-3'>
                    <input type='submit' className='bg-[#D2B48C] btn border-[#331A15] text-[#331A15] text-xl w-full p-1 mx-auto rounded' value='Add Coffee'></input>
                    </div>
            </form>
        </div>
    );
};

export default AddCoffee;