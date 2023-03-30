import logo from "./logo.svg";
import "./App.css";
import MuIAccordion from "./components/MuiAccordion/MuIAccordion";

import Grid from "@mui/material/Grid";
import MyProfile from "./components/MyProfile/MyProfile";
// import MyProfile from "./components/MyProfile/nMyProfile";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item md={3}>
          <MyProfile />
        </Grid>
        <Grid item md={9}>
          <MuIAccordion />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
