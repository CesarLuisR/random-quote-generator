import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppContainer,
  AuthorContainer,
  Header,
  HeaderContent,
  HeaderText,
  InfoContainer,
  QuoteContainer,
  QuoteLine,
  QuoteText,
  GenreContainer,
  Footer,
} from "./styles";

const App = () => {
  const [quote, setQuote] = useState({});

  const getRandomQuote = () => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((resp) => {
        const data = resp.data.data[0];

        setQuote({
          text: data.quoteText,
          author: data.quoteAuthor,
          genre: data.quoteGenre,
        });
      });
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <AppContainer>
      <Header>
        <HeaderContent onClick={getRandomQuote}>
          <HeaderText>Random</HeaderText>
          <span className="material-icons">loop</span>
        </HeaderContent>
      </Header>
      <QuoteContainer>
        <QuoteLine />
        <QuoteText>{quote.text ? `"${quote.text}"` : "Loading..."}</QuoteText>
      </QuoteContainer>
      <InfoContainer>
        <AuthorContainer>
          {quote.author ? quote.author : "Loading..."}
        </AuthorContainer>
        <GenreContainer>
          {quote.genre ? quote.genre : "Loading..."}
        </GenreContainer>
      </InfoContainer>
      <Footer>Created by Cesar Luis Rijo - devChallenges.io</Footer>
    </AppContainer>
  );
};

export default App;
