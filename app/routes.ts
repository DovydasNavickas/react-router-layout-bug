import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes';

export const routes: RouteConfig = [
  index('./index.ts'),
  ...prefix(':itemSlug', [
    index('./routes/index.tsx'),
    layout('./routes/layouts/main.tsx', [
      route('in-layout', './routes/index-in-layout.tsx'),
    ]),
  ]),
];
