import { Outlet } from "react-router-dom";

export default function ProfileInfoContainer() {
  return (
    <div>
      <p to="infodata"></p>
      <h1>InfoData</h1>;
      <Outlet />
    </div>
  );
}
