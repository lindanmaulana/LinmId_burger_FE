import Skeleton from "react-loading-skeleton";

const SkeletonFood = () => {
  return (
    <div className="h-[440px] rounded-2xl overflow-hidden">
      <div className="h-[240px] rounded-bl-[50px] overflow-hidden -mb-12 z-10 relative">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="h-[244px]">
        <Skeleton className="w-full h-full" baseColor="#222831" />
      </div>
    </div>
  );
};

export default SkeletonFood;
