import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://img.magnific.com/premium-photo/large-collection-books_1142389-5032.jpg')] 
    h-[40vh] sm:h-[70vh] md:h-[80vh] w-auto 
    bg-cover bg-no-repeat bg-center 
    flex items-center rounded-lg shadow-2xl">

     
      <div className="w-full h-full rounded-lg bg-black/70 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 max-w-2xl mx-auto leading-tight">
            My Online Book Borrowing Platform
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 max-w-xl mx-auto text-gray-300">
            Browse thousands of books, borrow with ease, and dive into a world of knowledge—your digital library is just a click away.
          </p>
          <div className="flex justify-center">
            <Link href="#">
              <Button className="font-semibold px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
                Browse All Books
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;