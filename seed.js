const Book = require("./models/book.js");
const faker = require("faker");
const category = [
  "Science",
  "Biology",
  "Physics",
  "Chemistry",
  "Novel",
  "Travel",
  "Cooking",
  "Philosophy",
  "Mathematics",
  "Ethics",
  "Technology",
];

// Generate a pool of adjectives and nouns
const adjectives = Array.from({ length: 5000 }, () => faker.random.word());
const nouns = Array.from({ length: 5000 }, () => faker.random.word());

// Generate book titles with varying number of words
const generateTitle = () => {
  const numWords = Math.floor(Math.random() * 3) + 1; // Randomly choose 1, 2, or 3 words
  let title = "";
  for (let i = 0; i < numWords; i++) {
    title += `${adjectives[Math.floor(Math.random() * adjectives.length)]} `;
  }
  title += nouns[Math.floor(Math.random() * nouns.length)];
  return title.trim(); // Remove trailing space
};

async function seed(limit) {
  for (let i = 0; i < limit; i++) {
    const title = generateTitle();
    const index1 = Math.floor(Math.random() * 11);
    console.log(title);
    try {
      const book = new Book({
        title,
        ISBN: faker.random.uuid(),
        stock: Math.floor(Math.random() * 15),
        author: faker.name.findName(),
        description: faker.lorem.paragraphs(3),
        category: category[index1],
      });
      await book.save();
    } catch (err) {
      console.log("Error at creating books");
    }
  }
}

module.exports = seed;
