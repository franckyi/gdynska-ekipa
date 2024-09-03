import Link from 'next/link'
import Image from 'next/image'

export default function AboutUs({content, btnText}) {
    const headingClasses = 'mb-8 text-4xl uppercase'
    const btnClasses = "slide-button w-[240px] text-center px-20 py-4 border-amber-600 hover:bg-amber-600 border hover:border-white"

    return (
        <div className='my-32 mx-auto w-4/6 flex flex-wrap'>
            <div className='p-8 my-16 lg:translate-x-8 flex flex-col justify-center text-left bg-stone-900'>
                <h2 className={headingClasses}>{content.meta.heading}</h2>
                <p className='mb-16'>{content.meta.description}</p>
                <Link className={btnClasses} href="/o-nas">{btnText}</Link>
            </div>
            <Image className='object-contain' src={content.meta.image} width={700} height={400} alt="" />
        </div>
    )
}