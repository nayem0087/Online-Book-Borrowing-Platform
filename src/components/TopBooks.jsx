import BooksCard from "./BooksCard";


const TopBooks = async() => {
    const res = await fetch('https://online-book-borrowing-platform-phi.vercel.app/data.json');
    const data = await res.json();
    const topData = data.slice(0, 4);
    console.log(topData);
    return (
        <div>
            <h1 className="font-bold text-2xl mt-20">Top Books</h1>
            <div className="grid grid-cols-4 gap-4">
                {topData.map(data => <BooksCard key={data.id} data={data}>
                    
                </BooksCard>)}
            </div>
        </div>
    );
};

export default TopBooks;