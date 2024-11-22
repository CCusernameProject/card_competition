"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ImageMontre = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleImageClick = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            <motion.img layoutId="modal" src="/montre.png" className="w-full min-[800px]:w-[23.125rem] object-cover hover:cursor-zoom-in" alt="Image représentant une montre" onClick={handleImageClick}/>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20" onClick={handleModalClose}>
                    <motion.div layoutId="modal" className="relative rounded shadow-md" onClick={(e) => e.stopPropagation()}>
                        <img src="/montre.png" alt="" />
                        <button className="bottom-[1.5rem] absolute left-[50%] translate-x-[-50%] bg-red-500 text-white px-4 py-2 rounded font-bold" onClick={handleModalClose}>Fermer</button>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default ImageMontre;
