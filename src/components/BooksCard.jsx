import { Card } from "@heroui/react";
import Image from "next/image";


const BooksCard = ({ data }) => {
    return (
        <Card className="bg-white p-6 rounded-lg  
        shadow-[0_-6px_20px_rgba(0,0,0,0.15),0_6px_20px_rgba(0,0,0,0.15)] 
        transition-all duration-300">
            <div className="relative w-full aspect-square">
                <Image
                    className="rounded-2xl"
                    src={data.image_url}
                    fill
                    alt={data.title}
                />
                 </div>
                <div>
                    <h2 className="font-bold text-lg">{data.title}</h2>
                    <h5 className="font-semibold text-gray-500">{data.category}</h5>
                </div>
        </Card>
    );
};

export default BooksCard;