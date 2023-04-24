import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'


export default function Home() {
  return (
    <>
    <Head>
    <title>Staff list | Home</title>
    <meta name="keywords" content="staff" />
    </Head>
   <div>
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eaque distinctio obcaecati sapiente animi ducimus repellendus incidunt eveniet suscipit, ipsam alias quisquam, quaerat cum ratione labore enim exercitationem, repudiandae quidem?</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eaque distinctio obcaecati sapiente animi ducimus repellendus incidunt eveniet suscipit, ipsam alias quisquam, quaerat cum ratione labore enim exercitationem, repudiandae quidem?</p>
    <Link href='/staff' className={styles.btn}>See Staff listing</Link>
   </div>
   </>
  )
}
