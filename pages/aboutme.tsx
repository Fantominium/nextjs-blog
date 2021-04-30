import React from 'react'
import '../components/style_modules/footer.module.css'
import { options } from 'colorette';
import innerContent from '../components/style_modules/content.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { JSXElement } from '@babel/types';
import Layout, { siteTitle } from '../components/layout'


export default function Aboutme(props): JSX.Element {
    return(
        <Layout>
          <section className={utilStyles.headingMd + ' ' + innerContent.container} >
          <p>test w typescript</p>
          <p>
            Checkout my github {' '}
            <a href="https://github.com/Fantominium">here</a>.
          </p>
          </section>
        </Layout>
    )
}