import RecordView from './component/RecordView';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarStyle from './component/NavbarStyle';
import Pdfstyle from './component/Pdfstyle';
function App() {
  return (
    <BrowserRouter>
      <NavbarStyle />
      <Switch>
        <Route path="/video">
          <RecordView />
        </Route>
        <Route path="/pdf">
          <Pdfstyle />
        </Route>
        <Route path="/">
          <RecordView/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
