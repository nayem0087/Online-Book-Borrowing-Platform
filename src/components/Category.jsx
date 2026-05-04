// import { Button } from "@heroui/react";


// const Category = async({searchParams}) => {

//      const {category} = await searchParams;
//     // console.log(category);

//     const res = await fetch('https://online-book-borrowing-platform-phi.vercel.app/category.json');
//     const categories = await res.json();
//     // console.log(categories);
//     const filteredBooks = Books.filter(book => book.category.toLowerCase() == category.toLowerCase())

//     return (
//         <div className="mb-5 space-x-3">
//             {
//                 categories.map(category => <Button size="sm" variant="outline" key={category.id} className="">{category.category}</Button>)
//             }
//         </div>
//     );
// };

// export default Category;