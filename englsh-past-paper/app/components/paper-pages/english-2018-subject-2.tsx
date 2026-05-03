'use client';

import QuizComponent, { Question } from '../QuizComponent';

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Joseph averted the widespread disaster by compulsory storage of food.",
    options: ["Avoided", "Made", "Changed", "Stopped"],
    correct: 0,
    explanation: "'Averted' means to prevent or avoid something bad from happening."
  },
  {
    id: 2,
    text: "The anticipation was always worse than reality.",
    options: ["Knowledge before hand", "Wait", "Fear", "Delay"],
    correct: 0,
    explanation: "Anticipation means expecting or knowing something beforehand."
  },
  {
    id: 3,
    text: "Most colleges do all they can with scholarship funds to alleviate this situation.",
    options: ["Assuage", "Improve", "Arrest", "Worsen"],
    correct: 0,
    explanation: "'Alleviate' means to make less severe, similar to assuage."
  },
  {
    id: 4,
    text: "Christopher determined that his next journey should be Timbuktu.",
    options: ["Resolved", "Hoped", "Opened", "Wished"],
    correct: 0,
    explanation: "Determined in this context means firmly decided or resolved."
  },
  {
    id: 5,
    text: "Allied forces were supervising the police.",
    options: ["Inspecting", "Hoping", "Calling", "Helping"],
    correct: 0,
    explanation: "Supervising means overseeing or inspecting."
  },
  {
    id: 6,
    text: "Fleming plated the mould on meat broth.",
    options: ["Food", "Sweet", "Soup", "Fruit"],
    correct: 2,
    explanation: "Broth is a soup made from meat or vegetables."
  },
  {
    id: 7,
    text: "Maynard was dauntless.",
    options: ["Merciless", "Brave", "Shy", "Meek"],
    correct: 1,
    explanation: "Dauntless means fearless and brave."
  },
  {
    id: 8,
    text: "Ralston was a live wire.",
    options: ["Alert", "Lazy", "Brave", "Bad man"],
    correct: 0,
    explanation: "A 'live wire' means an alert, energetic person."
  },
  {
    id: 9,
    text: "He had been there for more than a decade.",
    options: ["Century", "Ten years", "Period", "Fortnight"],
    correct: 1,
    explanation: "A decade is a period of ten years."
  },
  {
    id: 10,
    text: "Mr. Chips was conscientious.",
    options: ["Honest", "Hard-working", "Clever", "Shy"],
    correct: 1,
    explanation: "Conscientious means diligent and hard-working."
  },
  {
    id: 11,
    text: "I feel sorry ___ the poor.",
    options: ["for", "with", "about", "on"],
    correct: 0,
    explanation: "The correct preposition is 'for': feel sorry for someone."
  },
  {
    id: 12,
    text: "He jumped ___ the river.",
    options: ["over", "into", "on", "for"],
    correct: 1,
    explanation: "'Jumped into' indicates entering the river."
  },
  {
    id: 13,
    text: "I will not object ___ what you do.",
    options: ["to", "for", "in", "on"],
    correct: 0,
    explanation: "The correct preposition is 'to': object to something."
  },
  {
    id: 14,
    text: "He has zeal ___ his country.",
    options: ["for", "to", "in", "with"],
    correct: 0,
    explanation: "Zeal is followed by 'for': zeal for something."
  },
  {
    id: 15,
    text: "This house is ___ fire.",
    options: ["in", "on", "of", "by"],
    correct: 1,
    explanation: "The phrase is 'on fire'."
  },
  {
    id: 16,
    text: "He is popular among his students.",
    options: ["He is popular in his students.", "He is popular with his students."],
    correct: 1,
    explanation: "The correct preposition is 'with': popular with someone."
  },
  {
    id: 17,
    text: "He said to her: 'Please sit down'.",
    options: [
      "He requested her to sit down.",
      "He advised her sit down.",
      "He told her that sit down.",
      "He ordered her to sit down."
    ],
    correct: 0,
    explanation: "'Please' indicates a polite request."
  },
  {
    id: 18,
    text: "Either you or I am wrong.",
    options: [
      "Either you or I am wrong.",
      "Either you or I were wrong.",
      "Either you or I was wrong.",
      "Either I or you is wrong."
    ],
    correct: 0,
    explanation: "With 'either...or', the verb agrees with the nearest subject. 'I' takes 'am'."
  },
  {
    id: 19,
    text: "He is ill from Sunday.",
    options: [
      "He is ill for Sunday.",
      "He has been ill since Sunday.",
      "He has been ill since Sunday.",
      "He was ill since Sunday."
    ],
    correct: 1,
    explanation: "Present perfect 'has been' with 'since' for a time in the past."
  },
  {
    id: 20,
    text: "Please wait little more.",
    options: [
      "Please wait the little more.",
      "Please wait a little more.",
      "Please wait some little more.",
      "Please wait much little."
    ],
    correct: 1,
    explanation: "The correct phrase is 'a little more'."
  }
];

export default function EnglishQuizPage() {
  return (
    <QuizComponent
      questions={quizQuestions}
      title="English Quiz - Lahore Board 2018"
      subtitle="Test your knowledge from the Intermediate Part II English objective paper. 20 multiple choice questions covering vocabulary, grammar, and prepositions."
    />
  );
}