import GlobalStyle from '~/layouts/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './layouts/DefaultLayout';
import { ShopContextProvider } from './context';
import DefaultLayoutnoSidebar from './layouts/DefaultLayoutNoSidebar';
function App() {
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
