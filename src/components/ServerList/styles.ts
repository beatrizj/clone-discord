import styled from "styled-components";

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 0.68rem 0;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Separator = styled.div`
  width: 2rem;
  border-bottom: 0.125rem solid var(--quaternary);

  margin-bottom: 0.5rem
`