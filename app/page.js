import Image from 'next/image'
import Link from 'next/link'

export default async function HomePage() {

  const { events_categories, allEvents } = await import('@/app/data/data.json')

  return (
    <>
      <main>
        {
          events_categories.map(ev =>
            <Link key={ev.id} href={`/events/${ev.id}`}>
              <h2>{ev.title}</h2>
              <Image src={ev.image}
                alt={ev.title}
                width={200}
                height={140}
              />
              <p>{ev.description}</p>
            </Link>)
        }

      </main>
    </>
  )
};