import Image from 'next/image'
import Link from 'next/link'


export default async function EventsCategoryPage() {

    const { events_categories, allEvents } = await import('@/app/data/data.json')

    return (
        <div className="events_page">
            {events_categories.map(ev =>
                <Link className='card' key={ev.id} href={`/events/${ev.id}`}>
                    <Image src={ev.image}
                        alt={ev.title}
                        width={300}
                        height={300}
                    />
                    <h2>{ev.title}</h2>
                </Link>
            )}
        </div>
    );
}
