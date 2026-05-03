'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizComponentProps {
  questions: Question[];
  title: string;
  subtitle?: string;
  timePerQuestion?: number;
}

type QuizState = 'start' | 'active' | 'completed';

export default function QuizComponent({ questions, title, subtitle, timePerQuestion = 30 }: QuizComponentProps) {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [quizStarted, setQuizStarted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const hasAnswered = selectedAnswers[currentQuestionIndex] !== null;
  const score = selectedAnswers.reduce<number>((acc, answer, idx) => {
    if (answer === questions[idx].correct) return acc + 1;
    return acc;
  }, 0);

  // Timer effect
  useEffect(() => {
    if (quizState !== 'active') return;
    if (timeLeft <= 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, quizState]);

  const handleStartQuiz = () => {
    setQuizState('active');
    setQuizStarted(true);
    setTimeLeft(timePerQuestion);
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (hasAnswered) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(timePerQuestion);
    } else {
      setQuizState('completed');
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTimeLeft(timePerQuestion);
    }
  };

  const handleRestart = () => {
    setQuizState('start');
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(questions.length).fill(null));
    setShowResult(false);
    setTimeLeft(timePerQuestion);
  };

  const getScorePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  const getScoreMessage = () => {
    const percent = getScorePercentage();
    if (percent >= 80) return "Excellent! You've mastered these concepts! 🎉";
    if (percent >= 60) return "Good job! A little more practice and you'll be perfect! 📚";
    if (percent >= 40) return "Not bad! Review the explanations to improve further. 💪";
    return "Keep practicing! Go through the explanations to learn from mistakes. 🌟";
  };

  if (quizState === 'start') {
    return (
      <main className="min-h-screen lg:ml-80 p-4 md:p-8 pt-24 lg:pt-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-xl text-center"
          >
            <div className="mb-6">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-500/30">
                Lahore Board 2018
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-white via-blue-300 to-purple-400 bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              {subtitle || `Test your knowledge. ${questions.length} multiple choice questions • ${timePerQuestion} seconds per question`}
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <span className="text-sm text-gray-300">Vocabulary</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span className="text-sm text-gray-300">Grammar</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span className="text-sm text-gray-300">Prepositions</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartQuiz}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start Quiz Now
            </motion.button>
          </motion.div>
        </div>
      </main>
    );
  }

  if (quizState === 'completed' && showResult) {
    return (
      <main className="min-h-screen lg:ml-80 p-4 md:p-8 pt-24 lg:pt-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4">
                <span className="text-4xl font-black text-white">{getScorePercentage()}%</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Quiz Completed!</h2>
              <p className="text-gray-300 text-lg">You scored {score} out of {questions.length}</p>
              <div className="mt-4 p-4 rounded-xl bg-white/5 inline-block mx-auto">
                <p className="text-gray-200">{getScoreMessage()}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📝</span> Detailed Results
              </h3>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {questions.map((q, idx) => (
                  <div key={q.id} className={`p-4 rounded-xl border ${
                    selectedAnswers[idx] === q.correct 
                      ? 'border-green-500/30 bg-green-500/10' 
                      : 'border-red-500/30 bg-red-500/10'
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {selectedAnswers[idx] === q.correct ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <span className="text-red-400 text-xl">✗</span>
                        )}
                      </div>
                      <div>
                        <p className="font-medium mb-1">{q.text}</p>
                        <p className="text-sm text-gray-400">
                          Your answer: {selectedAnswers[idx] !== null ? q.options[selectedAnswers[idx]] : 'Not answered'} • 
                          Correct answer: {q.options[q.correct]}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
              >
                Take Quiz Again
              </button>
              <button
                onClick={() => {
                  setQuizState('active');
                  setCurrentQuestionIndex(0);
                  setShowResult(false);
                  setSelectedAnswers(Array(questions.length).fill(null));
                  setTimeLeft(timePerQuestion);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:shadow-lg transition-all"
              >
                Review Questions
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen lg:ml-80 p-4 md:p-8 pt-24 lg:pt-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10">
              <span className={`text-sm font-mono ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-gray-300'}`}>
                ⏱️ {timeLeft}s
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Score: {score}/{questions.length}
          </div>
        </div>

        <div className="w-full bg-white/10 rounded-full h-1.5 mb-6">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + (hasAnswered ? 1 : 0)) / questions.length) * 100}%` }}
          ></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl backdrop-blur-xl"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed">
              {currentQuestion.text}
            </h2>

            <div className="grid gap-3">
              {currentQuestion.options.map((option, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: hasAnswered ? 1 : 1.01 }}
                  onClick={() => handleAnswerSelect(idx)}
                  disabled={hasAnswered}
                  className={`text-left p-4 rounded-xl transition-all ${
                    selectedAnswers[currentQuestionIndex] === idx
                      ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 border border-blue-500/50 shadow-lg'
                      : selectedAnswers[currentQuestionIndex] !== null && idx === currentQuestion.correct
                      ? 'bg-green-500/20 border border-green-500/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                      selectedAnswers[currentQuestionIndex] === idx
                        ? 'bg-blue-500 text-white'
                        : selectedAnswers[currentQuestionIndex] !== null && idx === currentQuestion.correct
                        ? 'bg-green-500 text-white'
                        : 'bg-white/20 text-gray-300'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-gray-200">{option}</span>
                    {selectedAnswers[currentQuestionIndex] !== null && idx === currentQuestion.correct && (
                      <span className="ml-auto text-green-400">✓ Correct</span>
                    )}
                    {selectedAnswers[currentQuestionIndex] === idx && idx !== currentQuestion.correct && (
                      <span className="ml-auto text-red-400">✗ Wrong</span>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {hasAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-blue-400">Explanation:</span> {currentQuestion.explanation}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-2 rounded-xl border transition-all ${
              currentQuestionIndex === 0
                ? 'border-white/10 text-gray-500 cursor-not-allowed'
                : 'border-white/20 hover:bg-white/10 text-gray-300'
            }`}
          >
            ← Previous
          </button>
          {hasAnswered && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleNext}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:shadow-lg transition-all"
            >
              {currentQuestionIndex + 1 === questions.length ? 'Finish Quiz' : 'Next →'}
            </motion.button>
          )}
        </div>

        <div className="mt-8 flex justify-center gap-2 flex-wrap">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (selectedAnswers[idx] !== null) {
                  setCurrentQuestionIndex(idx);
                  setTimeLeft(timePerQuestion);
                }
              }}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                currentQuestionIndex === idx
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : selectedAnswers[idx] !== null
                  ? 'bg-green-500/50 text-white'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}