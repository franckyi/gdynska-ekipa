import parse from 'html-react-parser'
import { fontSecondary } from '@/ui/fonts'

export default async function Team({content}) {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/ekipa')
    let items = await data.json()

    items = items.sort((a, b) => a.meta.display_order - b.meta.display_order)

    const subheadingClasses = `text-center ${fontSecondary.className} text-lg`
    const headingClasses = 'mx-auto mb-20 text-6xl w-3/4 text-center uppercase'

    return (
        <div className="my-32 w-4/6 mx-auto">
            <p className={subheadingClasses}>{content.meta.subheading}</p>
            <h2 className={headingClasses}>{content.meta.heading}</h2>
            <div className="team-members flex justify-between">
                {items.map(item => {
                    return (
                        <div key={item.id} className="team-member flex flex-col items-center">
                            <h3 className="order-1 text-2xl font-bold text-amber-600">{item.title.rendered}</h3>
                            <span className='order-2'>{item.meta.role}</span>
                            {parse(item.content.rendered)}
                            <div className='team-member-contacts order-3 text-center'>
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