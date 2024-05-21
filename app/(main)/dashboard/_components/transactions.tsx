"use client";

import { getTransactions } from "@/query/api-function";
import { useGetTransactions } from "@/query/queries";
import React, { useEffect, useState } from "react";

const Transactions = ({ address }: { address: `0x${string}` | undefined }) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useGetTransactions(
    "0xa83114A443dA1CecEFC50368531cACE9F37fCCcb"
  );

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full gap-5 h-full">
      {/* {data?.map((item) => (
        <div
          className="w-full text-sm border border-muted rounded overflow-hidden"
          key={item.blockNumber}
        >
          <div className="w-full sm:min-h-44 min-h-32 bg-muted"></div>
          <div className="space-y-3 p-4">
            <p className="p-2 rounded border border-muted w-fit">
              <BsEye />
            </p>
            <p className="w-full truncate" title={item.from}>
              From: {item.from}
            </p>
            <p className="w-full truncate" title={item.to}>
              To: {item.to}
            </p>
            <p className="w-full truncate" title={item.value}>
              Amount: {item.value}
            </p>
          </div>
        </div>
      ))} */}
    </div>
  );
};
export default Transactions;
