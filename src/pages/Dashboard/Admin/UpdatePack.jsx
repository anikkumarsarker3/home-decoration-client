import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UploadImage from "../../../components/Shared/UploadImage";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const UpdatePack = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // ✅ Fetch service
    const { data: service = {}, isLoading } = useQuery({
        queryKey: ["service-details", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/services/${id}`);
            return res.data;
        },
    });

    // ✅ Reset form when data arrives
    useEffect(() => {
        if (service?._id) {
            reset({
                serviceName: service.serviceName,
                cost: service.cost,
                unit: service.unit,
                category: service.category,
                description: service.description,
            });
        }
    }, [service, reset]);

    // ✅ Submit handler
    const handleUpdateService = async (data) => {
        setLoading(true);

        try {
            let imageURL = service.image;

            // Upload new image only if selected
            if (data.image?.length > 0) {
                imageURL = await UploadImage(data.image[0]);
            }

            const updatedService = {
                id: service._id,
                serviceName: data.serviceName,
                cost: parseFloat(data.cost),
                unit: data.unit,
                image: imageURL,
                category: data.category,
                description: data.description,
                createdBy: user?.email,
            };

            await axiosSecure.patch("/services", updatedService);
            toast.success("Service updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to update service");
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-center mb-6"
            >
                Update Decoration Service
            </motion.h1>

            <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit(handleUpdateService)}
                className="card bg-base-100 shadow-lg p-6 space-y-4"
            >
                {/* Service Name */}
                <div>
                    <label className="font-semibold">Service Name</label>
                    <input
                        {...register("serviceName", { required: true })}
                        className="input input-bordered w-full mt-1"
                    />
                    {errors.serviceName && (
                        <span className="text-red-500">Required</span>
                    )}
                </div>

                {/* Cost */}
                <div>
                    <label className="font-semibold">Cost ($)</label>
                    <input
                        type="number"
                        {...register("cost", { required: true })}
                        className="input input-bordered w-full mt-1"
                    />
                    {errors.cost && <span className="text-red-500">Required</span>}
                </div>

                {/* Unit */}
                <div>
                    <label className="font-semibold">Unit</label>
                    <input
                        {...register("unit", { required: true })}
                        className="input input-bordered w-full mt-1"
                    />
                    {errors.unit && <span className="text-red-500">Required</span>}
                </div>

                {/* Image */}
                <div>
                    <label className="font-semibold">Service Image</label>
                    <input
                        type="file"
                        {...register("image")}
                        className="file-input file-input-bordered w-full mt-1"
                        onChange={(e) =>
                            setPreview(URL.createObjectURL(e.target.files[0]))
                        }
                    />

                    {/* Preview */}
                    {preview ? (
                        <img
                            src={preview}
                            className="w-40 h-40 mt-3 rounded object-cover"
                        />
                    ) : (
                        service.image && (
                            <img
                                src={service.image}
                                className="w-40 h-40 mt-3 rounded object-cover"
                            />
                        )
                    )}
                </div>

                {/* Category */}
                <div>
                    <label className="font-semibold">Category</label>
                    <select
                        {...register("category", { required: true })}
                        className="select select-bordered w-full mt-1"
                    >
                        <option value="">Select Category</option>
                        <option value="home">Home</option>
                        <option value="wedding">Wedding</option>
                        <option value="office">Office</option>
                        <option value="meeting">Meeting</option>
                        <option value="seminar">Seminar</option>
                    </select>
                    {errors.category && (
                        <span className="text-red-500">Required</span>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="font-semibold">Description</label>
                    <textarea
                        {...register("description", { required: true })}
                        className="textarea textarea-bordered w-full mt-1"
                        rows={4}
                    />
                    {errors.description && (
                        <span className="text-red-500">Required</span>
                    )}
                </div>

                {/* Admin */}
                <div>
                    <label className="font-semibold">Created By</label>
                    <input
                        value={user?.email}
                        disabled
                        className="input input-bordered w-full bg-gray-200"
                    />
                </div>

                <button disabled={loading} className="btn btn-primary w-full">
                    {loading ? "Updating..." : "Update Service"}
                </button>
            </motion.form>
        </div>
    );
};

export default UpdatePack;
