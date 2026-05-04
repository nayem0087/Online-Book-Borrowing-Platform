import BooksCard from '@/components/BooksCard';
import Category from '@/components/Category';

const AllBooks = async ({ searchParams }) => {
    
    const { category } = await searchParams;

    const [booksRes, categoryRes] = await Promise.all([
        fetch('https://online-book-borrowing-platform-phi.vercel.app/data.json', { cache: 'no-store' }),
        fetch('https://online-book-borrowing-platform-phi.vercel.app/category.json', { cache: 'no-store' }),
    ]);

    const data = await booksRes.json();
    const categories = await categoryRes.json();

    const filteredBooks = category
        ? data.filter(book => book.category.toLowerCase() === category.toLowerCase())
        : data;

       

    return (
        <div>
            <h3 className='font-semibold text-2xl my-8'>All Books</h3>

            <Category categories={categories} />

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(book => (
                        <BooksCard key={book.id} data={book} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllBooks;