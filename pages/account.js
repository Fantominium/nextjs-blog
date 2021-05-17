import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export default function Account() {
  return (
    <div>
      <p>This is the Account page.</p>
      <p>
        <Link href="/profile">
          <a>Go: Profile</a>
        </Link>
      </p>
    </div>
  );
}

Account.Layout = Layout;