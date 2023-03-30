import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import onlineMeeting from "../../assets/online-meeting.png";
import checked from "../../assets/checked-1.png";
import info from "../../assets/INFO-1.png";
import styled from "@emotion/styled";

const MuiAccordion = () => {
  const xsBreakpoint = "600px";
  const mdBreakpoint = "960px";
  const ImageContainer = styled(Box)({
    backgroundColor: "#C6E9EB",
    borderRadius: "50%",
    width: "96px",
    height: "96px",
    [`@media (max-width: ${xsBreakpoint})`]: {
      width: "48px",
      height: "48px",
    },
    [`@media (min-width: ${mdBreakpoint})`]: {
      width: "96px",
      height: "96px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const Title = styled(Typography)({
    textAlign: "left",
    color: "#222221",
    fontWeight: "700",
    fontSize: "22px",
  });

  const Desc = styled(Typography)({
    textAlign: "left",
    color: "#222221",
    fontSize: "16px",
  });

  const SummaryImageContainer = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  });

  const ResponsiveGrid = styled(Grid)({
    display: "block",
    [`@media (max-width: ${xsBreakpoint})`]: {
      display: "none",
    },
  });

  return (
    <div>
      <Accordion sx={{ padding: "20px" }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ImageContainer>
                <img src={onlineMeeting} alt="" />
              </ImageContainer>
            </Grid>
            <Grid item xs={9}>
              <Box>
                <Title> Application Status</Title>
              </Box>
              <Box>
                <Desc>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat,
                </Desc>
              </Box>
            </Grid>
          </Grid>
        </AccordionSummary>
        {/* Accordion Details */}
        <AccordionDetails>
          {/* Registration starts */}
          <Grid container spacing={2} marginBottom="1rem">
            <ResponsiveGrid item md={3} />
            <Grid container item md={9}>
              <Grid item xs={2}>
                <SummaryImageContainer>
                  <img src={checked} alt="" />
                </SummaryImageContainer>
              </Grid>
              <Grid item xs={10}>
                <Box>
                  <Title sx={{ lineHeight: 1 }}>Registration</Title>
                </Box>
                <Box>
                  <Desc>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </Desc>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Registration ends */}
          {/* Form Submit starts */}
          <Grid container spacing={2} marginBottom="1rem">
            <ResponsiveGrid item md={3} />
            <Grid container item md={9}>
              <Grid item xs={2}>
                <SummaryImageContainer>
                  <img src={checked} alt="" />
                </SummaryImageContainer>
              </Grid>
              <Grid item xs={10}>
                <Box>
                  <Title sx={{ lineHeight: 1 }}>Form Submit</Title>
                </Box>
                <Box>
                  <Desc>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </Desc>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Form Submit ends */}
          {/* Verification Starts */}
          <Grid container spacing={2} marginBottom="1rem">
            <ResponsiveGrid item md={3} />
            <Grid container item md={9}>
              <Grid item xs={2}>
                <SummaryImageContainer>
                  <img src={info} alt="" />
                </SummaryImageContainer>
              </Grid>
              <Grid item xs={10}>
                <Box>
                  <Title sx={{ lineHeight: 1 }}>Verification</Title>
                </Box>
                <Box>
                  <Desc>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </Desc>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* Verification ends */}
          {/* Payment starts */}
          <Grid container spacing={2} marginBottom="1rem">
            <ResponsiveGrid item md={3} />
            <Grid container item md={9}>
              <Grid item xs={2}>
                <SummaryImageContainer>
                  <img src={info} alt="" />
                </SummaryImageContainer>
              </Grid>
              <Grid item xs={10}>
                <Box>
                  <Title sx={{ lineHeight: 1 }}>Payment</Title>
                </Box>
                <Box>
                  <Desc>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </Desc>
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
