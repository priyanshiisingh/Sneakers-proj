import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  @media (max-width: 970px) {
    display: none;
  }
`;

const LI = styled.li`
  color: grey;
  margin: 18px;
`;

const LinkStyle = styled.a`
  &:hover {
    text-decoration: underline;
    text-decoration-style: solid;
    text-underline-offset: 46px;
    text-decoration-color: #ff7900;
    text-decoration-thickness: 5px;
  }
`;
export { UL, LI, LinkStyle };
