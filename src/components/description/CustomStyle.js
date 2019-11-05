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
    font-size: 2.6vh;
    padding: .5rem 2rem;
  }
`;