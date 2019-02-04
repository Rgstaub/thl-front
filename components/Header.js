import Link from 'next/link';
import Nav from './Nav.js';

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a>THL</a>
      </Link>
      <Nav />
    </div>
  );
}
 
export default Header;