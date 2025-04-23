
export const calculateZodiacSign = (birthdate: string): string => {
  if (!birthdate) return '';
  
  const date = new Date(birthdate);
  const month = date.getMonth() + 1; // JavaScript months are 0-based
  const day = date.getDate();
  
  // Determine zodiac sign based on month and day
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "Aquarius";
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return "Pisces";
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "Aries";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "Taurus";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return "Gemini";
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return "Cancer";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "Leo";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "Virgo";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return "Libra";
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    return "Scorpio";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "Sagittarius";
  } else {
    return "Capricorn";
  }
};

export const getZodiacEmoji = (sign: string): string => {
  const zodiacEmojis: Record<string, string> = {
    "Aries": "♈",
    "Taurus": "♉",
    "Gemini": "♊",
    "Cancer": "♋",
    "Leo": "♌",
    "Virgo": "♍",
    "Libra": "♎",
    "Scorpio": "♏",
    "Sagittarius": "♐",
    "Capricorn": "♑",
    "Aquarius": "♒",
    "Pisces": "♓",
  };
  
  return zodiacEmojis[sign] || "✨";
};

export const getZodiacDescription = (sign: string): string => {
  const descriptions: Record<string, string> = {
    "Aries": "Bold and ambitious, Aries dives headfirst into challenging situations. You're a natural leader who's direct in your approach and passionate about your pursuits.",
    "Taurus": "Reliable and practical, Taurus values stability and comfort. You have a strong determination and work ethic, appreciating life's sensual pleasures.",
    "Gemini": "Curious and adaptable, Gemini thrives on variety and communication. You're quick-witted, expressive, and enjoy learning about diverse subjects.",
    "Cancer": "Intuitive and emotional, Cancer has strong protective instincts. You value security and connection, with a nurturing approach to relationships.",
    "Leo": "Confident and dramatic, Leo loves to express themselves creatively. You have natural leadership qualities and a generous, loyal heart.",
    "Virgo": "Analytical and practical, Virgo pays attention to the details others miss. You're methodical in your approach with a desire to be of service.",
    "Libra": "Diplomatic and social, Libra seeks harmony and balance. You appreciate beauty and fairness, often mediating conflicts among others.",
    "Scorpio": "Intense and transformative, Scorpio dives deep below the surface. You're passionate and resourceful, valuing authentic connections.",
    "Sagittarius": "Adventurous and optimistic, Sagittarius loves exploration and philosophical questions. You seek meaning and approach life with enthusiasm.",
    "Capricorn": "Disciplined and responsible, Capricorn sets ambitious goals and steadily works toward them. You value tradition and have natural managerial skills.",
    "Aquarius": "Innovative and independent, Aquarius thinks outside the box. You're humanitarian in your outlook, valuing both community and individuality.",
    "Pisces": "Compassionate and intuitive, Pisces connects deeply with emotions. You're creative and empathetic, often blending reality with imagination.",
  };
  
  return descriptions[sign] || "Your zodiac sign reveals unique insights about your personality and potential.";
};
