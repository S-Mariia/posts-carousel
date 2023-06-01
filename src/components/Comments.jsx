import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from '@mui/material';

import { changeEmailToUserName } from 'shared/helpers/changeEmailToUserName';

const Comments = ({ comments }) => {
  return (
    <Grid
      item
      style={{ flexBasis: '360px', height: '500px', overflow: 'scroll' }}
    >
      {comments.map(({ email, body, id }) => (
        <Card
          variant="outlined"
          sx={{
            maxWidth: 340,
            marginBottom: 1,
            borderRadius: 5,
            boxShadow: '3px 8px 14px rgba(173, 175, 176, 0.19)',
          }}
          key={id}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: '#F43F5E' }} aria-label="comment">
                {email[0]}
              </Avatar>
            }
            title={changeEmailToUserName(email)}
            // sx={{ backgroundColor: '#CCE4FB' }}
          />
          <CardContent sx={{ paddingTop: 1 }}>
            <Typography variant="body2" align="justify">
              {body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default Comments;
