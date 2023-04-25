import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';
import './DefaultLayoutnoSidebar.scss';
function DefaultLayoutnoSidebar({ children }) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className='sidebar'>
        </div>
        <div className='main'>{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default DefaultLayoutnoSidebar;
