import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MyProfile = () => {
  /* ==== Styled LogOutButton starts ==== */
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
  /* ==== Styled LogOutButton starts ==== */

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        py: "42px",
        justifyContent: "space-between",
      }}
    >
      {/*==== container top starts ====*/}
      <Box>
        {/*==== user name starts ====*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
        </Box>
        {/*==== user name ends ====*/}

        {/*==== user info starts ====  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {/*==== user info container starts ====  */}
          <Box>
            {/*==== Phone Number starts ====  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <PhoneInTalkRoundedIcon
                sx={{ background: "#e4e4e4", p: "5px", borderRadius: "50%" }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  color: "#222221",
                  marginLeft: "10px",
                }}
              >
                +55 000 222 444
              </Typography>
            </Box>
            {/*==== Phone Number ends ====  */}
          </Box>
          {/*==== user info container ends ====  */}
        </Box>

        {/*==== user info ends ====  */}
      </Box>
      {/*==== container top ends ====*/}

      {/*==== container bottom starts ====*/}
      <Box>
        {/*==== LogOutButton starts ====*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LogOutButton variant="contained" disableRipple>
            Log Out
          </LogOutButton>
        </Box>
        {/*==== LogOutButton ends ====*/}
      </Box>
      {/*==== container bottom ends ====*/}
    </Paper>
  );
};

export default MyProfile;
