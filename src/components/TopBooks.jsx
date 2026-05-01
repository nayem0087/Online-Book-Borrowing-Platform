import { FaBook } from "react-icons/fa";


const TopBooks = () => {
  return (
    <section className="my-20 px-6">
       
      <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
        <FaBook className="w-6 h-6 text-green-700"/> Top Books
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-10">
        <div className="space-y-2 hover:scale-105 transition duration-300">
          <p className="text-gray-500 font-semibold text-md">Atomic Habits</p>
          <h3 className="text-3xl font-bold">320+</h3>
          <span className="text-green-500">Most Borrowed</span>
        </div>
        <div className="space-y-2 hover:scale-105 transition duration-300">
          <p className="text-gray-500 font-semibold text-md">Deep Work</p>
          <h3 className="text-3xl font-bold">250+</h3>
          <span className="text-blue-500">Popular</span>
        </div>
        <div className="space-y-2 hover:scale-105 transition duration-300">
          <p className="text-gray-500 font-semibold text-md">The Alchemist</p>
          <h3 className="text-3xl font-bold">290+</h3>
          <span className="text-purple-500">Top Rated</span>
        </div>
        <div className="space-y-2 hover:scale-105 transition duration-300">
          <p className="text-gray-500 font-semibold text-md">Rich Dad Poor Dad</p>
          <h3 className="text-3xl font-bold">310+</h3>
          <span className="text-orange-500">Trending</span>
        </div>
      </div>
    </section>
  );
};

export default TopBooks;