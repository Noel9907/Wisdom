import letters from "../model/letter.model.js";

export const getLetter = async (req, res) => {
  try {
    const randomletter = await letters.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(randomletter[0]);
  } catch (error) {
    console.error("Error in getLetter controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const postLetter = async (req, res) => {
  try {
    const { name, letter } = req.body;

    if (!name || !letter) {
      return res.status(400).json({ error: "No letter or name provided" });
    } else {
      const newLetter = new letters({
        name,
        letter,
      });

      await newLetter.save();

      res.status(201).json({
        name: newLetter.name,
        letter: newLetter.letter,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
