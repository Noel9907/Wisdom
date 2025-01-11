import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Feather } from "lucide-react";
import usePostLetter from "./hooks/usePostletters";
import useGetLetter from "./hooks/useGetletters";
import toast from "react-hot-toast";
const footer = [
  {
    quout: "To be is to be perceived.",
  },
  {
    quout: "The unexamined life is not worth living.",
  },
  {
    quout: "I think, therefore I am.",
  },
  {
    quout: "Happiness depends upon ourselves.",
  },
  {
    quout: "Man is the measure of all things.",
  },
  {
    quout: "He who has a why to live can bear almost any how.",
  },
  {
    quout: "Freedom is nothing else but a chance to be better.",
  },
  {
    quout: "Life must be understood backward, but it must be lived forward.",
  },
  {
    quout: "No man ever steps in the same river twice.",
  },
  {
    quout: "The only true wisdom is in knowing you know nothing.",
  },
  {
    quout:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  },
  {
    quout: "Time is the most valuable thing a man can spend.",
  },
  {
    quout: "Without music, life would be a mistake.",
  },
  {
    quout: "Hell is other people.",
  },
  {
    quout: "You must be the change you wish to see in the world.",
  },
  {
    quout: "It is not length of life, but depth of life.",
  },
  {
    quout: "An eye for an eye will leave the whole world blind.",
  },
  {
    quout:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  },
  {
    quout: "Knowing yourself is the beginning of all wisdom.",
  },
  {
    quout: "Everything has beauty, but not everyone sees it.",
  },
  {
    quout: "Do what you can, with what you have, where you are.",
  },
  {
    quout:
      "Happiness is not something ready-made. It comes from your own actions.",
  },
  {
    quout: "A journey of a thousand miles begins with a single step.",
  },
  {
    quout: "What we achieve inwardly will change outer reality.",
  },
  {
    quout: "We are all in the gutter, but some of us are looking at the stars.",
  },
  {
    quout: "The mind is everything. What you think, you become.",
  },
  {
    quout: "The only way to deal with fear is to face it head-on.",
  },
  {
    quout: "True knowledge exists in knowing that you know nothing.",
  },
  {
    quout: "Life is really simple, but we insist on making it complicated.",
  },
  {
    quout: "Injustice anywhere is a threat to justice everywhere.",
  },
  {
    quout:
      "A man is but the product of his thoughts. What he thinks, he becomes.",
  },
  {
    quout: "The greatest wealth is to live content with little.",
  },
  {
    quout: "We do not see things as they are, we see them as we are.",
  },
  {
    quout: "Act as if what you do makes a difference. It does.",
  },
  {
    quout:
      "A mind stretched by a new experience can never go back to its old dimensions.",
  },
  {
    quout:
      "To know what people really think, pay attention to what they do, rather than what they say.",
  },
  {
    quout: "The more you know, the more you realize you don't know.",
  },
  {
    quout: "Every man is guilty of all the good he did not do.",
  },
  {
    quout:
      "You can discover more about a person in an hour of play than in a year of conversation.",
  },
  {
    quout:
      "The meaning of life is to find your gift. The purpose of life is to give it away.",
  },
  {
    quout:
      "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.",
  },
  {
    quout: "Life is what happens when you’re busy making other plans.",
  },
  {
    quout:
      "Out of clutter, find simplicity. From discord, find harmony. In the middle of difficulty lies opportunity.",
  },
  {
    quout: "You cannot step twice into the same stream.",
  },
  {
    quout: "Wisdom begins in wonder.",
  },
  {
    quout:
      "It is not what we have, but what we enjoy, that constitutes our abundance.",
  },
  {
    quout:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
  },
  {
    quout: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    quout:
      "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
  },
  {
    quout: "He who opens a school door, closes a prison.",
  },
  {
    quout:
      "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
  },
  {
    quout:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    quout: "Our life is what our thoughts make it.",
  },
  {
    quout:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
  },
  {
    quout:
      "It is during our darkest moments that we must focus to see the light.",
  },
  {
    quout: "To love oneself is the beginning of a lifelong romance.",
  },
  {
    quout:
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
  },
  {
    quout:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
];

const randomQuote = footer[Math.floor(Math.random() * footer.length)].quout;

export default function OldLetterMessages() {
  const [newLetter, setNewLetter] = useState("");
  const [author, setAuthor] = useState("");
  const { getletter, loading, posts } = useGetLetter();
  const { createletter, Loading: postLoading } = usePostLetter();

  useEffect(() => {
    getletter();
  }, [getletter]);

  const handleNextLetter = () => {
    getletter();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newLetter.trim() && author.trim()) {
      const trimmedNewLetter = newLetter.trim();
      const trimmedAuthor = author.trim();
      const result = {
        name: trimmedAuthor,
        letter: trimmedNewLetter,
      };
      createletter(result);
      if (!postLoading) {
        toast.success("Letter sent successfully!");
        setNewLetter("");
        setAuthor("");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 font-serif overflow-hidden">
      <div className="w-full max-w-4xl bg-[#f2e8c4] bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-2xl border-4 border-[#d4c08d]">
        <header className="text-center mb-6 sm:mb-8 border-b-2 border-[#8b4513] pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#8b4513]">
            Philosophical Letters
          </h1>
          <p className="text-lg sm:text-xl text-[#8b4513] italic">
            Wisdom Across the Ages
          </p>
        </header>

        <main className="flex flex-col md:flex-row gap-6 sm:gap-8">
          <div className="flex-grow">
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#8b4513]">
                  Letter of Wisdom
                </h2>
                <button
                  onClick={handleNextLetter}
                  aria-label="Next letter"
                  className="text-[#8b4513] hover:text-[#5e2f0d] hover:bg-[#e6d5a7] p-2 rounded-full"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={posts.letter}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="text-center bg-[#f8f3e3] p-6 sm:p-8 rounded-lg shadow-inner min-h-[200px] sm:min-h-[300px] flex flex-col justify-center"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg sm:text-2xl mb-4 sm:mb-6 leading-relaxed text-[#5e2f0d] whitespace-pre-line italic"
                  >
                    &quot;{posts.letter}&quot;
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-base sm:text-lg text-[#8b4513]"
                  >
                    - {posts.name}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="md:w-1/3">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-[#f8f3e3] p-4 sm:p-6 rounded-lg shadow-inner"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-[#8b4513]">
                Pen Your Thoughts
              </h2>
              <div>
                <label
                  htmlFor="letter"
                  className="block text-sm font-medium text-[#8b4513] mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="letter"
                  value={newLetter}
                  onChange={(e) => setNewLetter(e.target.value)}
                  placeholder="What wisdom would you like to share?"
                  className="w-full bg-[#f2e8c4] text-[#5e2f0d] placeholder-[#8b4513] border-[#d4c08d] focus:border-[#8b4513] focus:ring-[#8b4513] rounded-md p-2 resize-y min-h-[80px] no-scrollbar"
                  rows={3}
                />
              </div>
              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-medium text-[#8b4513] mb-1"
                >
                  Your Name
                </label>
                <input
                  id="author"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Who are you, wise one?"
                  className="w-full bg-[#f2e8c4] text-[#5e2f0d] placeholder-[#8b4513] border-[#d4c08d] focus:border-[#8b4513] focus:ring-[#8b4513] rounded-md p-2"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#8b4513] text-[#f2e8c4] hover:bg-[#5e2f0d] focus:ring-[#d4c08d] py-2 rounded-md font-semibold"
                >
                  Send Wisdom
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
