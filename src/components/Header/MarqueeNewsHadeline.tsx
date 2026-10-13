import { IhadelineType } from '@/types';
import { Suspense } from 'react';
import Marquee from 'react-fast-marquee';



const LoadHeadline = async () => {
    const res = await fetch(`https://news-api-v2.vercel.app/api/news`, { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error("Failed to fetch headline");
    }
    const data = await res.json();
    const hadelines: IhadelineType[] = data.data;

    return (
        <Marquee
            speed={60}
            pauseOnHover
            gradient={false}
            className="min-w-0 text-sm font-medium text-white"
        >
            {hadelines.map((headline) => (
                <span
                    key={headline.id}
                    className="px-6"
                >
                    {headline.description}
                </span>
            ))}
        </Marquee>
    )
}


const MarqueeNewsHadeline = ({ hadelines }: { hadelines: IhadelineType[] }) => {
    console.log(hadelines)
    return (
        <div className="border-y border-base-300 bg-red-500">
            <div className="container mx-auto flex min-w-0 items-center">
                <span className="z-10 shrink-0 bg-red-700 px-3 py-2 font-bold text-white sm:px-5">
                    সর্বশেষ:
                </span>

                <div className="min-w-0 flex-1 overflow-hidden">
                    <Suspense fallback={<p className="px-4 py-2 text-sm text-white">শিরোনাম লোড হচ্ছে... </p>}>
                        <LoadHeadline />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default MarqueeNewsHadeline;