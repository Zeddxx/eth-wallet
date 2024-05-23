import { ConnectButton } from "@rainbow-me/rainbowkit";
import { HtmlHTMLAttributes } from "react";
import "@rainbow-me/rainbowkit/styles.css"

const WalletConnect = ({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={className} {...props}>
      <ConnectButton
        showBalance={true}
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "avatar",
        }}
        chainStatus={{
          smallScreen: "icon",
          largeScreen: "icon",
        }}
      />
    </span>
  );
};
export default WalletConnect;
