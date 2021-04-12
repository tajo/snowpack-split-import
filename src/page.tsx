import * as React from "react";

const Button = React.lazy(() => import("./button"));

const Page = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Button />
  </React.Suspense>
);

export default Page;
