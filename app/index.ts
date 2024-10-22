import { redirect, type LoaderFunctionArgs } from 'react-router';

export function loader() {
  return redirect('/t-shirt-or-whatever-item');
}
