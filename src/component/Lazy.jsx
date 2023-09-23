import { lazy } from "react"; //l懒加载API
import React from "react";
import { Skeleton } from "antd-mobile";
export default function Laycoponent(Props) {
  const Component = lazy(() => import(`@/view/${Props.path}`));
  return (
    <React.Suspense
      fallback={
        <div>
          <Skeleton.Title animated />
          <Skeleton.Paragraph lineCount={10} animated />
        </div>
      }
    >
      <Component />
    </React.Suspense>
  );
}
