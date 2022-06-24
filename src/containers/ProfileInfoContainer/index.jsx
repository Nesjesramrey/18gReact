import { Outlet } from "react-router-dom";

export default function ProfileInfoContainer() {
  return (
    <div>
      <p to="infodata"></p>

      <Outlet />
    </div>
  );
}
