import {lazy} from "react";

const Preview = lazy(() => import('./components/Preview/Preview'));

export const Loadable = {
  Preview,
}