import type Route from "./+types.index"
import { Link } from 'react-router';

export default function ({ params }: Route.ComponentProps) {
  return (
    <div>
      <h2>Index outside of the layout.</h2>
      This is coming from the index route with params.itemSlug typed correctly.
      <p style={{ fontWeight: 700 }}>params.itemSlug: {params.itemSlug}</p>
      <Link to={`/${params.itemSlug}/in-layout`}>Go to index inside the layout</Link>
    </div>
  );
}
