import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name="my Blog" />
      <About imgUrl='logo.svg' aboutText='About text' />
    </div>
  );
}

export default App;
