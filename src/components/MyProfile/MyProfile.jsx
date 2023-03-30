import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MyProfile = () => {
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
  return (
    <Paper
      sx={{
        textAlign: "center",
        width: {
          xs: "100vw",
          md: "inherit",
        },
        height: {
          xs: "inherit",
          md: "80vh",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Grid container>
          <Grid item md={12} xs={6}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",

                color: "#222221",
                fontWeight: "700",
              }}
            >
              Francesca Lai
            </Typography>
          </Grid>
          <Grid item md={12} xs={6}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                color: "#222221",
              }}
            >
              +55 000 222 444
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        item
        md={12}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          paddingBottom: "20px",
        }}
      >
        <LogOutButton variant="contained">Log Out</LogOutButton>
      </Box>
    </Paper>
  );
};

export default MyProfile;
