"use client"
import { motion } from "framer-motion";
import { useState } from "react";

interface DescriptionProps {
    brand: string,
    ref: string,
    title: string,
    star: number,
    notes: number,
    price: number,
    reduction: number,
}

const CardDescription = (props: DescriptionProps): JSX.Element => {
    const [enterOnDiv, setEnterOnDiv] = useState(false)
    const [svgClicked, setSvgClicked] = useState(false)
    const ReductionPrice = props.price - ((props.price*props.reduction)/100)
    const PriceAfterReduction = parseFloat(ReductionPrice.toFixed(2));

    const Star = ({filled, delay}: any): JSX.Element => {
        return (
            <motion.svg
                key={filled ? 'filled' : 'unfilled'}
                initial={{ fill: 'none', scale: 0 }}
                animate={{
                    fill: filled ? '#FFD700' : 'none',
                    scale: [1, 1.1, 1],
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="#FFD700"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="15"
                height="15"
            >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </motion.svg>
        )
    }

    return (
        <section className="flex flex-col mt-[1rem] min-[800px]:mt-0 min-[800px]:ml-[2.5rem] font-sans w-[17.438rem]">
            <header className="flex w-full justify-between items-center">
                <p className="text-[0.825rem] text-white w-[4.375rem] h-[2.063rem] bg-[#020712]/80 rounded-full flex justify-center items-center">{props.brand}</p>
                <p className="text-[0.75rem] text-[#020712]/50">{props.ref}</p>
            </header>
            <main>
                <h1 className="text-[#020712]/80 text-[2rem] font-bold leading-[2.063rem] mt-[0.5rem]">{props.title}</h1>
                <div className="flex items-center gap-[0.5rem] mt-[0.5rem]">
                    <div className="flex gap-[0.25rem]">
                        {Array.from({length: 5}, (_, index) => index + 1).map((star) => (
                            <Star key={star} filled={star <= props.star ? true : false} delay={star*0.2} />
                        ))}
                    </div>
                    <p className="text-[0.75rem] text-[#020712]/50">{props.notes} notes</p>
                </div>
                <div className="flex flex-col mt-[3rem]">
                    <div className=" relative">
                        <p className="text-[#020712]/50 inline-block relative">{props.price}€<span className="bg-[#020712]/50 w-full h-[0.05rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute"></span></p>
                    </div>
                    <p className="text-[#020712] font-bold text-[3rem] leading-[2.063rem] mt-[0.25rem]">{PriceAfterReduction}€</p>
                </div>
            </main>
            <footer className="flex w-full justify-between mt-[3rem]">
                <motion.button initial={{fontSize: '1rem', backgroundColor: '#477AEB'}} whileHover={{fontSize: '1.1rem', backgroundColor: '#477bebda'}} transition={{duration: 0.1}} className="text-nowrap py-[0.625rem] px-[3.06325rem] max-w-[14rem] max-h-[2.75rem] rounded-lg text-[#F6F8FE] font-semibold flex justify-center items-center">Ajouter au panier</motion.button>
                <div onClick={() => setSvgClicked(!svgClicked)} onMouseEnter={() => setEnterOnDiv(true)} onMouseLeave={() => setEnterOnDiv(false)} className="bg-[#477AEB1A] rounded-lg w-[2.75rem] h-[2.75rem] flex justify-center items-center hover:cursor-pointer">
                    <svg 
                        key="animated-svg"
                        className={`${svgClicked ? 'fill-[#477AEB]' : enterOnDiv ? 'fill-[#477AEB]' : 'fill-none'} transition-all duration-300`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="18"
                        stroke="#477AEB"
                        strokeWidth="2"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
            </footer>
        </section>
    )
}

export default CardDescription