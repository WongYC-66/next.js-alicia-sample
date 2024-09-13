import Image from 'next/image'
import Link from 'next/link'

export default async function EventPerCityPage({ params }) {
    const { category } = params
    const { allEvents } = await import('@/app/data/data.json')

    const filteredEvents = allEvents.filter(ev => ev.city.toLowerCase() === category)

    return (
        <div className='cat_events'>
            <h2>Event in {category[0].toUpperCase() + category.slice(1,)}</h2>
            <div className='contents'>
                {filteredEvents.map(ev => <Link key={ev.id} className='card' href={`/events/${category}/${ev.id}`}>
                    <Image alt={ev.id} src={ev.image} width={300} height={150}></Image>
                    <h4>{ev.title}</h4>
                    <p>{ev.description}</p>

                </Link>)}
            </div>
        </div>
    );
}

// for static build
export async function generateStaticParams() {

    let { events_categories } = await import('@/app/data/data.json')
    events_categories = events_categories.map(ev => {
        return {category : ev.id}
    })

    // return [{category: london}, {category: san-francisco}, {category: barcelona}]
    return events_categories
}