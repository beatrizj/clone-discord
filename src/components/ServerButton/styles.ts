import styled from 'styled-components'

import { Props } from '.'

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;

  background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--primary'};

  position: relative;
  cursor: pointer;

  > img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &::before {
    width: 0.56rem;
    height: 0.56rem;
    position: absolute;
    left: 1.06rem;
    top: calc(50% - 0.28rem);
    background-color: var(--white);
    border-radius: 50%;
    content: '';
    display: ${props => props.hasNotifications ? 'inline' : 'none'}
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 1rem;
    padding: 0 0.25rem;
    position: absolute;
    bottom: -0.25rem;
    right: -0.25rem;
    border-radius: 0.75rem;
    border: 0.25rem solid var(--quaternary);
    text-align: right;
    font-size: 0.81rem;
    font-weight: bold;
    color: var(--white);
    content: ${(props) => props.mentions && props.mentions};
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'}
  }

  transition: border-radius .2s, background-color .2s;

  &:active, &:hover {
    border-radius: 1rem;
    background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord'};
  }
`