"use client";

import { useGetAccountBalance } from "@/query/queries";
import { useAccount } from "wagmi";
import { motion } from "framer-motion";
import { CardVariants } from "@/animations";

const BalanceComponent = ({
  address,
}: {
  address: `0x${string}` | undefined;
}) => {
  const { data, isLoading } = useGetAccountBalance(address);
  const { address: signature } = useAccount();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <motion.div
      variants={CardVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="w-max flex flex-col items-center space-y-2"
    >
      <h1 className="h1 flex items-center gap-x-2">
        Hi, User! 👋
      </h1>
      <p className="max-w-sm truncate p-2 rounded border text-sm border-muted bg-muted">{signature}</p>
      <h2 className="h1 p-6 border border-muted rounded">
        {data.result} <span className="text-muted-foreground">ETH</span>
      </h2>
      <p className="capitalize text-muted-foreground text-sm">
        current wallet balance
      </p>
    </motion.div>
  );
};
export default BalanceComponent;
