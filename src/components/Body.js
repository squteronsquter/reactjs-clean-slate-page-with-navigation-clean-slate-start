import React, { Component } from "react";
import Article from "./Article";

class Body extends Component {
  state = {
    articles: [
      {
        id: "123",
        title: "Who Wins the Next War?",
        content:
          "The next war will be a total disaster. There will be no winners. We will al be loosers, as humanity and as civilization.",
      },
      {
        id: "124",
        title: "Real Madirid Byzantine Empire Fell Tonight",
        content:
          "El Classico proved that Real Madrid Empire has been founded on moving sands. Karim Benzema's absence let the gates open for the hoards from Catalunya to bring Madrid down.",
      },
      {
        id: "125",
        title: "Mastermind of Non Declaration",
        content:
          "Chinese government officials of various levels are sending contradictory signals regarding Russia's invasion over Ukraine.",
      },
    ],
  };

  // someting else to map (loop over)

  render() {
    let articles = this.state.articles.map((article) => {
      return (
        <Article
          key={article.id}
          title={article.title}
          content={article.content}
        />
      );
    });

    return (
      <>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <h1 className="text-2xl font-thin mb-4">
            Digital Mind Solutions LTD.
          </h1>
          <div>{articles}</div>
        </div>
      </>
    );
  }
}
export default Body;
