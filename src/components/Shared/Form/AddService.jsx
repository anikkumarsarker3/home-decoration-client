import { useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UploadImage from "../UploadImage";

const AddService = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null); // for image preview
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const axiosSecure = useAxiosSecure();


    const handleAddService = async (data) => {
        setLoading(true);
        try {
            const photoURL = await UploadImage(data.image[0]);
            const serviceData = {
                serviceName: data.serviceName,
                cost: parseFloat(data.cost),
                unit: data.unit,
                image: photoURL,
                category: data.category,
                description: data.description,
                createdBy: user?.email,
            }
            axiosSecure.post('/services', serviceData)
                .then(() => {
                    toast.success("Service added successfully!");
                })

            reset();
        } catch {
            toast.error("Failed to add service. Please try again.");
        }
        finally {
            setLoading(false);
        }


    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-center mb-6"
            >
                Add New Decoration Service
            </motion.h1>

            <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit(handleAddService)}
                className="card bg-base-100 shadow-lg p-6 space-y-4"
            >
                {/* Service Name */}
                <div>
                    <label className="font-semibold">Service Name</label>
                    <input
                        type="text"
                        {...register("serviceName", { required: true })}
                        placeholder="Wedding Stage Decoration"
                        className="input input-bordered w-full mt-1"
                    />
                    {
                        errors.serviceName && <span className="text-red-500">This field is required</span>
                    }
                </div>

                {/* Cost */}
                <div>
                    <label className="font-semibold">Cost ($)</label>
                    <input
                        type="number"
                        {...register("cost", { required: true })}
                        placeholder="25000"
                        className="input input-bordered w-full mt-1"
                    />
                    {
                        errors.cost && <span className="text-red-500">This field is required</span>
                    }
                </div>

                {/* Unit */}
                <div>
                    <label className="font-semibold">Unit</label>
                    <input
                        type="text"
                        {...register("unit", { required: true })}
                        placeholder="per event / per sq-ft"
                        className="input input-bordered w-full mt-1"
                    />
                    {
                        errors.unit && <span className="text-red-500">This field is required</span>
                    }
                </div>

                {/* Image Upload */}
                <div>
                    <label className="font-semibold">Service Image</label>
                    <input
                        type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full mt-1"
                        onChange={(e) =>
                            setPreview(URL.createObjectURL(e.target.files[0]))
                        }
                    />
                    {errors.image && <span className="text-red-500">This field is required</span>}
                    {/* Preview */}
                    {preview && (
                        <img
                            src={preview}
                            alt="preview"
                            className="mt-3 w-40 h-40 object-cover rounded-lg shadow-md"
                        />
                    )}
                </div>

                {/* Category */}
                <div>
                    <label className="font-semibold">Category</label>
                    <select
                        {...register("category", { required: true })}
                        className="select select-bordered w-full mt-1"
                        defaultValue=""
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="home">Home</option>
                        <option value="wedding">Wedding</option>
                        <option value="office">Office</option>
                        <option value="meeting">Meeting</option>
                        <option value="seminar">Seminar</option>
                    </select>
                    {
                        errors.category && <span className="text-red-500">This field is required</span>
                    }
                </div>

                {/* Description */}
                <div>
                    <label className="font-semibold">Description</label>
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Describe the decoration package..."
                        className="textarea textarea-bordered w-full mt-1"
                        rows={4}
                    ></textarea>
                    {
                        errors.description && <span className="text-red-500">This field is required</span>
                    }
                </div>

                {/* Admin Email */}
                <div>
                    <label className="font-semibold">Created By (Admin Email)</label>
                    <input
                        type="email"
                        value={user?.email}
                        disabled
                        className="input input-bordered w-full mt-1 bg-gray-200"
                    />
                </div>

                <button
                    disabled={loading}
                    className="btn btn-primary w-full mt-4"
                >
                    {loading ? "Adding..." : "Add Service"}
                </button>
            </motion.form>
        </div>
    );
};

export default AddService;
