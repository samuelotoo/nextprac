import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const Notfound = () => {

    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            //router.go()
            router.push('/')
        },3000)
    }, [])

    return ( 
        <>
         <Head>
    <title>Staff list | Errorpage</title>
    <meta name="keywords" content="staff" />
    </Head>
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href='/'>Homepage</Link></p>
        </div>
        </>
     );
}
 
export default Notfound;