import { Outlet } from "react-router-dom";

export function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <Outlet />
    </>
  );
}
