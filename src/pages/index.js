import asyncRoute from '../lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const About = asyncRoute(() => import('./About'));
export const NotFound = asyncRoute(() => import('./NotFound'));
