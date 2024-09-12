import Image from 'next/image'
import Link from 'next/link'

export default async function HomePage() {

  const { events_categories, allEvents } = await import('@/app/data/data.json')

  return (
    <div className='home_body'>
      {
        events_categories.map(ev =>
          <Link className='card' key={ev.id} href={`/events/${ev.id}`}>
            <div className='image'>
              <Image src={ev.image}
                alt={ev.title}
                width={200}
                height={140}
              />
            </div>
            <div className='content'>
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>

          </Link>)
      }

    </div>
  )
};