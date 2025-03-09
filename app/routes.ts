import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/index-page.tsx'),

  route('/*', 'routes/not-found-page.tsx'),
] satisfies RouteConfig;
