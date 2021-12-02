import { BrowserRouter, Switch, Route } from "react-router-dom";
// Layout
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home"
function App() {
  return (
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <AppLayout>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                </Switch>
              </AppLayout>
            </Route>
          </Switch>
        </BrowserRouter>
  );
}

export default App;
