import Image from 'next/image'
import Link from 'next/link'

export default async function SingleEventPage({ params }) {

    console.log(params)
    const { id } = params
    const { allEvents } = await import('@/app/data/data.json')

    const event = allEvents.filter(ev => ev.id === id).pop()
    console.log(event)

    return (
        <>
            <Image src={event.image} width={800} height={400} alt={event.title}></Image>
            <h2>{event.title}</h2>

            <h2>{event.description}</h2>

        </>
    );
}