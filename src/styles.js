import styled from "styled-components";

const gray = "#4F4F4F";
const lineColor = "#F7DF94";

export const AppContainer = styled.div`
  width: 85%;
  margin: 32px auto;
  max-width: 85%;
`;

export const Header = styled.header`
  width: 100%;
  font-family: Raleway;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  color: ${gray};
  display: flex;
  justify-content: flex-end;
  margin-bottom: 80px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  width: min-content;
`;

export const HeaderText = styled.div`
  padding-right: 11px;
`;

export const QuoteContainer = styled.div`
  width: 50%;
  height: max-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 8px 1fr;
`;

export const QuoteLine = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${lineColor};
`;

export const QuoteText = styled.div`
  margin-left: 99px;
  display: flex;
  align-items: center;
  font-family: Raleway;
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  color: #000000;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-left: 446px;
`;

export const AuthorContainer = styled.div`
  font-family: Raleway;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${gray};
`;

export const GenreContainer = styled.div`
  font-family: Raleway;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #828282;
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #828282;
  margin-top: 80px;
`;