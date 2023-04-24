import Head from "next/head";
import styles from '../../styles/Staff.module.css'

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
                <div key={staff.id}>
                    <h3 className={styles.single}>{staff.name}</h3>

                </div>
            ))}
        </div>
        </>
     );
}
 
export default Allstaff;