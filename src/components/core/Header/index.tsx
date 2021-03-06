import { Link } from 'gatsby';
import * as React from 'react';

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle = '' }: HeaderProps) => (
  <header
    style={{
      background: `#4b3621`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
