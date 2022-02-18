import { Stack } from "react-bootstrap";
import { Avatar, AvatarGroup } from "@mui/material";
import ProgressBar from "./ProgressBar";

function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="static/images/avatar/1.png"
          alt="logo"
          width="40px"
          height="40px"
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div className="card-desc">
        <Stack gap={2}>
          <Stack gap={1}>
            <div className="card-desc-title">Team Members</div>
            <div className="avatar-group ">
              <AvatarGroup max={4} total={4}>
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
            </div>
          </Stack>
          <Stack gap={2}>
            <div className="card-desc-title flex-title">
              <div>Project Completion</div>
              <div>32%</div>
            </div>
            <ProgressBar />
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default Card;
