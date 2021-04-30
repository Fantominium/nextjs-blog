import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Content from '../components/content'
import FooterFormLogic from '../lib/FooterFormLogic'

import { getSortedPostsData } from '../lib/posts'

import useSWR from 'swr'


//personal test of the swr facility for client side data fetching for user specific pages ideally
export function callSwapiPlanets () {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const rand = Math.floor(Math.random()*10)+1

  // const { data, error } = useSWR(`https://swapi.dev/api/people/${ rand }`, fetcher)

  // if (error) return <div>failed to load, error: {error}</div>
  // if (!data) return <div>loading...</div>
  // return <div>Hello, I'm {data.name ? data.name : 'Emporor Sheev Palpatine'}!</div>


}



//run server side, ideal for pre-rendering static info from a db 
//use this for the "Places worked" or "Projects"
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({allPostsData}) {
  return (<>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        {callSwapiPlanets()}
        <Content allPostsData={allPostsData}/>
        <FooterFormLogic/>
    </Layout>
    </>
  )
}
