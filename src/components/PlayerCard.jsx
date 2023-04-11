import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const PlayerCard = ({ product }) => {

  return (
      <div className="mt-4">
                    <div className="relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6">
                        <div className="group relative flex justify-between rounded-xl bg-rose-200  cursor-pointer before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:to-rose-600 before:opacity-0 before:transition before:duration-500 hover:before:opacity-100">
                            <div className=" w-max relative space-y-1 p-4">
                                <h4 className="text-lg text-rose-900">{product.name}</h4>
                                <div className="relative h-6 text-sm text-rose-800">
                                    <span className="transition duration-300 group-hover:invisible group-hover:opacity-0">{product.description}</span>
                                    <Link href={`/audio/${product.id}`} className="w-max invisible absolute inset-0 flex items-center gap-3 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0">
                                            <AiOutlineArrowRight className=' h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0' /> <p>Listening Now</p>
                                    </Link>
                                </div>
                            </div>

                           <Image  src={product.image} width={100} height={100}  className="absolute -bottom-1 right-6 w-[6rem] transition duration-300 rounded-md group-hover:scale-[1.4]" />
                        </div>
                    </div>
                </div>
  );
}

export default PlayerCard;










