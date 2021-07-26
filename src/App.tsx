import { Banner, Cases, Clients, Header, Footer } from './components';
import { Helmet } from "react-helmet";

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Bilal Demirer" />
        <title>Dept Task</title>
        <link rel="canonical" href="https://www.deptagency.com/" />
      </Helmet>
      <Banner>
        <Header />
      </Banner>
      <Cases />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
