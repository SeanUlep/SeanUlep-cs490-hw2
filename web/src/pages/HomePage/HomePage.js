import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      Home, it's where the heart is. CUZ WHAT IS LOVE, I WANNA KNOW WHAT LOVE
      ISSSS!!
      <ArticlesCell />
    </>
  )
}

export default HomePage
