import BooksCard from '@/components/BooksCard';
import React from 'react';

const AllBooks = async() => {

    const res = await fetch('https://online-book-borrowing-platform-phi.vercel.app/data.json');
    const data = await res.json();

    return (
        <div>
            <h3 className='font-semibold text-2xl my-8'>All Books</h3>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {data.map(data => <BooksCard key={data.id} data={data}>

                </BooksCard>)}
            </div>
        </div>
    );
};

export default AllBooks;