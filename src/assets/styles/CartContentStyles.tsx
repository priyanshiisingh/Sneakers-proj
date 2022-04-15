import styled from "styled-components";

const PrimaryDiv = styled.div`
  width: 310px;
  margin-right: 17px;
  margin-left: 17px;
`;

const SecondaryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.img`
  max-width: 50px;
  border-radius: 3px;
`;

const ProductName = styled.p`
  color: grey;
  line-height: 2px;
`;

export { PrimaryDiv, SecondaryDiv, Image, ProductName };
