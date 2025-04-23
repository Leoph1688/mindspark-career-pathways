
export interface QuizQuestion {
  id: number;
  text: string;
  dimension: 'E-I' | 'S-N' | 'T-F' | 'J-P'; // The MBTI dimension this question relates to
  leftOption: string; // Option for 1 on the scale
  rightOption: string; // Option for 7 on the scale
}

// This is now the *complete* MBTI test with 70 questions.
export const quizQuestions: QuizQuestion[] = [
  // 1
  {
    id: 1,
    text: "At a party do you:",
    dimension: "E-I",
    leftOption: "Interact with many, including strangers",
    rightOption: "Interact with a few, known to you"
  },
  // 2
  {
    id: 2,
    text: "Are you more:",
    dimension: "S-N",
    leftOption: "Realistic than speculative",
    rightOption: "Speculative than realistic"
  },
  // 3
  {
    id: 3,
    text: "Is it worse to:",
    dimension: "S-N",
    leftOption: "Have your 'head in the clouds'",
    rightOption: "Be 'in a rut'"
  },
  // 4
  {
    id: 4,
    text: "Are you more impressed by:",
    dimension: "T-F",
    leftOption: "Principles",
    rightOption: "Emotions"
  },
  // 5
  {
    id: 5,
    text: "Are more drawn toward the:",
    dimension: "T-F",
    leftOption: "Convincing",
    rightOption: "Touching"
  },
  // 6
  {
    id: 6,
    text: "Do you prefer to work:",
    dimension: "J-P",
    leftOption: "To deadlines",
    rightOption: "Just 'whenever'"
  },
  // 7
  {
    id: 7,
    text: "Do you tend to choose:",
    dimension: "J-P",
    leftOption: "Rather carefully",
    rightOption: "Somewhat impulsively"
  },
  // 8
  {
    id: 8,
    text: "At parties do you:",
    dimension: "E-I",
    leftOption: "Stay late, with increasing energy",
    rightOption: "Leave early with decreased energy"
  },
  // 9
  {
    id: 9,
    text: "Are you more attracted to:",
    dimension: "S-N",
    leftOption: "Sensible people",
    rightOption: "Imaginative people"
  },
  // 10
  {
    id: 10,
    text: "Are you more interested in:",
    dimension: "S-N",
    leftOption: "What is actual",
    rightOption: "What is possible"
  },
  // 11
  {
    id: 11,
    text: "In judging others are you more swayed by:",
    dimension: "T-F",
    leftOption: "Laws",
    rightOption: "Circumstances"
  },
  // 12
  {
    id: 12,
    text: "In approaching others is your inclination to be:",
    dimension: "T-F",
    leftOption: "Objective",
    rightOption: "Personal"
  },
  // 13
  {
    id: 13,
    text: "Are you more:",
    dimension: "J-P",
    leftOption: "Punctual",
    rightOption: "Leisurely"
  },
  // 14
  {
    id: 14,
    text: "Does it bother you more having things:",
    dimension: "J-P",
    leftOption: "Incomplete",
    rightOption: "Completed"
  },
  // 15
  {
    id: 15,
    text: "In your social groups do you:",
    dimension: "E-I",
    leftOption: "Keep abreast of others’ happenings",
    rightOption: "Get behind on the news"
  },
  // 16
  {
    id: 16,
    text: "In doing ordinary things are you more likely to:",
    dimension: "S-N",
    leftOption: "Do it the usual way",
    rightOption: "Do it your own way"
  },
  // 17
  {
    id: 17,
    text: "Writers should:",
    dimension: "S-N",
    leftOption: "Say what they mean and mean what they say",
    rightOption: "Express things more by use of analogy"
  },
  // 18
  {
    id: 18,
    text: "Which appeals to you more:",
    dimension: "T-F",
    leftOption: "Consistency of thought",
    rightOption: "Harmonious human relationships"
  },
  // 19
  {
    id: 19,
    text: "Are you more comfortable in making:",
    dimension: "T-F",
    leftOption: "Logical judgments",
    rightOption: "Value judgments"
  },
  // 20
  {
    id: 20,
    text: "Do you want things:",
    dimension: "J-P",
    leftOption: "Settled and decided",
    rightOption: "Unsettled and undecided"
  },
  // 21
  {
    id: 21,
    text: "Would you say you are more:",
    dimension: "J-P",
    leftOption: "Serious and determined",
    rightOption: "Easy-going"
  },
  // 22
  {
    id: 22,
    text: "In phoning do you:",
    dimension: "E-I",
    leftOption: "Rarely question that it will all be said",
    rightOption: "Rehearse what you'll say"
  },
  // 23
  {
    id: 23,
    text: "Facts:",
    dimension: "S-N",
    leftOption: "Speak for themselves",
    rightOption: "Illustrate principles"
  },
  // 24
  {
    id: 24,
    text: "Are visionaries:",
    dimension: "S-N",
    leftOption: "Somewhat annoying",
    rightOption: "Rather fascinating"
  },
  // 25
  {
    id: 25,
    text: "Are you more often:",
    dimension: "T-F",
    leftOption: "A cool-headed person",
    rightOption: "A warm-hearted person"
  },
  // 26
  {
    id: 26,
    text: "Is it worse to be:",
    dimension: "T-F",
    leftOption: "Unjust",
    rightOption: "Merciless"
  },
  // 27
  {
    id: 27,
    text: "Should one usually let events occur:",
    dimension: "J-P",
    leftOption: "By careful selection and choice",
    rightOption: "Randomly and by chance"
  },
  // 28
  {
    id: 28,
    text: "Do you feel better about:",
    dimension: "J-P",
    leftOption: "Having purchased",
    rightOption: "Having the option to buy"
  },
  // 29
  {
    id: 29,
    text: "In company do you:",
    dimension: "E-I",
    leftOption: "Initiate conversation",
    rightOption: "Wait to be approached"
  },
  // 30
  {
    id: 30,
    text: "Common sense is:",
    dimension: "S-N",
    leftOption: "Rarely questionable",
    rightOption: "Frequently questionable"
  },
  // 31
  {
    id: 31,
    text: "Children often do not:",
    dimension: "S-N",
    leftOption: "Make themselves useful enough",
    rightOption: "Exercise their fantasy enough"
  },
  // 32
  {
    id: 32,
    text: "In making decisions do you feel more comfortable with:",
    dimension: "T-F",
    leftOption: "Standards",
    rightOption: "Feelings"
  },
  // 33
  {
    id: 33,
    text: "Are you more:",
    dimension: "T-F",
    leftOption: "Firm than gentle",
    rightOption: "Gentle than firm"
  },
  // 34
  {
    id: 34,
    text: "Which is more admirable:",
    dimension: "J-P",
    leftOption: "The ability to organize and be methodical",
    rightOption: "The ability to adapt and make do"
  },
  // 35
  {
    id: 35,
    text: "Do you put more value on being:",
    dimension: "J-P",
    leftOption: "Consistent",
    rightOption: "Open-minded"
  },
  // 36
  {
    id: 36,
    text: "Does new and non-routine interaction with others:",
    dimension: "E-I",
    leftOption: "Stimulate and energize you",
    rightOption: "Tax your reserves"
  },
  // 37
  {
    id: 37,
    text: "Are you more frequently:",
    dimension: "S-N",
    leftOption: "A practical sort of person",
    rightOption: "A fanciful sort of person"
  },
  // 38
  {
    id: 38,
    text: "Are you more likely to:",
    dimension: "S-N",
    leftOption: "See how others are useful",
    rightOption: "See how others see"
  },
  // 39
  {
    id: 39,
    text: "Which is more satisfying:",
    dimension: "T-F",
    leftOption: "To discuss an issue thoroughly",
    rightOption: "To arrive at agreement on an issue"
  },
  // 40
  {
    id: 40,
    text: "Which rules you more:",
    dimension: "T-F",
    leftOption: "Your head",
    rightOption: "Your heart"
  },
  // 41
  {
    id: 41,
    text: "Are you more comfortable with work that is:",
    dimension: "J-P",
    leftOption: "Contracted",
    rightOption: "Done on a casual basis"
  },
  // 42
  {
    id: 42,
    text: "Do you tend to look for:",
    dimension: "J-P",
    leftOption: "The orderly",
    rightOption: "Whatever turns up"
  },
  // 43
  {
    id: 43,
    text: "Do you prefer:",
    dimension: "E-I",
    leftOption: "Many friends with brief contact",
    rightOption: "A few friends with more lengthy contact"
  },
  // 44
  {
    id: 44,
    text: "Do you go more by:",
    dimension: "S-N",
    leftOption: "Facts",
    rightOption: "Principles"
  },
  // 45
  {
    id: 45,
    text: "Are you more interested in:",
    dimension: "S-N",
    leftOption: "Production and distribution",
    rightOption: "Design and research"
  },
  // 46
  {
    id: 46,
    text: "Which is more of a compliment:",
    dimension: "T-F",
    leftOption: "There is a very logical person",
    rightOption: "There is a very sentimental person"
  },
  // 47
  {
    id: 47,
    text: "Do you value in yourself more that you are:",
    dimension: "T-F",
    leftOption: "Unwavering",
    rightOption: "Devoted"
  },
  // 48
  {
    id: 48,
    text: "Do you more often prefer the:",
    dimension: "J-P",
    leftOption: "Final and unalterable statement",
    rightOption: "Tentative and preliminary statement"
  },
  // 49
  {
    id: 49,
    text: "Are you more comfortable:",
    dimension: "J-P",
    leftOption: "After a decision",
    rightOption: "Before a decision"
  },
  // 50
  {
    id: 50,
    text: "Do you:",
    dimension: "E-I",
    leftOption: "Speak easily and at length with strangers",
    rightOption: "Find little to say to strangers"
  },
  // 51
  {
    id: 51,
    text: "Are you more likely to trust your:",
    dimension: "S-N",
    leftOption: "Experience",
    rightOption: "Hunch"
  },
  // 52
  {
    id: 52,
    text: "Do you feel:",
    dimension: "S-N",
    leftOption: "More practical than ingenious",
    rightOption: "More ingenious than practical"
  },
  // 53
  {
    id: 53,
    text: "Which person is more to be complimented:",
    dimension: "T-F",
    leftOption: "Clear reason",
    rightOption: "Strong feeling"
  },
  // 54
  {
    id: 54,
    text: "Are you inclined more to be:",
    dimension: "T-F",
    leftOption: "Fair-minded",
    rightOption: "Sympathetic"
  },
  // 55
  {
    id: 55,
    text: "Is it preferable mostly to:",
    dimension: "J-P",
    leftOption: "Make sure things are arranged",
    rightOption: "Just let things happen"
  },
  // 56
  {
    id: 56,
    text: "In relationships should most things be:",
    dimension: "J-P",
    leftOption: "Re-negotiable",
    rightOption: "Random and circumstantial"
  },
  // 57
  {
    id: 57,
    text: "When the phone rings do you:",
    dimension: "E-I",
    leftOption: "Hasten to get to it first",
    rightOption: "Hope someone else will answer"
  },
  // 58
  {
    id: 58,
    text: "Do you prize more in yourself:",
    dimension: "S-N",
    leftOption: "A strong sense of reality",
    rightOption: "A vivid imagination"
  },
  // 59
  {
    id: 59,
    text: "Are you drawn more to:",
    dimension: "S-N",
    leftOption: "Fundamentals",
    rightOption: "Overtones"
  },
  // 60
  {
    id: 60,
    text: "Which seems the greater error:",
    dimension: "T-F",
    leftOption: "To be too passionate",
    rightOption: "To be too objective"
  },
  // 61
  {
    id: 61,
    text: "Do you see yourself as basically:",
    dimension: "T-F",
    leftOption: "Hard-headed",
    rightOption: "Soft-hearted"
  },
  // 62
  {
    id: 62,
    text: "Which situation appeals to you more:",
    dimension: "J-P",
    leftOption: "The structured and scheduled",
    rightOption: "The unstructured and unscheduled"
  },
  // 63
  {
    id: 63,
    text: "Are you a person that is more:",
    dimension: "J-P",
    leftOption: "Routinized than whimsical",
    rightOption: "Whimsical than routinized"
  },
  // 64
  {
    id: 64,
    text: "Are you more inclined to be:",
    dimension: "E-I",
    leftOption: "Easy to approach",
    rightOption: "Somewhat reserved"
  },
  // 65
  {
    id: 65,
    text: "In writings do you prefer:",
    dimension: "S-N",
    leftOption: "The more literal",
    rightOption: "The more figurative"
  },
  // 66
  {
    id: 66,
    text: "Is it harder for you to:",
    dimension: "T-F",
    leftOption: "Identify with others",
    rightOption: "Utilize others"
  },
  // 67
  {
    id: 67,
    text: "Which do you wish more for yourself:",
    dimension: "T-F",
    leftOption: "Clarity of reason",
    rightOption: "Strength of compassion"
  },
  // 68
  {
    id: 68,
    text: "Which is the greater fault:",
    dimension: "T-F",
    leftOption: "Being indiscriminate",
    rightOption: "Being critical"
  },
  // 69
  {
    id: 69,
    text: "Do you prefer the:",
    dimension: "J-P",
    leftOption: "Planned event",
    rightOption: "Unplanned event"
  },
  // 70
  {
    id: 70,
    text: "Do you tend to be more:",
    dimension: "J-P",
    leftOption: "Deliberate than spontaneous",
    rightOption: "Spontaneous than deliberate"
  }
];
