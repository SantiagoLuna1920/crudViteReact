import { DatasProvider } from "./helpers/datasController";
import { PrincipalComponent } from "./PrincipalComponent";

function App () {

  return (
      <DatasProvider>
        <PrincipalComponent />
      </DatasProvider>
  );
}



// function App () {
  
//   return (
//     <>
//       <Gallery  />
//       <Gallery  />
//     </>
//   );
// }


// function Gallery() {
  
//   const [ index, setIndex ] = useState(0);
//   const [ showMore, setShowMore ] = useState(false);

//   let prevBool = (index+1) < sculptureList.length;
//   let backBool = index>0;

// function nextPage () {
//   ( prevBool ) && setIndex(n => n + 1 ); 
// }

// function backPage () {
//   (backBool) && setIndex(n => n - 1);
// }

// function showDetails () {
// setShowMore(e => !e);
// }
  
//   return (
//       <div>
//         <button onClick={nextPage} disabled={!prevBool}>
//         Next
//       </button>
//       <button onClick={backPage} disabled={!backBool}>
//         back
//       </button>
//       <h2><i>{sculptureList[index].name}</i> by {sculptureList[index].artist}</h2>
//       <h3>({index + 1} of {sculptureList.length})</h3>
//       <button onClick={showDetails}>
//         { showMore ? "Hide" : "Show" } details  
//       </button>
//         <p>
//         { showMore && sculptureList[index].description }
//         </p>
//       <img 
//         src={sculptureList[index].url}
//         alt={sculptureList[index].alt}
//       />
      
//       </div>
//   );
// }

/*

function App() {
  return (
    <div onClick={()=> alert("Hola xd")}>
      <PlaySong song="RAVE" />
    <Upload />
    </div>
  );
}


function Button ({ onclick, children }) {
  return (
    <button onClick={ (e) => {
      e.stopPropagation();
      onclick();
    } }>
    { children }
    </button>
  );
};

function PlaySong({ song }) {
  

  return (
    <Button onclick={()=> alert(`Playing ${song}s`)}>
      play "{song}"
    </Button>
  );
}

function Upload() {
  function handleUpload () {
    alert("Uploading!");
  }
  return (
    <Button onclick={ handleUpload}>
      Upload image.
    </Button>
  );
} */

export default App
