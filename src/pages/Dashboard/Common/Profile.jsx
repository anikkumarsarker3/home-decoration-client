import useAuth from '../../../hooks/useAuth'
import ppbanner from '../../../assets/pp-banner.png'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure();
  const { data: profile = {} } = useQuery({
    queryKey: ['login-users'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/login-users`)
      return res.data
    }
  })
  console.log(profile)
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
        <img
          alt='cover photo'
          src={ppbanner}
          className='w-full mb-4 rounded-t-lg h-56'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={profile?.photo}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>
          <p className='p-2 px-4 text-xs text-white bg-primary rounded-full'>
            {profile?.role}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user?.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-gray-600 '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-gray-600 '>{user?.email}</span>
              </p>

              <div>
                <button className='bg-primary px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-lime-800 block mb-1'>
                  Update Profile
                </button>
                <button className='bg-primary px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-lime-800'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
