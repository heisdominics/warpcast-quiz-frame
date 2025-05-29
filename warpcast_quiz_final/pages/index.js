
import { useState } from "react";

const sampleQuestions = {
  "general": [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Shakespeare", "Dickens", "Tolstoy", "Homer"],
      answer: "Shakespeare"
    }
  ]
};

export default function Home() {
  const [topic, setTopic] = useState("general");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const questions = sampleQuestions[topic];

  if (!questions) return <div style={{ padding: 20 }}>No questions for this topic.</div>;

  const q = questions[currentQuestion];

  return (
    <main style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Quiz: {topic}</h1>
      <p><strong>{q.question}</strong></p>
      {q.options.map((opt, i) => (
        <div key={i}>
          <button onClick={() => setShowAnswer(opt === q.answer)}>
            {opt}
          </button>
        </div>
      ))}
      {showAnswer !== false && (
        <p style={{ color: showAnswer ? "green" : "red" }}>
          {showAnswer ? "Correct!" : "Wrong!"}
        </p>
      )}
      <button
        onClick={() => {
          setCurrentQuestion((prev) => (prev + 1) % questions.length);
          setShowAnswer(false);
        }}
        style={{ marginTop: 10 }}
      >
        Next Question
      </button>
    </main>
  );
}
