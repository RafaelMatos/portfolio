import Image from "next/image";
import Link from "next/link";
import coffeeDelivery from "../../../public/assets/projects/coffeeDelivery.gif";

export default function Property() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:w-[40vh] relative">
      <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
        <Image src={coffeeDelivery} alt="/" />
        <p>Coffee Delivery</p>
      </div>
    </div>
  )
}