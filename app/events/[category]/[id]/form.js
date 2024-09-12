'use client'

export default function Form() {
    const handleSubmit = (e) => {
        // fetch....
        e.preventDefault();
        console.log('submitting, but actualy no')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='email' /> <button type='submit'>Submit</button>
        </form>
    );
};