import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  ListItem,
  List
} from "@mui/material";

const RightBar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }} p={2}>
      <Box sx={{ position: "fixed", width: "300"}}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup total={20} sx={{justifyContent: 'flex-start'}}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1915839458/photo/hawaiian-local-tour-guide-and-senior-client-looking-at-flowers-together-at-the-farmers-market.webp?b=1&s=170667a&w=0&k=20&c=x8qv5GiaHlJsbiGXY7hVYlgE5x4TQfe7WBP9mGb_Jq8="
              alt="Couldn't load"
            />
          </ImageListItem>
          <ImageListItem width={100}>
            <img
              src="https://media.istockphoto.com/id/1485050088/photo/senior-adult-black-female-tourist-admiring-london-during-her-solo-trip.webp?b=1&s=170667a&w=0&k=20&c=pam3At8tQS3ChkTCB81VOhva_9EVyMQAjOIoDTSs9Vg="
              alt="Couldn't load"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/2042539861/photo/joyful-friends-taking-a-selfie-on-vacation.webp?b=1&s=170667a&w=0&k=20&c=soAlyeRhxYjQixrNTu4nLatTkYfLgfsyNcNjlodqjT0="
              alt="Couldn't load"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar >
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>     
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
