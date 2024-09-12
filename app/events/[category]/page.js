import Image from 'next/image'
import Link from 'next/link'

export default async function EventPerCityPage({ params }) {
    const { category } = params
    const { allEvents } = await import('@/app/data/data.json')

    const filteredEvents = allEvents.filter(ev => ev.city.toLowerCase() === category)

    return (
        <>
            <h2>Event in {category[0].toUpperCase() + category.slice(1,)}</h2>
            {filteredEvents.map(ev => <Link key={ev.id} href={`/events/${category}/${ev.id}`}>
                <Image src={ev.image} width={400} height={200}></Image>
                <h4>{ev.title}</h4>
                <p>{ev.description}</p>
                
            </Link>)}
        </>
    );
}