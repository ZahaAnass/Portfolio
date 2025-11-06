import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    name: string;
    role: string;
}

const ClientReviewCars = ({ image, name, role }: Props) => {
    return (
        <div className='m-2'>
            <Image 
                src={image}
                alt="client review"
                width={60}
                height={60}
                className='rounded-full'
            />
            <p className='mt-6 text-base text-gray-200 font-medium'>
                &quot; Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Vero ducimus tempore corrupti saepe placeat aut voluptatem maiores nulla reprehenderit sunt.
                &quot;
            </p>
            <h2 className='mt-6 text-xl text-cyan-200 font-bold'>{name}</h2>
            <p className='mt-1 text-gray-200'>{role}</p>
        </div>
    )
}

export default ClientReviewCars