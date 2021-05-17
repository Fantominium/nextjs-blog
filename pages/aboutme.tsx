import innerContent from '../components/style_modules/content.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Layout from '../components/layout'


export default function Aboutme(props): JSX.Element {
    return(
        <>
          <section className={utilStyles.headingMd + ' ' + innerContent.container} >
          <p>test w typescript</p>
          <p>
            Checkout my github {' '}
            <a href="https://github.com/Fantominium">here</a>.
          </p>
          </section>
        </>
    )
}

Aboutme.Layout = Layout;