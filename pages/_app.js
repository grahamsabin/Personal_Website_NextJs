import '../scss/styles.scss';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Layout from './Layout';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Graham Sabin 🤟</title>
            </Head>

           

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}

export default MyApp;

// function MyApp({ Component, pageProps }) {
//     return (
//         <div>
//             <Head>
//                 <title>Graham Sabin 🤟</title>
//             </Head>

//             <Navbar/>

//             <div className={`page`}>
//                 <Component {...pageProps} />
//             </div>
//         </div>
//     )
// }