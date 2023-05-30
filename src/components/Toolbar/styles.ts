import styled from 'styled-components';

export const Divider = styled.div`
  width: 1px;
  height: 1.4rem;
  background-color: gray;
  margin: 0 0.25rem;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  padding: 8px;
  background-color: #242424;
`;
export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background-color: black;
  }
  &:disabled {
    color: gray;
    cursor: not-allowed;
    &:hover {
      background: transparent;
    }
  }
`;
