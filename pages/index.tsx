import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Project from '../components/Project'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Profile from '../components/Profile'

const listProject = [
  {
    src: 'https://dummyimage.com/600x600/000000/ffffff.jpg&text=Project+1',
    title: 'Project 1',
    description: 'Description Project 1',
    slug: 'project-1'
  },
  {
    src: 'https://dummyimage.com/600x600/26afd1/ffffff.jpg&text=Project+2',
    title: 'Project 2',
    description: 'Description Project 2',
    slug: 'project-2'
  },
  {
    src: 'https://dummyimage.com/600x600/0cd13d/000000.jpg&text=Project+3',
    title: 'Project 3',
    description: 'Description Project 3',
    slug: 'project-3'
  },
  {
    src: 'https://dummyimage.com/600x600/000000/ffffff.jpg&text=Project+4',
    title: 'Project 4',
    description: 'Description Project 4',
    slug: 'project-4'
  },
  {
    src: 'https://dummyimage.com/600x600/26afd1/ffffff.jpg&text=Project+5',
    title: 'Project 5',
    description: 'Description Project 5',
    slug: 'project-5'
  },
  {
    src: 'https://dummyimage.com/600x600/0cd13d/000000.jpg&text=Project+6',
    title: 'Project 6',
    description: 'Description Project 6',
    slug: 'project-6'
  },
  {
    src: 'https://dummyimage.com/600x600/000000/ffffff.jpg&text=Project+7',
    title: 'Project 7',
    description: 'Description Project 7',
    slug: 'project-7'
  },
  {
    src: 'https://dummyimage.com/600x600/26afd1/ffffff.jpg&text=Project+8',
    title: 'Project 8',
    description: 'Description Project 8',
    slug: 'project-8'
  },
  {
    src: 'https://dummyimage.com/600x600/0cd13d/000000.jpg&text=Project+9',
    title: 'Project 9',
    description: 'Description Project 9',
    slug: 'project-9'
  },
  {
    src: 'https://dummyimage.com/600x600/000000/ffffff.jpg&text=Project+10',
    title: 'Project 10',
    description: 'Description Project 10',
    slug: 'project-10'
  },
  {
    src: 'https://dummyimage.com/600x600/26afd1/ffffff.jpg&text=Project+11',
    title: 'Project 11',
    description: 'Description Project 11',
    slug: 'project-11'
  },
  {
    src: 'https://dummyimage.com/600x600/0cd13d/000000.jpg&text=Project+12',
    title: 'Project 12',
    description: 'Description Project 12',
    slug: 'project-12'
  },
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="xl:container mt-8">

        {/* <Profile /> */}

        {/* List Project */}
        <div className="flex flex-wrap">
          {
            listProject.map((item, index) => <Project key={index} src={item.src} title={item.title} slug={item.slug} /> )
          }
        </div>
        {/* End List Project */}

      </main>

      <Footer />

    </div>
  )
}

export default Home
