import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "components/navbar/navbar";
import Footer from "components/footer/footer";
import AddressBookScreen from "screens/address-book/address-book";
import MainContainer from "./components/main-container/main-container";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <MainContainer>
        <AddressBookScreen />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
