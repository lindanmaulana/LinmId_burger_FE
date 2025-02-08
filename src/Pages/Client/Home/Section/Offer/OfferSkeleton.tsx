import Skeleton from "react-loading-skeleton";

const OfferSkeleton = () => {
  return (
    <div className="flex items-center w-[560px] gap-4 p-4 h-48 rounded-md">
      <div className="h-40 w-60">
        <Skeleton circle className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-center w-full h-full gap-3">
        <Skeleton className="h-8 max-w-80" />
        <Skeleton className="h-8 max-w-20" />
        <Skeleton className="h-8 max-w-40" />
      </div>
    </div>
  );
};

export default OfferSkeleton;
