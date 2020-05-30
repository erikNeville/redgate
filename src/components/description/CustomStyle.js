import styled from 'styled-components';

export const DescriptionDiv = styled.div`
  background: ${(props) => props.theme.primary};
  display: flex;
  flex-flow: column;
  padding-top: 1rem;
  max-width: 1120px;
  margin: auto;
  padding-right: 20px;
  padding-left: 20px;
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
