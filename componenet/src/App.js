import logo from './logo.svg';
import './App.css';
import News from './component/News';
const wl=["hello","thankyou","welcome","good morning","good evening"]
const para=["21+ Free Image Sites to Help You Find Photos You Would Actually Use in Your Marketing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","The short story is a crafted form in its own right. Short stories make use of plot, resonance and other dynamic components as in a novel, but typically to a lesser degree. While the short story is largely distinct from the novel or novella/short novel, authors generally draw from a common pool of literary techniques.[citation needed] The short story is sometimes referred to as a genre","Determining what exactly defines a short story remains problematic.[3] A classic definition of a short story is that one should be able to read it in one sitting, a point most notably made in Edgar Allan Poe's essay The Philosophy of Composition (1846).[4] H. G. Wells described the purpose of the short story as ","The jolly art, of making something very bright and moving; it may be horrible or pathetic or funny or profoundly illuminating, having only this essential, that it should take from fifteen to fifty minutes to read aloud.[5] According to William Faulkner, a short story is character-driven and a writer's job is to trot along behind him with a paper and pencil trying to keep up long enough to put down what he says and does,A short story is a piece of prose fiction. It can typically be read in a single sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales,"]
function App() {
  return (
  <>
    <News wl1={wl[0]} p={para[2]}/>
  </>
  );
}

export default App;
