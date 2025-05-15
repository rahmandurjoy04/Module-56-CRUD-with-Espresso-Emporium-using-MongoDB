import React from 'react';
import { FaPen, FaRegEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    const handleDelete = (_id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                // Start Deleting the coffee
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('After Delete', data);
                        if (data.deletedCount) {

                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            // Remove coffee from state
                            const remainingCoffees = coffees.filter(cof=>cof._id !== _id);
                            setCoffees(remainingCoffees)
                        }
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your Coffee file is safe !",
                    icon: "error"
                });
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm border-2 p-5">
                <figure>
                    <img
                        src={coffee.photo}
                        alt="Movie" />
                </figure>
                <div className=" flex justify-around w-full items-center">
                    <div>
                        <h2 className="card-title">{coffee.name}</h2>
                        <p>Supplier: {coffee.supplier}</p>
                        <p>Price: {coffee.price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical gap-2">
                            <Link to={`/coffee/${coffee._id}`}>
                                <button className="btn border-white rounded-xl border-2 bg-[#D2B48C] join-item"><FaRegEye></FaRegEye></button>
                            </Link>
                            <Link to={`/updateCoffee/${coffee._id}`}>
                                <button className="btn border-white rounded-xl border-2 join-item"><FaPen></FaPen></button>
                            </Link>
                            <button onClick={() => handleDelete(coffee._id)} className="btn border-white rounded-xl border-2 join-item bg-[#EA4744]"><MdDelete></MdDelete></button>
                        </div>                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;