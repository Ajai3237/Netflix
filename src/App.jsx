import Banner from "../components/Banner"
import Nav from "../components/Nav"
import Row from "../components/Row"
import requests from "./Request"
import '../components/Banner.css'
import "../components/Nav.css"


function App() {
  
  return (
    <>
      <Nav />
      <Banner fetchurl={requests.fetchNetflixOriginals} />
      <Row title={<span style={{ color: 'white' }}> TREN<span style={{color:'red'}}>DING</span></span>} fetchurl={requests.fetchTrending} />
      <Row title={<span style={{ color: 'white' }}> NETFLIX <span style={{color:"red"}}>ORIGINAL</span> </span>} fetchurl={requests.fetchNetflixOriginals} />
      <Row title={<span style={{ color: 'white' }}> TOP <span style={{color:"red"}}>MOVIES</span> </span>} fetchurl={requests.fetchTopRated} />
      <Row title={<span style={{ color: 'white' }}> ACTION <span style={{color : "red"}}>MOVIES</span>  </span>} fetchurl={requests.fetchActionMovies} />
      <Row title={<span style={{ color: 'white' }}> COMEDY <span style={{color:"red"}}>MOVIES</span></span>} fetchurl={requests.fetchComedyMovies} />
      <Row title={<span style={{ color: 'white' }}> HORROR <span style={{color:"red"}}>MOVIES</span></span>} fetchurl={requests.fetchHorrorMovies} />
      <Row title={<span style={{ color: 'white' }}> ROMANTIC <span style={{color:"red"}}>MOVIES</span></span>} fetchurl={requests.fetchRomanceMovies} />
      <Row title={<span style={{ color: 'white' }}> DOCUMENTARIES</span>} fetchurl={requests.fetchDocumentaries}/>
   
     
    </>
  )
}

export default App
