import styled from "styled-components";

const gray = "#4F4F4F";
const lineColor = "#F7DF94";

export const AppContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 32px;
  max-width: 85%;
  position: relative;
  min-height: 100vh;
  padding-bottom: 10px;
`;

export const AppAuthorContainer = styled(AppContainer)`
  padding-bottom: 40px;
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
  margin: 0 auto;
  display: grid;
  grid-template-columns: 8px 1fr;
  grid-template-rows: max-content 1fr;
  margin-bottom: 100px;

  .author-name {
    width: 100%;
    margin-bottom: 100px;
    font-family: Raleway;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #333333;
  }

  .infoContainer {
    grid-column: 1 / 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
    margin-left: 56px;
    width: 100%;
    padding: 29px 50px;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
      background: #333333;

      .authorContainer {
        transition: 0.3s;
        color: #f2f2f2;
      }

      .arrow {
        display: block;
      }
    }

    .arrow {
      display: none;
      color: white;
    }

    @media (max-width: 600px) {
      margin-left: 20px;
    }
  }

  @media (max-width: 600px) {
    width: 90%;
  }
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

  @media (max-width: 600px) {
    margin-left: 50px;
  }
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
  position: absolute;
  bottom: 15px;
`;
