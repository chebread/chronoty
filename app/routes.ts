import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('set', 'routes/set.tsx'),
  route('running', 'routes/running.tsx'),
] satisfies RouteConfig;
