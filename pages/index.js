import Head from 'next/head'
import Image from 'next/image'
import { Feed, Hero, SecondaryNav } from '../components' 


export default function Home() {
  return (
 <>
  <Hero/>
  <SecondaryNav/>
  <Feed/>
 </>
  )
}
