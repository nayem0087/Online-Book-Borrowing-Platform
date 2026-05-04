'use client'

import { UpdateProfile } from '@/components/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;
   

    return (
        <div className=''>
            <Card className='max-w-110 mx-auto border py-5 mt-10 px-5'>
                <Button size='sm' className='font-semibold text-white text-left'>Logged In</Button>
                <Avatar className='h-50 w-50 mx-auto'>
                    <Avatar.Image
                        alt="John Doe"
                        src={user?.image}
                        referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <h2 className='font-bold text-xl text-center'>{user?.name}</h2>
                <p className='text-gray-500 font-semibold text-center'>{user?.email}</p>
                <div className='flex flex-col items-center justify-center pt-4'>
                    <UpdateProfile/>
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;