import Image from 'next/image'

import RegisterForm from '@/app/events/[category]/[id]/form'

export default async function SingleEventPage({ params }) {
    const { id } = params
    const { allEvents } = await import('@/app/data/data.json')

    const event = allEvents.filter(ev => ev.id === id).pop()

    // console.log(event)

    return (
        <>
            <h2>{event.title}</h2>
            <Image alt={event.title} src={event.image} width={800} height={400} alt={event.title}></Image>

            <p>{event.description}</p>

            {/* client side component */}
            <RegisterForm event={event} />
        </>
    );
}

// for static build
export async function generateStaticParams() {

    let { allEvents } = await import('@/app/data/data.json')
    allEvents = allEvents.map(ev => {
        return {
            category : ev.city.toLowerCase(),
            id : ev.id
        }
    })
    // console.log(allEvents)
    /* return 
    [
        {category: london, id: london-comic-con-winter}, 
        {category: london, id: hyde-park-winter-wonderland}, 
        {category: london, id: new-years-eve-in-london-2023}, 
        {category: san-francisco, id: innovation-summit-san-francisco},
    ]

    */
    return allEvents
}