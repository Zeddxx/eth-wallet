"use client";

import { useInfiniteTransactions } from "@/query/queries";
import Card from "@/components/shared/card";
import useMeasure from "react-use-measure";
import MotionDiv from "@/components/animation/motion-div";
import { animate, useMotionValue, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const Transactions = ({ address }: { address: `0x${string}` | undefined }) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteTransactions({
      address: address!,
    });
  const [ref, { height }] = useMeasure();
  const yTranslation = useMotionValue(0);
  const isFetching = useRef(false);
  const totalHeight = useRef(0);

  const updateScroll = ({
    yTranslation,
    direction,
    duration,
  }: {
    yTranslation: MotionValue<number>;
    direction: "up" | "down";
    duration: number;
  }) => {
    const scrollDistance = (direction === "up" ? -1 : 1) * (height / 2 + 8);
    animate(yTranslation, scrollDistance, {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      onUpdate: async (latest) => {
        if (
          (direction === "up" && latest <= scrollDistance) ||
          (direction === "down" && latest >= scrollDistance)
        ) {
          if (hasNextPage && !isFetching.current) {
            isFetching.current = true;
            await fetchNextPage();
            isFetching.current = false;
            totalHeight.current += height / 2 + 8; // Adjust the total height for new items
          }
        }
      },
    });
  };

  useEffect(() => {
    updateScroll({ yTranslation, direction: "up", duration: 20 });
  }, [yTranslation, height, hasNextPage, fetchNextPage]);

  if (error) return <div>Error loading transactions</div>;
  if (isLoading) return <div>Loading...</div>;

  const transactions = data?.pages.flat() || [];

  return (
    <div className="relative min-h-screen w-full">
      {transactions.length === 0 ? (
        <MotionDiv>
          <h1>No Transactions Yet!</h1>
        </MotionDiv>
      ) : (
        <div className="absolute flex w-full gap-4 justify-center">
          <motion.div
            style={{ y: yTranslation }}
            ref={ref}
            className="flex flex-col gap-4 pt-52 w-[22rem] mx-auto"
          >
            {transactions.map((transaction) => (
              <Card key={transaction?.hash} item={transaction} />
            ))}
          </motion.div>
          <motion.div
            style={{ y: yTranslation }}
            ref={ref}
            className="flex flex-col gap-4 w-[22rem] mx-auto"
          >
            {transactions.map((transaction) => (
              <Card key={transaction?.hash} item={transaction} />
            ))}
          </motion.div>
          <motion.div
            style={{ y: yTranslation }}
            ref={ref}
            className="flex flex-col gap-4 pt-52 w-[22rem] mx-auto"
          >
            {transactions.map((transaction) => (
              <Card key={transaction?.hash} item={transaction} />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
