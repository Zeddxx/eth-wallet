import { GrHistory, GrTransaction } from "react-icons/gr";
import { MdOutlineAccountBalance } from "react-icons/md";

export const DashboardItems = [
  {
    item: "Balance",
    title: "Check your wallet balance.",
    value: "balance",
    icon: <MdOutlineAccountBalance className="sm:h-5 sm:w-5 h-4 w-4" />,
  },
  {
    item: "Transactions",
    title: "Check your wallet Transactions.",
    value: "transactions",
    icon: <GrTransaction className="sm:h-5 sm:w-5 h-4 w-4" />,
  },
  {
    item: "Transactions List's",
    title: "See the transaction's histories.",
    value: "history",
    icon: <GrHistory className="sm:h-5 sm:w-5 h-4 w-4" />,
  },
];
