import logo from "./logo.svg";
import "./App.css";
import MuIAccordion from "./components/MuiAccordion/MuIAccordion";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MyProfile from "./components/MyProfile/MyProfile";

function App() {
  return (
    <div className="App" style={{ padding: "0px 100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <MyProfile />
        </Grid>
        <Grid item xs={9}>
          <MuIAccordion />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
