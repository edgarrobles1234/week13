import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, itIsHome }) {
    return (
        <div>
            <Head>
                <title>Basic Next App</title>
            </Head>
            <header>
                <nav>
                   {// <a href="https://www.youtube.com/watch?v=uRCK3umiKQQ">NFL QBs</a>
                     }

                </nav>
            </header>
            <main>
                {children}
            </main>

            {!itIsHome && (
                <Link href="/" className="btn btn-primary mt-3">
                    Going home! Checking changes
                </Link>
            )
            }
            <footer>
                <h4>
                    FOOTER
                </h4>
            </footer>
        </div>
    );
}