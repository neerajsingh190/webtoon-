const Webtoon = require('../models/Webtoon');

// Get all webtoons
exports.getAllWebtoons = async (req, res) => {
  const webtoons = await Webtoon.find({});
  res.json(webtoons);
};

// Add a new webtoon
exports.addWebtoon = async (req, res) => {
  const { title, description, characters } = req.body;
  const newWebtoon = new Webtoon({ title, description, characters });
  await newWebtoon.save();
  res.json(newWebtoon);
};

// Get a specific webtoon by ID
exports.getWebtoonById = async (req, res) => {
  const webtoon = await Webtoon.findById(req.params.id);
  if (!webtoon) return res.status(404).json({ error: 'Webtoon not found' });
  res.json(webtoon);
};

// Delete a webtoon by ID
exports.deleteWebtoonById = async (req, res) => {
  await Webtoon.findByIdAndDelete(req.params.id);
  res.json({ message: 'Webtoon deleted successfully' });
};
