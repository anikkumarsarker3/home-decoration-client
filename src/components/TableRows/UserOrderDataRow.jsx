import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserOrderDataRow = ({ order }) => {
  const axiosSecure = useAxiosSecure()
  const handleDelete = async (order) => {
    await axiosSecure.delete(`/orders/${order._id}`).then((res) => {
      console.log(res.data);
      toast.success("Order canceled successfully");

    })
  }

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={order?.photo}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
        </div>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{order?.name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{order?.category}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>${order?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{order.quantity}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>{order.status}</p>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => handleDelete(order)}
          className='btn relative disabled:cursor-not-allowed cursor-pointer inline-block px-3 py-1 font-semibold text-lime-900 leading-tight'
        >
          <span className='absolute cursor-pointer inset-0 bg-red-200 opacity-50 rounded-full'></span>
          <span className='relative cursor-pointer'>Cancel</span>
        </button>
        {/* <DeleteModal isOpen={isOpen} closeModal={closeModal} /> */}
      </td>
    </tr>
  )
}

export default UserOrderDataRow
