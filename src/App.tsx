import { Banner, Cases, Clients, Header, Footer } from './components';
import { Helmet } from "react-helmet";
import { thumbnails } from './assets/Images/index';

function App() {

  console.log('thumbnails:', thumbnails);


  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Bilal Demirer" />
        <title>Dept Task</title>
        <link rel="canonical" href="https://www.deptagency.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
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
