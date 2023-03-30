import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { height } from "@mui/system";

const MyProfile = () => {
  const mdBreakpoint = "900px";

  const PaperContainer = styled(Paper)({
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "inherit",
    height: "80vh",
    [`@media (max-width: ${mdBreakpoint})`]: {
      width: "100vw",
      height: "inherit",
    },
  });
  const LogOutContainer = styled(Box)({
    display: "block",
    paddingBottom: "20px",
    [`@media (max-width: ${mdBreakpoint})`]: {
      display: "none",
    },
  });
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

  const Name = styled(Typography)({
    fontSize: "20px",
    color: "#222221",
    fontWeight: "700",
  });

  const Phone = styled(Typography)({
    fontSize: "16px",
    color: "#222221",
  });

  return (
    <PaperContainer>
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
      <LogOutContainer>
        <LogOutButton variant="contained">Log Out</LogOutButton>
      </LogOutContainer>
    </PaperContainer>
  );
};

export default MyProfile;
