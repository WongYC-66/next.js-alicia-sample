import Image from 'next/image'
import Link from 'next/link'


export default async function EventsCategoryPage() {

    const { events_categories, allEvents } = await import('@/app/data/data.json')

    return (
        <>
            {events_categories.map(ev =>
                <Link key={ev.id} href={`/events/${ev.id}`}>
                    <h2>{ev.title}</h2>
                    <Image src={ev.image}
                        alt={ev.title}
                        width={200}
                        height={140}
                    />
                </Link>
            )}
        </>
    );
}
