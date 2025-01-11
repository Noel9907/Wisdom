import letters from "../model/letter.model.js";

export const getLetter = async (req, res) => {
  try {
    const allLetters = await letters.find({}); // Await the database query
    res.status(200).json(allLetters); // Send the results as a JSON response
  } catch (error) {
    console.error("Error in getLetter controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const postLetter = async (req, res) => {
  try {
    const { name, letter } = req.body;
    console.log(name + letter);

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
    console.error("Error in postLetter:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
