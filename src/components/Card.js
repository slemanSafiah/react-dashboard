import { Stack } from "react-bootstrap";
import { Avatar, AvatarGroup } from "@mui/material";

function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="/static/images/avatar/1.png"
          alt="logo"
          width="40px"
          height="40px"
        />
      </div>
      <div className="card-desc">
        <Stack>
          <div className="card-desc-title">Team Members</div>
          <AvatarGroup max={4}>
            <Avatar
              sx={{ width: 20, height: 20 }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.png"
            />
            <Avatar
              sx={{ width: 20, height: 20 }}
              alt="Travis Howard"
              src="/static/images/avatar/1.png"
            />
            <Avatar
              sx={{ width: 20, height: 20 }}
              alt="Cindy Baker"
              src="/static/images/avatar/1.png"
            />
            <Avatar
              sx={{ width: 20, height: 20 }}
              alt="Agnes Walker"
              src="/static/images/avatar/1.png"
            />
            <Avatar
              sx={{ width: 20, height: 20 }}
              alt="Trevor Henderson"
              src="/static/images/avatar/1.png"
            />
          </AvatarGroup>
        </Stack>
        <Stack></Stack>
      </div>
    </div>
  );
}

export default Card;
