"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getBalance, getTransactions } from "@/query/functions";

export const useInfiniteTransactions = ({
  address,
}: {
  address: `0x${string}`;
}) => {
  return useInfiniteQuery({
    queryKey: ["transactions", address],
    queryFn: ({ pageParam }) => getTransactions({ pageParam, address }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage?.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });
};

export const useGetAccountBalance = (address: `0x${string}` | undefined) => {
  return useQuery({
    queryKey: ["account_balance"],
    queryFn: () => getBalance(address),
  });
};
