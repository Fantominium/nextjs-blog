import React, {useState, useEffect, FC} from 'react'
import FooterFormRender from '../components/FooterFormRender'
import '../components/style_modules/footer.module.css'
import { options } from 'colorette';
import innerContent from '../components/style_modules/content.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { JSXElement } from '@babel/types';



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

         {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {props.allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>  */}

      </>
    )
}


// export default function Aboutme (): JSX.Element {

//     return(
//         <h1>test w typescript</h1>
        
//     )
    
// }