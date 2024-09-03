import { fontSecondary } from './fonts';

export default function StatsAnimation({stats}) {

    return (
        <div className="stats-animation">
            <div className="flex flex-wrap gap-8 justify-between mb-12">
                <div className='box grow text-8xl text-amber-600 p-8 bg-stone-900 rounded-lg hover:bg-stone-800 transition-all duration-300'>
                    {stats.meta.years}+<span className={`block lg:inline text-lg text-stone-400 ${fontSecondary.className}`}> lat doświadczeniem</span>
                    </div>   
                <div className='box grow text-8xl text-amber-600 p-8 bg-stone-900 rounded-lg hover:bg-stone-800 transition-all duration-300'>
                    {stats.meta.projects}+<span className={`text-lg text-stone-400 ${fontSecondary.className}`}> wykonywanych projektów</span>
                    </div>
                <div className='box grow text-8xl text-amber-600 p-8 bg-stone-900 rounded-lg hover:bg-stone-800 transition-all duration-300'>
                    <span className={`block lg:inline text-lg text-stone-400 ${fontSecondary.className}`}>działaliśmy w </span>{stats.meta.cities}<span className={`text-lg text-stone-400 ${fontSecondary.className}`}>miast</span>
                    </div>
            </div>
            <div className={`mt-32 mb-4 text-4xl lg:text-6xl text-amber-600 ${fontSecondary.className}`}>Wykonaliśmy projekty na całej Polsce</div>
            <div className='box text-lg lg:text-4xl'>{stats.meta.city_list}</div>
        </div>
    )
}