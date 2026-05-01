import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";


const BooksCard = ({ data }) => {
    return (
        <Card className="bg-white p-6 rounded-lg  
        shadow-[0_-6px_20px_rgba(0,0,0,0.15),0_6px_20px_rgba(0,0,0,0.15)] 
        transition-all duration-300">
            <div className="relative w-full aspect-square">
                <Image
                    className="object-cover rounded-xl"
                    src={data.image_url}
                    fill
                    sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vh, 33vh"
                    alt={data.title}
                />
                <Chip size="sm" className="absolute right-2 top-2">{data.category}</Chip>
                 </div>
                <div>
                    <h2 className="font-bold text-lg">{data.title}</h2>
                    <h5 className="font-semibold text-gray-500">{data.category}</h5>
                </div>
               <Button className="w-full">View Details</Button>
        </Card>
    );
};

export default BooksCard;