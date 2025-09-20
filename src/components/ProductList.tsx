import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/3353621/pexels-photo-3353621.jpeg" alt="" fill sizes="25vw" className="absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"/>
                    <Image src="https://images.pexels.com/photos/3353621/pexels-photo-3353621.jpeg" alt="" fill sizes="25vw" className="absolute rounded-md "/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$59</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-shop text-shop py-2 px-4 text-xs w-max hover:bg-shop hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg" alt="" fill sizes="25vw" className="absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"/>
                    <Image src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg" alt="" fill sizes="25vw" className="absolute rounded-md "/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$55</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-shop text-shop py-2 px-4 text-xs w-max hover:bg-shop hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg" alt="" fill sizes="25vw" className="absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"/>
                    <Image src="https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg" alt="" fill sizes="25vw" className="absolute rounded-md "/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$64</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-shop text-shop py-2 px-4 text-xs w-max hover:bg-shop hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg" alt="" fill sizes="25vw" className="absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"/>
                    <Image src="https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg" alt="" fill sizes="25vw" className="absolute rounded-md "/>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$79</span>
                </div>
                <div className="text-sm text-gray-500">My Description</div>
                <button className="rounded-2xl ring-1 ring-shop text-shop py-2 px-4 text-xs w-max hover:bg-shop hover:text-white">Add to Cart</button>
            </Link>
        </div>
    )
}
export default ProductList;