"use client"
import CardDescription from "./description";
import ImageMontre from "./image"
import { motion } from 'framer-motion';
const data_montre = [
    {
        "brand": "FitLife",
        "ref": "XV-383923810",
        "title": "Montre Connectée FitLife Pro 5+",
        "star": 4,
        "notes": 43,
        "price": 183.99,
        "reduction": 18.477
    }
]

const Card = () => {
    return (
        <div className="flex flex-col">
            {data_montre.map((item, index) => (
                <motion.div key={index} initial={{ scale: 0 }} animate={{ scale: [1, 1.05, 1] }} className="bg-white w-full min-[400px]:max-w-[400px] min-[800px]:max-w-none min-[800px]:w-auto pb-[1.5rem] min-[800px]:p-[3rem] rounded-t-2xl min-[400px]:rounded-2xl flex flex-col min-[800px]:flex-row justify-center items-center min-[800px]:justify-normal min-[800px]:items-start">
                    <ImageMontre />
                    <CardDescription brand={item.brand} ref={item.ref} title={item.title} star={item.star} notes={item.notes} price={item.price} reduction={item.reduction} />
                </motion.div>
            ))}
        </div>
    );
};

export default Card