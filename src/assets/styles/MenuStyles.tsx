import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    display: none;
  }
`;

const LI = styled.li`
  color: grey;
  margin: 18px;
`;

const Link = styled.a`
  text-decoration: none;
`;
export { UL, LI, Link };
