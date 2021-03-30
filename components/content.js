import innerContent from './style_modules/content.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Content(){
    return(
        <section className={utilStyles.headingMd + ' ' + innerContent.container} >
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    )
}