import GlobalStyle from '~/layouts/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './layouts/DefaultLayout';
import { ShopContextProvider } from './context';
import DefaultLayoutnoSidebar from './layouts/DefaultLayoutNoSidebar';
import { useEffect, useLayoutEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)
function App() {
  // useLayoutEffect(()=>{
  //   window.onbeforeunload = function () {
  //     window.scrollTo(0, 0);
  //   }
  // })
  return (
    <GlobalStyle>
      <ShopContextProvider>
        <Router>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = DefaultLayout
                if(route.layout === 'unset'){
                  Layout = DefaultLayoutnoSidebar
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
      </ShopContextProvider>
    </GlobalStyle>
  );
}

export default App;
