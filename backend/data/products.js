const products = [
  {
    name: "Wings of Fire",
    author: "APJ Abdul Kalam",
    desc: "Autobiography of APJ Abdul Kalam, chronicling his life journey from childhood to his career as a scientist and President of India.",
    titleImage: "./images/1.jpg",
    category: "Self-help",
    language: "Hindi",
    year: 1999,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "1"
  },
  {
    name: "Swami Vivekananda",
    author: "Swami Vivekananda",
    desc: "A collection of lectures and speeches by Swami Vivekananda covering Vedanta philosophy, Hinduism, and spirituality.",
    titleImage: "./images/2.jpg",
    category: "Self-help",
    language: "Hindi",
    year: 2015,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "2"
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    desc: "Self-help book offering practical advice on building good habits and breaking bad ones.",
    titleImage: "./images/3.jpg",
    category: "Self-help",
    language: "Hindi",
    year: 2018,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "3"
  },
  {
    name: "Mossad - The Greatest Missions",
    author: "Michael Bar-Zohar, Nissim Mishal",
    desc: "Reveals the covert operations of the Israeli Secret Service, including the capture of Adolf Eichmann and the downfall of the Syrian Atom Service.",
    titleImage: "./images/4.jpg",
    category: "Thriller",
    language: "English",
    year: 2012,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "4"
  },
  {
    name: "Kama Sutra: Learn The Art of Erotic Love",
    author: "Vatsyayana",
    desc: "Explores the intricacies of love, intimacy, and sexual satisfaction.",
    titleImage: "./images/5.jpg",
    category: "Love",
    language: "English",
    year: 2020,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "5"
  },
  {
    name: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    desc: "Provides a blueprint for understanding wealth generation through investments and business ventures.",
    titleImage: "./images/6.jpg",
    category: "Self-help",
    language: "English",
    year: 1997,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "6"
  },
  {
    name: "Doglapan: The Hard Truth about Life and Start-Ups",
    author: "Ashneer Grover",
    desc: "Ashneer Grover shares unfiltered insights and experiences from his entrepreneurial journey.",
    titleImage: "./images/7.jpg",
    category: "Self-help",
    language: "Hindi",
    year: 2023,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "7"
  },
  {
    name: "Chanakya Niti",
    author: "Chanakya",
    desc: "Holds keys to attaining wealth, power, and respect through the wisdom of Chanakya.",
    titleImage: "./images/8.jpg",
    category: "Self-help",
    language: "Tamil",
    year: 2003,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "8"
  },
  {
    name: "India During Emergency",
    author: "Unknown",
    desc: "Explores the events and repercussions of the Emergency period in India.",
    titleImage: "./images/9.jpg",
    category: "History",
    language: "Tamil",
    year: 1985,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "9"
  },
  {
    name: "7 Money Rules for Life",
    author: "Mary Hunt",
    desc: "Provides essential financial wisdom for saving efficiently and navigating financial uncertainties.",
    titleImage: "./images/10.jpg",
    category: "Self-help",
    language: "Telugu",
    year: 2010,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "10"
  },
  {
    name: "The Subtle Art of Intraday Trading",
    author: "Mark Douglas",
    desc: "Guide to successful intraday trading with essential techniques and principles.",
    titleImage: "./images/11.jpg",
    category: "Self-help",
    language: "Telugu",
    year: 2019,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "11"
  },
  {
    name: "Karna's Secret",
    author: "V.S. Khandekar",
    desc: "A mythological thriller revealing the untold secrets of Karna, a key character in the Mahabharata.",
    titleImage: "./images/12.jpg",
    category: "Thriller",
    language: "Telugu",
    year: 2021,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "12"
  },
  {
    name: "Master of Destiny",
    author: "Robin Sharma",
    desc: "A self-help book offering strategies to control and shape one's destiny.",
    titleImage: "./images/13.jpg",
    category: "Self-help",
    language: "English",
    year: 2016,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "13"
  },
  {
    name: "The Haunted Forest",
    author: "Samiksha Soni",
    desc: "A horror story about a group of friends who encounter supernatural events in a mysterious forest.",
    titleImage: "./images/14.jpg",
    category: "Horror",
    language: "Hindi",
    year: 2014,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "14"
  },
  {
    name: "Laughing Therapy",
    author: "Unknown",
    desc: "A comedy audiobook providing humorous anecdotes and jokes to lighten up the mood.",
    titleImage: "./images/15.jpg",
    category: "Comedy",
    language: "English",
    year: 2013,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "15"
  },
  {
    name: "Spiritual Journeys",
    author: "Deepak Chopra",
    desc: "Explores various spiritual paths and practices to achieve inner peace.",
    titleImage: "./images/16.jpg",
    category: "Spiritual",
    language: "Tamil",
    year: 2022,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "16"
  },
  {
    name: "Romance in Paris",
    author: "Barbara Taylor Bradford",
    desc: "A love story set in the romantic city of Paris, exploring the highs and lows of a passionate relationship.",
    titleImage: "./images/17.jpg",
    category: "Love",
    language: "English",
    year: 2017,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "17"
  },
  {
    name: "Motivational Speeches",
    author: "Various",
    desc: "Compilation of powerful speeches from various leaders to inspire and motivate.",
    titleImage: "./images/18.jpg",
    category: "Self-help",
    language: "Telugu",
    year: 2011,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "18"
  },
  {
    name: "Secrets of the Universe",
    author: "Brian Greene",
    desc: "A scientific exploration of the mysteries of the universe.",
    titleImage: "./images/19.jpg",
    category: "Science",
    language: "English",
    year: 2014,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "19"
  },
  {
    name: "Jungle Book",
    author: "Rudyard Kipling",
    desc: "The adventures of Mowgli, a boy raised by wolves in the Indian jungle.",
    titleImage: "./images/20.jpg",
    category: "Adventure",
    language: "English",
    year: 1894,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "20"
  },
  {
    name: "The Three Mistakes of My Life",
    author: "Chetan Bhagat",
    desc: "A story of three friends and their dreams, love, and mistakes.",
    titleImage: "./images/21.jpg",
    category: "Love",
    language: "Hindi",
    year: 2008,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "21"
  },
  {
    name: "Mystery of the Blue Train",
    author: "Agatha Christie",
    desc: "A thrilling murder mystery solved by Hercule Poirot.",
    titleImage: "./images/22.jpg",
    category: "Thriller",
    language: "English",
    year: 1928,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "22"
  },
  {
    name: "The Alchemist",
    author: "Paulo Coelho",
    desc: "A philosophical story about a shepherd named Santiago who dreams of finding a hidden treasure.",
    titleImage: "./images/23.jpg",
    category: "Self-help",
    language: "English",
    year: 1988,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "23"
  },
  {
    name: "The Power of Now",
    author: "Eckhart Tolle",
    desc: "A guide to spiritual enlightenment, focusing on living in the present moment.",
    titleImage: "./images/24.jpg",
    category: "Self-help",
    language: "English",
    year: 1997,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "24"
  },
  {
    name: "The 5 AM Club",
    author: "Robin Sharma",
    desc: "Explores the benefits of waking up early and how it can transform your life.",
    titleImage: "./images/25.jpg",
    category: "Self-help",
    language: "Hindi",
    year: 2018,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "25"
  },
  {
    name: "Sherlock Holmes: A Study in Scarlet",
    author: "Arthur Conan Doyle",
    desc: "The first novel featuring Sherlock Holmes, introducing his famous detective skills.",
    titleImage: "./images/26.jpg",
    category: "Thriller",
    language: "English",
    year: 1887,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "26"
  },
  {
    name: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    desc: "A gripping thriller about a journalist and a hacker investigating a wealthy family's dark secrets.",
    titleImage: "./images/27.jpg",
    category: "Thriller",
    language: "English",
    year: 2005,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "27"
  },
  {
    name: "Dark Secrets",
    author: "Amit Choudhary",
    desc: "A horror novel about a family uncovering terrifying secrets in their new home.",
    titleImage: "./images/28.jpg",
    category: "Horror",
    language: "Tamil",
    year: 2021,
    numberOfReviews: 0,
    reviews: [],
    rating:0,
    _id: "28"
  }
];

export default products

