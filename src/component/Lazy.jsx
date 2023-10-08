import { lazy } from "react"; //l懒加载API
import React from "react";
import { Skeleton } from "antd-mobile";
export default function Laycoponent(Props) {
  const Component = lazy(() => import(`@/view/${Props.path}`));
  return (
    <React.Suspense
      fallback={
        <div className="h-[100vh]">
          <Skeleton.Title animated />
          <Skeleton.Paragraph lineCount={20} animated />
        </div>
      }
    >
      <Component />
    </React.Suspense>
  );
}
