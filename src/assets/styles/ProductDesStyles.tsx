import styled from "styled-components";

const PrimaryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5% 15% 5% 15%;
  width: 100%;
  min-height: 450px;

  @media (max-width: 970px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
`;

const TertiaryDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 970px) {
    width: 100%;
  }
`;

const ColouredHeader = styled.p`
  color: #ff9100;
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const ProductName = styled.h3`
  font-weight: 700;
  font-size: 2em;
  line-height: 35px;
  color: black;
  margin-bottom: 25px;
  max-width: 70%;
`;

const ProductDescription = styled.p`
  min-width: auto;
  color: #6c757d;
  margin-bottom: 20px;
  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

const InfoDiv = styled.div`
  min-width: 50%;
  @media (max-width: 970px) {
    width: 95%;
  }
`;

const CarouselDiv = styled.div`
  width: 330px;
  @media (min-width: 1280px) {
    width: 450px;
  }
  @media (max-width: 970px) {
    width: 100%;
    max-height: 50%;
  }
`;

const ProductPrice = styled.span`
  font-size: 1.3em;
  font-weight: bolder;
  color: black;
`;

const StrikedPrice = styled.span`
  font-size: 0.8em;
  font-weight: bold;
  color: #bcb8b1;
`;

const Pricing = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 20px;
  @media (max-width: 970px) {
    flex-direction: row;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  @media (max-width: 970px) {
    flex-direction: column;
  }
`;

const Ranger = styled.div`
  background: #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3;
  width: 35%;
  @media (max-width: 970px) {
    width: 100%;
  }
`;

const ControlBtn = styled.div`
  width: 60%;
  @media (max-width: 970px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export {
  PrimaryDiv,
  SecondaryDiv,
  TertiaryDiv,
  ColouredHeader,
  ProductName,
  ProductDescription,
  InfoDiv,
  CarouselDiv,
  ProductPrice,
  StrikedPrice,
  Pricing,
  Controls,
  Ranger,
  ControlBtn,
};
