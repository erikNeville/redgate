import styled from 'styled-components';

export const DescriptionDiv = styled.div`
  background: ${props => props.theme.primary};
  display: flex;
  flex-flow: column;
  padding-top: 1rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  min-height: 30vh;

  .content {
    font-size: 18px;
    padding: 0.5rem 2rem;
  }

  .notice {
    font-size: 24px;
  }

  .notice-info {
    font-size: 18px;
  }
`;
