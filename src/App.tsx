import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "components/navbar/navbar";
import Footer from "components/footer/footer";
import AddressBookScreen from "screens/address-book/address-book";
import MainContainer from "./components/main-container/main-container";
import SettingsScreen from "./screens/settings/settings";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={1}>
      <Router>
        <CssBaseline />
        <Navbar />
        <MainContainer>
          <Switch>
            <Route path="/settings" component={SettingsScreen} />
            <Route path="/" component={AddressBookScreen} />
          </Switch>
        </MainContainer>
        <Footer />
      </Router>
    </SnackbarProvider>
  );
}

export default App;
