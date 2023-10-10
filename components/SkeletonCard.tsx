import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="card w-[240px] bg-base-100 shadow-xl">
      <figure className="mt-4">
        <Skeleton width={200} height={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex flex-col items-start gap-x-2 text-[15px] font-bold">
          <Skeleton  width={150}/>
          <Skeleton className="badge badge-warning text-[10px]" />
        </h2>
        <Skeleton count={3} />
      </div>
    </div>
  );
};

export default SkeletonCard;
