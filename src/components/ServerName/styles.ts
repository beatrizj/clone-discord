import styled from "styled-components";
import { ExpandMore } from 'styled-icons/material'

export const Container = styled.div`
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.68rem 0 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0.06rem 0 0;
  z-index: 2;
`

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
`

export const ExpandIcon = styled(ExpandMore)`
  width: 1.75rem;
  height: 1.75rem;
  color: var(--white);
  cursor: pointer;
`