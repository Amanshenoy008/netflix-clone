import Row from "./row";
import requests from "./request";


function App() {


  return (
    <>
    <div className="flex  h-screen w-screen items-center justify-center flex-col ">
    <div className=" ">
    <Row title={'Netflix original'}  fetchUrl={requests.fetchnetflixoriginal} />
    </div>
    <div>
    <Row title={'Trending Now'} fetchUrl={requests.fetchtrending} />
    </div>
  
   </div>
    </>
  );
}

export default App;
