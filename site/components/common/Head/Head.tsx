import type { VFC } from 'react'
import { SEO } from '@components/common'

const Head: VFC = () => {
  const mainStyle = '/assets/css/tailwind.min.css'
  const fontStyle = 'fonts/fontawesome/css/all.min.css'

  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <link rel="stylesheet" href={mainStyle} key="main-style" />
      <link href={fontStyle} type="text/css" rel="stylesheet" />
    </SEO>
  )
}

export default Head
