import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <header>
          <nav>
            <Link href='/'>Home</Link>
            <Link href='/events'>Events</Link>
            <Link href='/about-us'>About Us</Link>
          </nav>
        </header>
        
        {children}

        <footer>
          <p>Copyright YcWong 2024</p>
        </footer>

      </body>
    </html>
  );
}
