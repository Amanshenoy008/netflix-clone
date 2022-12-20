import Row from "./row";
import requests from "./request";
import Banner from './banner'

function App() {


  return (
    <>
    <div className="  ">
      <div className=" ">
      <Banner />
      </div>
    <div className="  ">
    <Row title={'Netflix original'}  fetchUrl={requests.fetchnetflixoriginal} islargerow={true} />
    </div>
    <div>
    <Row title={'Trending Now'} fetchUrl={requests.fetchtrending} />
    </div>
    <div>
    <Row title={'Top rated'} fetchUrl={requests.fetchtoprated} />
    </div>
    <div>
    <Row title={'Action movies'} fetchUrl={requests.fetchactionmovies} />
    </div>
    <div>
    <Row title={'Comedy Movies'} fetchUrl={requests.fetchcomedymovies} />
    </div>
    <div>
    <Row title={'Horror Movies'} fetchUrl={requests.fetchhorrormovies} />
    </div>
    <div>
    <Row title={'Romance Movies'} fetchUrl={requests.fetchromancemovies} />
    </div>
    <div>
    <Row title={'Documentaries'} fetchUrl={requests.fetchdocumentaries} />
    </div>
   </div>
    </>
  );
}

export default App;
