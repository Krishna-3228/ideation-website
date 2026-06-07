import heroImage from "../assets/hero/group-photo.jpeg";

export default function HeroCarousel() {
  return (
    <div className="h-[85vh]">
      <img
        src={heroImage}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
}