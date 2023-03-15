import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import onlineMeeting from "../assets/online-meeting.png";
import checked from "../assets/checked-1.png";
import info from "../assets/INFO-1.png";

const MuiAccordion = () => {
  return (
    <div style={{ width: "70%" }}>
      <Accordion sx={{ padding: "20px" }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Box
                sx={{
                  backgroundColor: "#C6E9EB",
                  borderRadius: "50%",
                  width: "96px",
                  height: "96px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={onlineMeeting} alt="" />
              </Box>
            </Grid>
            <Grid xs={9}>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "22px",
                    textAlign: "left",
                    color: "#222221",
                    fontWeight: "700",
                  }}
                >
                  Application Status
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    textAlign: "left",
                    color: "#222221",
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat,
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </AccordionSummary>
        {/* Accordion Details */}
        <AccordionDetails>
          {/* Registration starts */}
          <Grid container spacing={2} marginBottom="1rem">
            <Grid xs={3}></Grid>
            <Grid container xs={9}>
              <Grid xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <img src={checked} alt="" />
                </Box>
              </Grid>
              <Grid xs={10}>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "22px",
                      textAlign: "left",
                      color: "#222221",
                      fontWeight: "700",
                    }}
                  >
                    Registration
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      color: "#222221",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Registration ends */}

          {/* Form Submit starts */}
          <Grid container spacing={2} marginBottom="1rem">
            <Grid xs={3}></Grid>
            <Grid container xs={9}>
              <Grid xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <img src={checked} alt="" />
                </Box>
              </Grid>
              <Grid xs={10}>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "22px",
                      textAlign: "left",
                      color: "#222221",
                      fontWeight: "700",
                    }}
                  >
                    Form Submit
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      color: "#222221",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Form Submit ends */}

          {/* Verification Starts */}
          <Grid container spacing={2} marginBottom="1rem">
            <Grid xs={3}></Grid>
            <Grid container xs={9}>
              <Grid xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <img src={info} alt="" />
                </Box>
              </Grid>
              <Grid xs={10}>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "22px",
                      textAlign: "left",
                      color: "#222221",
                      fontWeight: "700",
                    }}
                  >
                    Verification
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      color: "#222221",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Verification ends */}

          {/* Payment starts */}
          <Grid container spacing={2} marginBottom="1rem">
            <Grid xs={3}></Grid>
            <Grid container xs={9}>
              <Grid xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <img src={info} alt="" />
                </Box>
              </Grid>
              <Grid xs={10}>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "22px",
                      textAlign: "left",
                      color: "#222221",
                      fontWeight: "700",
                    }}
                  >
                    Payment
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      color: "#222221",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Payment ends */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
