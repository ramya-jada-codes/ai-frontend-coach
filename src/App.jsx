import React from "react";
import "./App.css";
import htmlQuestions from "./data/htmlQuestions";
import cssQuestions from "./data/cssQuestions";
import javascriptQuestions from "./data/javascriptQuestions";
import reactQuestions from "./data/reactQuestions";
const App = () => {
  const [selectedTopic, setSelectedTopic] = React.useState(null);
  const [selectedTopicName, setSelectedTopicName] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedDifficulty, setSelectedDifficulty] = React.useState("All");
  const [practiceMode, setPracticeMode] = React.useState(false);
  const [technologySelected, setTechnologySelected] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const [isListening, setIsListening] = React.useState(false);
  const [interviewCompleted, setInterviewCompleted] = React.useState(false);
  const [interviewScore, setInterviewScore] = React.useState(0);
  const [answeredQuestions, setAnsweredQuestions] = React.useState(0);
  const [questionEvaluated, setQuestionEvaluated] = React.useState(false);
  const [questionScores, setQuestionScores] = React.useState({});
  const [userAnswers, setUserAnswers] = React.useState({});

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;

      setUserAnswer((prev) => {
        const updatedAnswer = prev ? `${prev} ${spokenText}` : spokenText;

        setUserAnswers((previousAnswers) => ({
          ...previousAnswers,
          [currentQuestion]: updatedAnswer,
        }));

        return updatedAnswer;
      });
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };
  const evaluateAnswer = () => {
    if (questionEvaluated) {
      return;
    }

    if (userAnswer.trim() === "") {
      setFeedback("Please write your answer first.");
      return;
    }

    const correctAnswer = selectedTopic[currentQuestion].answer.toLowerCase();
    const answer = userAnswer.toLowerCase();

    const keywords = correctAnswer
      .split(/\s+/)
      .map((word) => word.replace(/[.,!?;:()]/g, ""))
      .filter((word) => word.length > 4);

    const uniqueKeywords = [...new Set(keywords)];

    const matchedKeywords = uniqueKeywords.filter((word) =>
      answer.includes(word),
    );

    const score =
      uniqueKeywords.length > 0
        ? Math.round((matchedKeywords.length / uniqueKeywords.length) * 100)
        : 0;

    const updatedScores = {
      ...questionScores,
      [currentQuestion]: score,
    };

    setQuestionScores(updatedScores);

    const scores = Object.values(updatedScores);

    const totalScore = scores.reduce((total, value) => total + value, 0);

    const averageScore =
      scores.length > 0 ? Math.round(totalScore / scores.length) : 0;

    setInterviewScore(averageScore);
    setAnsweredQuestions(scores.length);
    setQuestionEvaluated(true);

    if (score >= 50) {
      setFeedback("🟢 Good Answer! Your answer covers the important points.");
    } else if (score >= 20) {
      setFeedback(
        "🟡 Needs Improvement. Try to include more important points.",
      );
    } else {
      setFeedback("🔴 Try Again. Your answer is missing important points.");
    }

    setShowAnswer(true);
  };

  return (
    <div className="app">
      <header className="header">
        <h2>AI Frontend Coach</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#preparation">Preparation</a>
          <a href="#questions">Interview Questions</a>
          <a href="#practice">Practice</a>
          <a href="#about">About</a>
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <p>AI POWERED FRONTEND PREPARATION</p>

          <h1>
            Master Your
            <br />
            <span>Frontend Interview </span>
          </h1>

          <p>
            Prepare for HTML, CSS, JavaScript and React.js interviews with
            questions, answers and practice.
          </p>

          <button
            onClick={() => {
              setPracticeMode(true);
              setTechnologySelected(false);
              setSelectedTopic(null);
              setSelectedTopicName("");
              setCurrentQuestion(0);
              setShowAnswer(false);
              setUserAnswer("");
              setFeedback("");
              setInterviewCompleted(false);
              setInterviewScore(0);
              setAnsweredQuestions(0);
              setQuestionEvaluated(false);
              setQuestionScores({});
              setUserAnswers({});

              setTimeout(() => {
                document.getElementById("practice")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
          >
            Start Practice
          </button>
        </section>
        <section className="technologies" id="preparation">
          <h2>Choose Your Technology</h2>

          <p>
            Practice interview questions based on the technology you want to
            learn.
          </p>

          <div className="technology-cards">
            <div className="technology-card">
              <h3>HTML</h3>
              <p>Structure and semantic HTML interview questions.</p>
              <button
                onClick={() => {
                  setSelectedTopic(htmlQuestions);
                  setSelectedTopicName("HTML");
                  setPracticeMode(true);
                  setCurrentQuestion(0);
                  setShowAnswer(false);
                  setUserAnswer("");
                  setFeedback("");
                  setInterviewCompleted(false);
                  setInterviewScore(0);
                  setAnsweredQuestions(0);
                  setTechnologySelected(true);
                  setUserAnswers({});
                }}
              >
                Explore →
              </button>
            </div>

            <div className="technology-card">
              <h3>CSS</h3>
              <p>Styling, layouts and responsive design questions.</p>
              <button
                onClick={() => {
                  setSelectedTopic(cssQuestions);
                  setSelectedTopicName("CSS");
                  setPracticeMode(true);
                  setCurrentQuestion(0);
                  setShowAnswer(false);
                  setUserAnswer("");
                  setFeedback("");
                  setInterviewCompleted(false);
                  setInterviewScore(0);
                  setAnsweredQuestions(0);
                  setTechnologySelected(true);
                  setUserAnswers({});
                }}
              >
                Explore →
              </button>
            </div>

            <div className="technology-card">
              <h3>JavaScript</h3>
              <p>JavaScript fundamentals, DOM and ES6 questions.</p>
              <button
                onClick={() => {
                  setSelectedTopic(javascriptQuestions);
                  setSelectedTopicName("JavaScript");
                  setPracticeMode(true);
                  setCurrentQuestion(0);
                  setShowAnswer(false);
                  setUserAnswer("");
                  setFeedback("");
                  setInterviewCompleted(false);
                  setInterviewScore(0);
                  setAnsweredQuestions(0);
                  setTechnologySelected(true);
                  setUserAnswers({});
                }}
              >
                Explore →
              </button>
            </div>

            <div className="technology-card">
              <h3>React.js</h3>
              <p>React concepts, hooks and component questions.</p>
              <button
                onClick={() => {
                  setSelectedTopic(reactQuestions);
                  setSelectedTopicName("React.js");
                  setPracticeMode(true);
                  setCurrentQuestion(0);
                  setShowAnswer(false);
                  setUserAnswer("");
                  setFeedback("");
                  setInterviewCompleted(false);
                  setInterviewScore(0);
                  setAnsweredQuestions(0);
                  setQuestionEvaluated(false);
                  setQuestionScores({});
                  setTechnologySelected(true);
                }}
              >
                Explore →
              </button>
            </div>
          </div>
        </section>
        {/* {selectedTopic && (
          <section className="question-preview">
            <h2>Interview Questions</h2>

            {selectedTopic.map((item) => (
              <div className="question-item" key={item.id}>
                <h3>
                  {item.id}. {item.question}
                </h3>

                <p>{item.answer}</p>
              </div>
            ))}
          </section>
        )} */}

        <section className="practice-section" id="practice">
          {!technologySelected && (
            <div className="technology-selection">
              <h2>Choose Your Technology</h2>

              <p>Select a technology to start your interview practice.</p>

              <div className="practice-technology-buttons">
                <button
                  onClick={() => {
                    setSelectedTopic(htmlQuestions);
                    setSelectedTopicName("HTML");
                    setTechnologySelected(true);
                    setCurrentQuestion(0);
                    setShowAnswer(false);
                    setUserAnswer("");
                    setFeedback("");
                    setInterviewScore(0);
                    setAnsweredQuestions(0);
                    setQuestionEvaluated(false);
                    setQuestionScores({});
                    setUserAnswers({});
                  }}
                >
                  HTML
                </button>

                <button
                  onClick={() => {
                    setSelectedTopic(cssQuestions);
                    setSelectedTopicName("CSS");
                    setTechnologySelected(true);
                    setCurrentQuestion(0);
                    setShowAnswer(false);
                    setUserAnswer("");
                    setFeedback("");
                    setInterviewScore(0);
                    setAnsweredQuestions(0);
                    setQuestionEvaluated(false);
                    setQuestionScores({});
                    setUserAnswers({});
                  }}
                >
                  CSS
                </button>

                <button
                  onClick={() => {
                    setSelectedTopic(javascriptQuestions);
                    setSelectedTopicName("JavaScript");
                    setTechnologySelected(true);
                    setCurrentQuestion(0);
                    setShowAnswer(false);
                    setUserAnswer("");
                    setFeedback("");
                    setInterviewScore(0);
                    setAnsweredQuestions(0);
                    setQuestionEvaluated(false);
                    setQuestionScores({});
                    setUserAnswers({});
                  }}
                >
                  JavaScript
                </button>

                <button
                  onClick={() => {
                    setSelectedTopic(reactQuestions);
                    setSelectedTopicName("React.js");
                    setTechnologySelected(true);
                    setCurrentQuestion(0);
                    setShowAnswer(false);
                    setUserAnswer("");
                    setFeedback("");
                    setInterviewScore(0);
                    setAnsweredQuestions(0);
                    setQuestionEvaluated(false);
                    setQuestionScores({});
                    setUserAnswers({});
                  }}
                >
                  React.js
                </button>
              </div>
            </div>
          )}
          {technologySelected && selectedTopic && (
            <div className="practice-card">
              <p>
                Question {currentQuestion + 1} of{" "}
                {selectedTopic ? selectedTopic.length : 0}
              </p>

              {/* Progress Bar */}
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${
                      selectedTopic
                        ? ((currentQuestion + 1) / selectedTopic.length) * 100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>

              {/* Question */}
              <h3>
                {selectedTopic
                  ? selectedTopic[currentQuestion].question
                  : "Please select a technology first."}
              </h3>

              {/* User Answer */}
              {/* <textarea
                placeholder="Type your answer here..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              ></textarea> */}
              <div className="answer-input-container">
                <input
                  type="text"
                  placeholder="Type your answer here..."
                  value={userAnswer}
                  onChange={(e) => {
                    const value = e.target.value;

                    setUserAnswer(value);

                    setUserAnswers((previousAnswers) => ({
                      ...previousAnswers,
                      [currentQuestion]: value,
                    }));
                  }}
                />

                <button
                  type="button"
                  className={`mic-button ${isListening ? "listening" : ""}`}
                  onClick={startListening}
                  title={isListening ? "Listening..." : "Speak your answer"}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="mic-icon"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 11a6 6 0 0 1-12 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 17v4M9 21h6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Submit */}
              {/* <button
                onClick={() => {
                  if (userAnswer.trim() === "") {
                    setFeedback("Please write your answer first.");
                    return;
                  }

                  setFeedback("Answer submitted successfully!");
                  setShowAnswer(true);
                }}
              >
                Submit Answer
              </button> */}
              <button onClick={evaluateAnswer}>Submit Answer</button>

              {/* {feedback && <p className="feedback">{feedback}</p>} */}
              {feedback && (
                <p
                  className={`feedback ${
                    feedback.includes("Good Answer")
                      ? "success"
                      : feedback.includes("Needs Improvement")
                        ? "warning"
                        : "error"
                  }`}
                >
                  {feedback}
                </p>
              )}

              {/* Correct Answer */}
              {showAnswer && selectedTopic && (
                <div className="practice-answer">
                  <h4>Correct Answer:</h4>
                  <p>{selectedTopic[currentQuestion].answer}</p>
                </div>
              )}

              {/* Previous / Next */}
              <div className="practice-buttons">
                <button
                  onClick={() => {
                    const previousQuestion = currentQuestion - 1;

                    setCurrentQuestion(previousQuestion);

                    // Restore previous answer
                    setUserAnswer(userAnswers[previousQuestion] || "");

                    // Check if previous question was already evaluated
                    const alreadyEvaluated =
                      Object.prototype.hasOwnProperty.call(
                        questionScores,
                        previousQuestion,
                      );

                    setShowAnswer(alreadyEvaluated);
                    setQuestionEvaluated(alreadyEvaluated);

                    setFeedback("");
                  }}
                  disabled={currentQuestion === 0}
                >
                  ← Previous
                </button>

                <button
                  onClick={() => {
                    if (!questionEvaluated) {
                      setFeedback(
                        "⚠️ Please submit your answer before continuing.",
                      );
                      return;
                    }

                    if (currentQuestion === selectedTopic.length - 1) {
                      const finalScores = Object.values(questionScores);

                      const finalScore =
                        finalScores.length > 0
                          ? Math.round(
                              finalScores.reduce(
                                (total, score) => total + score,
                                0,
                              ) / finalScores.length,
                            )
                          : 0;

                      setInterviewScore(finalScore);
                      setAnsweredQuestions(finalScores.length);
                      setInterviewCompleted(true);
                    } else {
                      const nextQuestion = currentQuestion + 1;

                      setCurrentQuestion(nextQuestion);

                      // Restore previously saved answer
                      setUserAnswer(userAnswers[nextQuestion] || "");

                      // Check if this question was already evaluated
                      const alreadyEvaluated =
                        Object.prototype.hasOwnProperty.call(
                          questionScores,
                          nextQuestion,
                        );

                      setShowAnswer(alreadyEvaluated);
                      setQuestionEvaluated(alreadyEvaluated);

                      setFeedback("");
                    }
                  }}
                >
                  {currentQuestion === selectedTopic.length - 1
                    ? "Finish Interview"
                    : "Next →"}
                </button>
              </div>
            </div>
          )}
        </section>

        {interviewCompleted && (
          <section className="interview-completed">
            <h2>🎉 Interview Completed!</h2>

            <p>
              Great job! You have completed your {selectedTopicName} interview.
            </p>
            <h3>Your Final Score: {interviewScore}%</h3>
            <p className="answered-count">
              Questions Answered: {answeredQuestions}
            </p>

            <p className="score-message">
              {interviewScore >= 70
                ? "🎉 Excellent performance! Keep practicing."
                : interviewScore >= 50
                  ? "👍 Good performance! You can improve with more practice."
                  : "💪 Keep practicing! Review the correct answers and try again."}
            </p>

            <button
              onClick={() => {
                setInterviewCompleted(false);
                setCurrentQuestion(0);
                setShowAnswer(false);
                setUserAnswer("");
                setFeedback("");
                setInterviewScore(0);
                setAnsweredQuestions(0);
                setQuestionEvaluated(false);
                setQuestionScores({});
              }}
            >
              Practice Again
            </button>
          </section>
        )}

        <section className="question-bank" id="questions">
          <div className="question-bank-header">
            <h2>
              {selectedTopicName
                ? `${selectedTopicName} Interview Questions`
                : "Frontend Interview Questions"}
            </h2>

            <p>
              Practice important interview questions and review their answers.
            </p>

            <input
              type="text"
              placeholder="Search interview questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="difficulty-buttons">
              <button
                className={selectedDifficulty === "All" ? "active" : ""}
                onClick={() => setSelectedDifficulty("All")}
              >
                All
              </button>

              <button
                className={selectedDifficulty === "Beginner" ? "active" : ""}
                onClick={() => setSelectedDifficulty("Beginner")}
              >
                Beginner
              </button>

              <button
                className={
                  selectedDifficulty === "Intermediate" ? "active" : ""
                }
                onClick={() => setSelectedDifficulty("Intermediate")}
              >
                Intermediate
              </button>

              <button
                className={selectedDifficulty === "Advanced" ? "active" : ""}
                onClick={() => setSelectedDifficulty("Advanced")}
              >
                Advanced
              </button>
            </div>
          </div>

          <div className="question-list">
            {selectedTopic ? (
              selectedTopic
                .filter((item) =>
                  item.question
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()),
                )
                .filter(
                  (item) =>
                    selectedDifficulty === "All" ||
                    item.difficulty === selectedDifficulty,
                )
                .map((item) => (
                  <div className="question-card" key={item.id}>
                    <h3>
                      Q{item.id}. {item.question}
                    </h3>

                    <p className="difficulty">{item.difficulty}</p>

                    <details>
                      <summary>View Answer</summary>
                      <p className="answer">{item.answer}</p>
                    </details>
                  </div>
                ))
            ) : (
              <div className="no-questions">
                <h3>Choose a technology first</h3>
                <p>
                  Please select HTML, CSS, JavaScript or React.js from the
                  Preparation section to view interview questions.
                </p>
              </div>
            )}
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="about-content">
            <h2>About AI Frontend Coach</h2>

            <p>
              AI Frontend Coach is a frontend interview preparation platform
              designed to help developers prepare for frontend interviews.
            </p>

            <p>
              Practice HTML, CSS, JavaScript and React.js questions, answer
              questions using text or voice input, receive feedback and review
              correct answers.
            </p>

            <div className="about-features">
              <div>
                <h3>📚 Learn</h3>
                <p>Practice important frontend interview questions.</p>
              </div>

              <div>
                <h3>🎤 Practice</h3>
                <p>Answer questions using text or voice input.</p>
              </div>

              <div>
                <h3>📊 Improve</h3>
                <p>Check your performance and improve your answers.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
