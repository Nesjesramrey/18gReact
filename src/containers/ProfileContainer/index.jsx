import { Outlet } from "react-router-dom";

export default function InfoContainer() {
  return (
    <div>
      <p to="infodata">Profile</p>

      <Outlet />
    </div>
  );
}
