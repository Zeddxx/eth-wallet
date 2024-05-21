import { IResults, ITransactions } from "@/types";
import axios from "axios";

export async function getTransactions(
  pageParam = 1,
  address: `0x${string}` | undefined
) {
  try {
    if (!address) return;
    const { data } = await axios.get(`https://api.etherscan.io/api`, {
      params: {
        module: "account",
        action: "txlist",
        address: address,
        startblock: 0,
        endblock: 99999999,
        page: pageParam,
        offset: 12,
        sort: "asc",
        apiKey: "7UY4JCAXTESKSX7U4MKJ4SHRT3MG8GRRR3",
      },
    });
    return data.results as IResults[];
  } catch (error) {
    console.log(error);
    throw Error;
  }
}

export async function getBalance(address: `0x${string}` | undefined) {
  try {
    if (!address) return;
    const { data } = await axios.get(
      `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=7UY4JCAXTESKSX7U4MKJ4SHRT3MG8GRRR3`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw Error;
  }
}
