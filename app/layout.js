import Link from 'next/link'
import Image from 'next/image'
import '@/app/general.sass'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <header>
          <div className='topNav'>
            <Image akt='logo' src='/image/logo_black.png' width={50} height={50} />
            <nav>
              <ul>
                <ol><Link href='/'>Home</Link></ol>
                <ol><Link href='/events'>Events</Link></ol>
                <ol><Link href='/about-us'>About Us</Link></ol>
              </ul>
            </nav>
          </div>
          <h1> Lorem ipsum dolor sit amet</h1>
        </header>

        <main>
          {children}
        </main>


        <footer>
          <p>Copyright YcWong 2024</p>
        </footer>

      </body>
    </html>
  );
}
