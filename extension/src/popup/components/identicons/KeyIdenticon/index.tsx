import React from "react";

import { truncatedPublicKey } from "helpers/stellar";

import { IdenticonImg } from "../IdenticonImg";

import "./styles.scss";

interface IdenticonWrapperElProps {
  customSize?: {
    dimension: string;
    padding: string;
  };
  isSmall?: boolean;
}

interface KeyIdenticonProps extends IdenticonWrapperElProps {
  publicKey: string;
}

export const KeyIdenticon = ({
  publicKey = "",
  isSmall = false,
  customSize,
  ...props
}: KeyIdenticonProps) => {
  const shortPublicKey = truncatedPublicKey(publicKey);
  const customStyle = {
    ...(isSmall
      ? {
          "--Icon-padding": "0.2rem",
          "--Icon-dimension": "1.5rem",
        }
      : {}),
    ...(customSize
      ? {
          "--Icon-padding": customSize.padding,
          "--Icon-dimension": customSize.dimension,
        }
      : {}),
  } as React.CSSProperties;

  return (
    <div className="KeyIdenticon">
      <div className="KeyIdenticon--icon" style={customStyle}>
        <IdenticonImg publicKey={publicKey} />
      </div>
      <span {...props}>{shortPublicKey}</span>
    </div>
  );
};
