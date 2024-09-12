import Image from 'next/image'

import RegisterForm from '@/app/events/[category]/[id]/form'

export default async function SingleEventPage({ params }) {
    const { id } = params
    const { allEvents } = await import('@/app/data/data.json')

    const event = allEvents.filter(ev => ev.id === id).pop()

    console.log(event)

    return (
        <>
            <h2>{event.title}</h2>
            <Image src={event.image} width={800} height={400} alt={event.title}></Image>

            <p>{event.description}</p>

            {/* client side component */}
            <RegisterForm event={event} />
        </>
    );
}