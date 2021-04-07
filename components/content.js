import innerContent from './style_modules/content.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
export default function Content(props){
    return(
      <>
          <section className={utilStyles.headingMd + ' ' + innerContent.container} >
          <p>{props.swapi}</p>
          <p>I like React and node</p>
          <p>
            Checkout my github {' '}
            <a href="https://github.com/Fantominium">here</a>.
          </p>
        </section>

         <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
        </section> 

      </>
    )
}