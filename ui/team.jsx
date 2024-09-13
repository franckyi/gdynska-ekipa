import parse from 'html-react-parser'
import { fontSecondary } from '@/ui/fonts'
import CakeIcon from '@mui/icons-material/Cake';

export default async function Team({team}) {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/ekipa')
    let items = await data.json()

    items = items.sort((a, b) => a.meta.display_order - b.meta.display_order)

    const subheadingClasses = `text-center ${fontSecondary.className} text-lg`
    const headingClasses = 'mx-auto mt-8 mb-20 text-4xl lg:text-6xl lg:w-3/4 text-center uppercase'
    const date = new Date()
    const today = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    const AniaBirthDay = "13.9.2024"

    return (
        <div id="zespol" className="my-32 w-4/6 max-w-screen-2xl mx-auto">
            <p className={subheadingClasses}>{team.meta.subheading}</p>
            <h2 className={headingClasses}>{team.meta.heading}</h2>
            <div className="team-members flex flex-wrap justify-center lg:justify-around">
                {items.map(item => {
                    return (
                        <div key={item.id} className="team-member flex flex-col items-center">
                            <h3 className="order-1 text-2xl font-bold text-amber-600">{item.title.rendered}</h3>
                            <span className='order-2'>{item.meta.role}</span>
                            {item.slug.includes("anna") &&
                            today === AniaBirthDay &&
                                <div className={`order-3 my-4 flex items-center gap-2 text-cyan-400 tracking-widest text-2xl ${fontSecondary.className}`}>
                                    <CakeIcon />
                                    100 Lat!! 🥳🎉🎁
                                </div>
                            }
                            {parse(item.content.rendered)}
                            <div className='team-member-contacts order-4 text-center'>
                                <a className='block hover:text-amber-600' href={`mailto:${item.meta.email}`} title='Email'>{item.meta.email}</a>
                                <a className='block hover:text-amber-600' href={`tel:${item.meta.phone}`} title='Phone'>{item.meta.phone}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}