import { GlobalStyle } from './GlobalStyle';
import { DetailsPage } from './pages/DetailsPage';
import { Homepage } from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Homepage/>
      {/* <DetailsPage/> */}
    </div>
  );
}

export default App;
