import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';
import Sidebar from '~/layouts/Sidebar';
import './DefaultLayout.scss';
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main'>{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
