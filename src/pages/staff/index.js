import Head from "next/head";
import styles from '../../styles/Staff.module.css'
import Link from "next/link";

export const getStaticProps = async()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: {staff: data}
    }
}
const Allstaff = ({staff}) => {
    return ( 
        <>
         <Head>
    <title>Staff list | List</title>
    <meta name="keywords" content="staff" />
    </Head>
        <div>
            <h1>All Staff</h1>
            {staff.map((staff)=>(
                <Link href={'/staff/' + staff.id} key={staff.id}>
                    <h3 className={styles.single}>{staff.name}</h3>

                </Link>
            ))}
        </div>
        </>
     );
}
 
export default Allstaff;