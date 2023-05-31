import tw, { styled } from 'twin.macro';

export const Divider = styled.div`
  ${tw`divider divider-horizontal mx-0`}
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #242424;
`;
export const IconButton = styled.button`
  ${tw`btn btn-primary btn-circle`}
`;
