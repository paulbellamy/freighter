import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { APPLICATION_STATE } from "statics";

import { applicationStateSelector } from "popup/ducks/authServices";

import { HEADER_HEIGHT } from "popup/constants";
import { COLOR_PALETTE } from "popup/styles";

const HeaderEl = styled.header`
  background: ${COLOR_PALETTE.primaryGradient};
  font-family: "Muli";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.25rem 2rem;
  text-align: left;
  height: ${HEADER_HEIGHT}px;
`;

const HeaderH1 = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: 200;
  line-height: 1;
  margin: 0;
`;

const NetworkEl = styled.h3`
  opacity: 0.5;
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1;
`;

type HeaderProps = {
  className?: string;
};

export const Header = ({ className, ...props }: HeaderProps) => {
  const applicationState = useSelector(applicationStateSelector);

  if (applicationState === APPLICATION_STATE.APPLICATION_LOADING) {
    return null;
  }

  return (
    <HeaderEl className={className} {...props}>
      <HeaderH1>Lyra</HeaderH1>
      <NetworkEl>Test net</NetworkEl>
    </HeaderEl>
  );
};
