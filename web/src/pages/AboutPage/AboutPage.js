import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>I am actually very amazing. Yes, me, Sean Ulep.</p>
      <img
        src="https://cdn.discordapp.com/attachments/932835514099314730/1068420503200608276/JJBA-IT-WAS-ME-DIO_1.jpg"
        alt="Me, Sean"
      ></img>
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
