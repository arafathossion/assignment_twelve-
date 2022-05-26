import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../fierbase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const url = `https://serene-hamlet-44786.herokuapp.com/profile/${user?.email}`
    const { isLoading, data: profile } = useQuery('profile', () =>
        fetch(url).then(res =>
            res.json()
        )
    )
    console.log(profile)
    return (
        <div>
            <h1>My Profile</h1>
            <div className='flex justify-end'>
                {
                    profile ? <Link to={`/updateprifile/${user?.email}`}
                        className='my-custom-style bg-main btn my-5 border-0 text-teal-500 font-bold px-10 capitalize text-lg'>update profile</Link> : <Link to={`/addprofile/${user?.email}`}
                            className='my-custom-style bg-main btn my-5 border-0 text-teal-500 font-bold px-10 capitalize text-lg'>add profile</Link>
                }
            </div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={profile?.image} class="w-24 h-24 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">User Id:{profile?._id}</h1>
                        <h1 class="text-xl font-bold">Full Name:{profile?.displayName}</h1>
                        <h1 class="text-xl font-bold">Email:{profile?.email}</h1>
                        <h1 class="text-xl font-bold">College Name:{profile?.collegeName}</h1>
                        <h1 class="text-xl font-bold">University Name:{profile?.universityName}</h1>
                        <h1 class="text-xl font-bold">Division:{profile?.division}</h1>
                        <h1 class="text-xl font-bold">Home District:{profile?.district}</h1>
                        <h1 class="text-xl font-bold">Phone Number:{profile?.number}</h1>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;