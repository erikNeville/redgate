import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 30px;
  padding: 0 0 2rem 2rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      Footer will go on bottom
    </FooterWrapper>
  );
};

export default Footer;
