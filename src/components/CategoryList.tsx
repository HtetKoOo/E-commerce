import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
    return (
        <div className="px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8">
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xlg:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/12555811/pexels-photo-12555811.png" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-clip tracking-wide">Hoodies</h1>
                </Link>
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xlg:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/6044973/pexels-photo-6044973.jpeg" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-clip tracking-wide">Jackets</h1>
                </Link>
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xlg:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/6764923/pexels-photo-6764923.jpeg" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-clip tracking-wide">Suit</h1>
                </Link>
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xlg:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/2530912/pexels-photo-2530912.jpeg" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-clip tracking-wide">Shoes</h1>
                </Link>
                <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xlg:w-1/6">
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://images.pexels.com/photos/19500223/pexels-photo-19500223.jpeg" alt="" fill sizes="20vw" className="object-cover" />
                    </div>
                    <h1 className="mt-8 font-light text-clip tracking-wide">Fashion Clothes</h1>
                </Link>
            </div>
        </div>
    )
}
export default CategoryList;