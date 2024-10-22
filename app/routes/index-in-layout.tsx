import type Route from "./+types.index-in-layout"
import { Link } from 'react-router';

export default function ({ params }: Route.ComponentProps) {
  return (
    <div>
      <h2>Index inside the layout.</h2>
      This is coming from the index-in-layout route with params.itemSlug typed correctly.
      <p style={{ fontWeight: 700 }}>params.itemSlug: {params.itemSlug}</p>
      <Link to={`/${params.itemSlug}`}>Go to route outside of the layout</Link>
    </div>
  );
}
