import type Route from "./+types.main"
import { Outlet } from 'react-router';

export default function ({ params }: Route.ComponentProps) {
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        This is coming from the layout, effectively with itemSlug inside the params, but no types for the itemSlug.
        <p style={{ fontWeight: 700 }}>params.itemSlug: {params.itemSlug}</p>
      </div>
      <Outlet />
    </div >
  );
}
