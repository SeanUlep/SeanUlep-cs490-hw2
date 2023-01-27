import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ARticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
