import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>I am actually very amazing. Yes, me, Sean Ulep.</p>

      <p>
        <a
          href="https://www.youtube.com/watch?v=eBGIQ7ZuuiU"
          title="The Fun Stuff"
        >
          If you want to know why, click this area!
        </a>
      </p>
    </>
  )
}

export default AboutPage
