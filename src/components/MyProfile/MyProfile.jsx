import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { height } from "@mui/system";

const MyProfile = () => {
  const xsBreakpoint = "600px";
  const mdBreakpoint = "960px";

  const LogOutButton = styled(Button)({
    textTransform: "none",
    fontSize: 16,
    padding: "10px 40px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#FFE6E6",
    color: "#DA291C",
    "&:hover": {
      backgroundColor: "#dcc0c0",
    },
    "&:active": {
      border: "2px solid",
      fontWeight: "bold",
    },
  });

  const PaperContainer = styled(Paper)({
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100vw",
    height: "inherit",
    [`@media (min-width: ${mdBreakpoint})`]: {
      width: "inherit",
      height: "80vh",
    },
  });

  const Name = styled(Typography)({
    fontSize: "20px",
    color: "#222221",
    fontWeight: "700",
  });

  const Phone = styled(Typography)({
    fontSize: "16px",
    color: "#222221",
  });

  const LogOutCOntainer = styled(Box)({
    display: "none",
    paddingBottom: "20px",
    [`@media (min-width: ${xsBreakpoint})`]: {
      display: "block",
    },
  });

  return (
    <PaperContainer
      sx={{
        width: {
          xs: "100vw",
          md: "inherit",
        },
        height: {
          xs: "inherit",
          md: "80vh",
        },
      }}
    >
      <Box>
        <Grid container>
          <Grid item md={12} xs={6}>
            <Name>Francesca Lai</Name>
          </Grid>
          <Grid item md={12} xs={6}>
            <Phone>+55 000 222 444</Phone>
          </Grid>
        </Grid>
      </Box>
      <LogOutCOntainer>
        <LogOutButton variant="contained">Log Out</LogOutButton>
      </LogOutCOntainer>
    </PaperContainer>
  );
};

export default MyProfile;
