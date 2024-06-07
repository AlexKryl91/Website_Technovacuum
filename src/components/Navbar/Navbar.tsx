import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <header className="header">
    //   <div className="header__inner">
    //     <a href="/" className="header__logo logo">
    //       <img src="" alt="" className="logo__image" />
    //     </a>
    //     <nav className="header__menu">
    //       <ul className="header__menu-list">
    //         <li className="header__menu-item">
    //           <Link to={'/about'}>About</Link>
    //           <Link to={'/shop'}>Shop</Link>
    //           {/* <a href="" className="header__menu-link"></a> */}
    //         </li>
    //       </ul>
    //     </nav>
    //     <button
    //       className="header__button button button--login"
    //       type="button"
    //     ></button>
    //   </div>
    // </header>
    <div>
      <li>
        <Link to={'/about'}>About Us</Link>
      </li>
      <li>
        <Link to={'/contacts'}>Contacts</Link>
      </li>
    </div>
  );
};

export default Navbar;
