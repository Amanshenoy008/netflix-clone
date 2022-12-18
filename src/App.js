import { BrowserRouter , Routes , Route } from "react-router-dom"
import Row from "./row";
import requests from "./request";


function App() {


  return (
    <>
    <div className="flex  h-screen w-screen items-center justify-center flex-col ">
      <div>
    <Row title={'Netflix original'}  fetchUrl={requests.fetchnetflixoriginal} />
    </div>
    <div>
    <Row title={'Trending Now'} fetchUrl={requests.fetchtrending} />
    </div>
    <div>
    <Row title={'Top rated'} fetchURL={requests.fetchtoprated} />
    </div>
    <div>
     <Row title={'Action movies'} fetchURL={requests.fetchactionmovies} />
     </div>
     <div>
    <Row title={'comedymovies'} fetchURL={requests.fetchcomedymovies} />
    </div>
    <div>
    <Row title={'Horror movies'} fetchURL={requests.fetchhorrormovies} />
    </div>
    <div>
    <Row title={'Romance movies'} fetchURL={requests.fetchromancemovies} />
    </div>
    <div>
    <Row title={'documentaries'} fetchURL={requests.fetchdocumentaries} />
    </div>
   </div>
    </>
  );
}

export default App;
