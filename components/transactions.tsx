"use client";

import { useInfiniteTransactions } from "@/query/queries";
import Card from "@/components/shared/card";
import MotionDiv from "@/components/animation/motion-div";
import { motion } from "framer-motion";
import ItemModal from "./item-modal";

const Transactions = ({ address }: { address: `0x${string}` | undefined }) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteTransactions({
      address: address!,
    });

  if (error) return <div>Error loading transactions</div>;
  if (isLoading) return <div>Loading...</div>;

  const transactions = data?.pages.flat() || [];

  return (
    <div className="relative h-[calc(100dvh-80px)] w-full">
      {transactions.length === 0 ? (
        <MotionDiv>
          <h1>No Transactions Yet!</h1>
        </MotionDiv>
      ) : (
        <div className="absolute flex w-full gap-4 max-w-5xl justify-center left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: ["-80%", "0%", "-80%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex flex-col flex-shrink-0 gap-4 sm:w-[22rem] w-[12rem] h-full overflow-hidden mx-auto"
          >
            {transactions.map((transaction) => (
              <Card key={transaction?.hash} item={transaction} />
            ))}
          </motion.div>
          <motion.div
            animate={{ y: ["0%", "-80%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex flex-col flex-shrink-0 gap-4 sm:w-[22rem] w-[12rem] mx-auto"
          >
            {transactions.map((transaction) => (
              <Card key={transaction?.hash} item={transaction} />
            ))}
          </motion.div>
          <motion.div
            animate={{ y: ["-80%", "0%", "-80%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex flex-col flex-shrink-0 gap-4 sm:w-[22rem] w-[12rem] mx-auto"
          >
            {transactions.map((transaction) => (
              <Card key={transaction?.hash} item={transaction} />
            ))}
          </motion.div>
        </div>
      )}

      <ItemModal />
    </div>
  );
};

export default Transactions;
