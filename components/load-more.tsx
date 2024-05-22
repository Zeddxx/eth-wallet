"use client";

import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

interface Props {
  fetchNextPage: () => void;
}

const LoadMore = ({ fetchNextPage }: Props) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div ref={ref} className="container mt-6 px-4 w-full flex justify-center">
      <span className="w-fit mx-auto">
        <FaSpinner className="animate-spin h-8 w-8" />
      </span>
    </div>
  );
};
export default LoadMore;
