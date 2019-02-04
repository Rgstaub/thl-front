import Link from 'next/link';
import NavItem from './styles/NavItem.js';

const Nav = () => {
  return (
    <div>
      <NavItem>
        <Link href="/dashboard">
          <a>dashboard</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/team">
          <a>team</a>
        </Link>        
      </NavItem>
      <NavItem>
        <Link href="/streams">
          <a>streams</a>
        </Link>     
      </NavItem>
      <NavItem>
        <Link href="/social">
          <a>social</a>
        </Link>
      </NavItem>
    </div>
  );
}
 
export default Nav;