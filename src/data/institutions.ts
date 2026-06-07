import tutorialImg from "../assets/institutions/tutorial.jpeg";
import integratedImg from "../assets/institutions/integrated-learning.jpeg";
import abhyasikaImg from "../assets/institutions/abhyasika.jpeg";

export const institutions = [
  {
    id: "tutorial",
    title: "Ideation Tutorial",
    tagline: "8th – 12th Standard",
    description:
      "Comprehensive coaching for students from 8th to 12th standard across IB, IGCSE, ICSE, CBSE and State Board, focusing on concept-based learning and academic excellence.",
    route: "/institutions/tutorial",
    image: tutorialImg,
  },

  {
    id: "integrated-learning",
    title: "Integrated Learning Program",
    tagline: "5th – 7th Standard",
    description:
      "An innovative program designed to strengthen conceptual understanding, curiosity, scientific thinking, and foundational academic skills.",
    route: "/institutions/integrated-learning",
    image: integratedImg,
  },

  {
    id: "abhyasika",
    title: "Ideation Abhyasika",
    tagline: "Structured Study Environment",
    description:
      "A disciplined and supportive study environment providing academic supervision, guidance, and productive learning habits.",
    route: "/institutions/abhyasika",
    image: abhyasikaImg,
  },
];