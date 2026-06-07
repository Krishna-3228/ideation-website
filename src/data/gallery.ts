import classroomImage from "../assets/gallery/classroom.jpeg";
import labImage from "../assets/gallery/lab.jpeg";
import studyImage from "../assets/gallery/study-centre.jpg";
import communityImage from "../assets/gallery/community.jpeg";

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "classroom",
    title: "Interactive Classroom Sessions",
    category: "Learning",
    image: classroomImage,
  },
  {
    id: "lab",
    title: "Hands-on Science Experiments",
    category: "Practical Learning",
    image: labImage,
  },
  {
    id: "study",
    title: "Focused Study Environment",
    category: "Abhyasika",
    image: studyImage,
  },
  {
    id: "community",
    title: "Student Activities & Events",
    category: "Community",
    image: communityImage,
  },
];