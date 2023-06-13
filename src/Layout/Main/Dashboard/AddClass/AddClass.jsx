import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting = import.meta.env.VITE_Image_Upload_token;
const AddClass = () => {
    

    const [axiosSecure] = useAxiosSecure();
    const {
        register,
        handleSubmit,
        
        formState: { errors },
    } = useForm();

    const image_hosting_url =`https://api.imgbb.com/1/upload?key=${image_hosting}`
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image',data.image[0]);
        fetch(image_hosting_url,{
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageRes => {
            if(imageRes.success){
                const img_url = imageRes.data.display_url;
                console.log(img_url);
                const {name,teacher_name,price,description} = data;
                const newClass = {name,price:parseFloat(price),teacher_name,description,image:img_url};
                console.log(newClass);
                axiosSecure.post('/classes',newClass)
                .then(data=>{
                    console.log('after axios',data.data);
                    if(data.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class add success!',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          
                    }
                })

            }
        })
    };
    return (
        <div>
            <h1 className="text-3xl text-center my-10">Add a class</h1>
            <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Teacher Name*
                            </span>
                        </label>
                        <input
                            type="text"
                            {...register("teacher_name")}
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Course Name*
                            </span>
                        </label>
                        <select
                            {...register("name", { required: true })}
                            className="select select-bordered"
                        >
                            <option disabled selected>
                                Pick one
                            </option>
                            <option>Football coaching </option>
                            <option>Cricket coaching</option>
                            <option>Badinton coaching</option>
                            <option>Chess coaching</option>
                            <option>Golf coaching</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">
                                price*
                            </span>
                        </label>
                        <input
                        {...register("price", { required: true })}
                            type="number"
                            placeholder="$"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Course details*
                            </span>
                        </label>
                        <textarea
                        {...register("description", { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Details"
                        ></textarea>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Add a picture*</span>
                        </label>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="text-center">
                        <input
                            type="submit"
                            value="Add a Class"
                            className="btn btn-secondary my-4"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;
