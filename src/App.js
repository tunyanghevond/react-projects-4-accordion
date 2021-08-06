import { useState } from "react";
import Questions from "./Questions";
import data from "./data";
const App = () => {
  const [questions, setQuestion] = useState(data);

  return (
    <div className="wrapper">
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="section">
          {questions.map((question) => {
            return <Questions key={question.id} {...question} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default App;
