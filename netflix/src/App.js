import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicGallery from "./components/DynamicGallery";
import NavBar from "./components/NavBar";

import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import FixedGallery from "./components/FixedGallery";

class App extends React.Component {
  state = {
    query: "marvel",
    loading: true,
  };
  onSearch = (searchQuery) => {
    this.setState({ query: searchQuery });
    console.log("QUERY IN APP.JS", this.state.query);
  };

  render() {
    return (
      <div className="App">
        <NavBar onSearch={this.onSearch} />

        <Container fluid className="px-5 mt-5">
          <DynamicGallery searchQuery={this.state.query} />
          <FixedGallery
            loadingstate={this.state.loading}
            searchQuery="harry potter"
          />
          <FixedGallery
            loadingstate={this.state.loading}
            searchQuery="lord of the rings"
          />
          <FixedGallery
            loadingstate={this.state.loading}
            searchQuery="pokemon"
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
