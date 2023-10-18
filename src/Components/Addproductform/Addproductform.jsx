import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { EagleTechSpotContext } from '../../Context/Context';

const Addproductform = () => {
    const {host}= useContext(EagleTechSpotContext)
    const addproducts = document.querySelector('#addproducts')
    const addproduct =e=>{
        e.preventDefault()
        const form = e.target;
        const product = form.product.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const image = form.image.value;
        const price = form.price.value;
        const Rating = form.Rating.value;
        const description = form.description.value;
        const formdata = {
            product,
            brand,
            type,
            image,
            price,
            Rating,
            description
        }
        if (product && brand && type && image && price && Rating && description) {
            if (Rating <=5) {
                // console.log(formdata)
                fetch(`${host}/addpost`, {
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formdata)
                  })
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log(data)
                        if (data.acknowledged) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                              })
                              addproducts.reset()
                        }
                    })
                    .catch((error) => console.error('Error:', error));
                  
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Rating should not be greater than 5',
                  })
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields.',
              })
        }
        
    }
    return (
        <div className='bg-[url("/ipbg.jpg")]'>
            <form id='addproducts' onSubmit={addproduct} className='container mx-auto text-center py-10'>
                <input type="text" placeholder="product Name" name='product' className="input input-bordered input-primary w-full max-w-xs m-1" />
                <select name='brand' className="select select-primary w-full max-w-xs m-1">
                    <option value="" disabled selected>Choose brand</option>
                    <option value="apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Sony">Sony</option>
                    <option value="Google">Google</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="Asus">Asus</option>
                </select>
                <br />
                <select name='type' className="select select-primary w-full max-w-xs m-1">
                    <option value="" disabled selected>Choose product type</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                    <option value="headphone">Headphone</option>
                    <option value="charger">Charger</option>
                    <option value="tablet">Tablet</option>
                    <option value="tablet">Watch</option>
                </select>

                <input type="text" name='image' placeholder="image url" className="input input-bordered input-primary w-full max-w-xs m-1" /><br />
                <input type="flot" name='price' placeholder="Price" className="input input-bordered input-primary w-full max-w-xs m-1" />
                <input type="flot" name='Rating' placeholder="Rating 1 to 5" className="input input-bordered input-primary w-full max-w-xs m-1" /><br />
                <textarea name='description' className="textarea textarea-primary w-full max-w-[650px] m-1" placeholder="description"></textarea><br />
                <button className="btn btn-outline btn-success">add products</button>
            </form>
        </div>
    )
}

export default Addproductform