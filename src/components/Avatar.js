import { Avatar } from "@mui/material";
import "./components.style.css";

function AvatarComp() {
  return (
    <div className="avatar-block">
      <div className="avatar-description">
        <div className="avatar-title">Diane Ward</div>
        <div className="avatar-title-desc">Product Manager</div>
      </div>
      <Avatar alt="Profile Pic" src="/static/images/avatar/1.png" />
    </div>
  );
}

export default AvatarComp;
