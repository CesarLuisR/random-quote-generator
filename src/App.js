import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  AppContainer,
  AuthorContainer,
  Header,
  HeaderContent,
  HeaderText,
  QuoteContainer,
  QuoteLine,
  QuoteText,
  GenreContainer,
  Footer,
  AppAuthorContainer,
} from "./styles";

const App = () => {
  const [quote, setQuote] = useState({});
  const [authorQuotes, setAuthorQuotes] = useState();
  const [author, setAuthor] = useState();

  const getRandomQuote = useCallback(() => {
    axios.get("http://api.quotable.io/random").then((resp) => {
      const data = resp.data;

      setAuthor(data.author);

      setQuote({
        text: data.content,
        author: data.author,
        genre: data.tags[0],
      });
    });
  }, []);

  const getAuthorQuotes = useCallback(async () => {
    let quotes = [];
    let url = "http://api.quotable.io/quotes?author=";
    let name = author.split(" ");

    name.forEach((element) => {
      url += `%20${element}`;
    });

    await axios.get(url).then((resp) => {
      let stack = resp.data.results;
      stack.forEach((element) => quotes.push(element.content));
    });

    setAuthorQuotes(quotes);
  }, [author]);

  useEffect(() => {
    getRandomQuote();
  }, [getRandomQuote]);

  useEffect(() => {
    author && getAuthorQuotes();
  }, [getAuthorQuotes, author]);

  return (
    <Router>
      <Switch>
        <Route path="/author">
          {authorQuotes ? (
            <AppAuthorContainer>
              <Header>
                <HeaderContent onClick={getRandomQuote}>
                  <HeaderText>Random</HeaderText>
                  <span className="material-icons">loop</span>
                </HeaderContent>
              </Header>
              {authorQuotes.map((text, index) =>
                index === 0 ? (
                  <QuoteContainer>
                    <h1 className={"author-name"}>{author}</h1>
                    <div className="none"></div>
                    <QuoteLine />
                    <QuoteText>{text}</QuoteText>
                  </QuoteContainer>
                ) : (
                  <QuoteContainer>
                    <QuoteLine />
                    <QuoteText>{text}</QuoteText>
                  </QuoteContainer>
                )
              )}
              <Footer>Created by Cesar Luis Rijo - devChallenges.io</Footer>
            </AppAuthorContainer>
          ) : (
            <AppAuthorContainer>
              <Header>
                <HeaderContent onClick={getRandomQuote}>
                  <HeaderText>Loading...</HeaderText>
                </HeaderContent>
              </Header>
              <Footer>Created by Cesar Luis Rijo - devChallenges.io</Footer>
            </AppAuthorContainer>
          )}
        </Route>
        <Route path="/">
          <AppContainer>
            <Header>
              <HeaderContent onClick={getRandomQuote}>
                <HeaderText>Random</HeaderText>
                <span className="material-icons">loop</span>
              </HeaderContent>
            </Header>
            <QuoteContainer>
              <QuoteLine />
              <QuoteText>
                {quote.text ? `"${quote.text}"` : "Loading..."}
              </QuoteText>
              <Link
                to="/author"
                className={"infoContainer"}
                onClick={getAuthorQuotes}
              >
                <div className={"info"}>
                  <AuthorContainer className={"authorContainer"}>
                    {quote.author ? quote.author : "Loading..."}
                  </AuthorContainer>
                  <GenreContainer>
                    {quote.genre ? quote.genre : "Loading..."}
                  </GenreContainer>
                </div>
                <span className={"material-icons arrow"}>arrow_right_alt</span>
              </Link>
            </QuoteContainer>
            <Footer>Created by Cesar Luis Rijo - devChallenges.io</Footer>
          </AppContainer>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
