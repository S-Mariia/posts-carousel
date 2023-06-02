import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from '@mui/material';

import { changeEmailToUserName } from 'shared/helpers/changeEmailToUserName';

const Comment = ({ comment: { email, body } }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 320,
        marginBottom: 1,
        borderRadius: 5,
        boxShadow: '3px 8px 14px rgba(173, 175, 176, 0.19)',
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#F43F5E' }} aria-label="comment">
            {email[0]}
          </Avatar>
        }
        title={changeEmailToUserName(email)}
      />
      <CardContent sx={{ paddingTop: 1 }}>
        <Typography variant="body2" align="justify">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
