"use client";

import { RootState } from "@/redux/store";
import { setShowOverlay } from "@/redux/utils";
import { useDispatch, useSelector } from "react-redux";

const ItemModal = () => {
  const { item, showOverlay } = useSelector(
    (state: RootState) => state.setUtils
  );
  const dispatch = useDispatch();

  if (!showOverlay) return null;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setShowOverlay(false));
      }}
      className="fixed z-30 inset-0 rounded bg-black/40 flex items-center justify-center border border-muted"
    >
      <div className="max-w-lg w-full p-4 mx-auto bg-black">
        <p className="truncate w-full">
          Block Number: <span>{item?.blockNumber}</span>
        </p>
        <p className="truncate w-full">
          From: <span>{item?.from}</span>
        </p>
        <p className="truncate w-full">
          to: <span>{item?.to}</span>
        </p>
        <p className="truncate w-full">
          status:{" "}
          <span>{item?.txreceipt_status === "1" ? "Success" : "Error"}</span>
        </p>
        <p className="truncate w-full">
          Value: <span>{item?.value}</span>
        </p>
      </div>
    </div>
  );
};
export default ItemModal;
