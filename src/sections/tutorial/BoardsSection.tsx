import BoardCard from "../../components/BoardCard";

import { boards } from "../../data/boards";

const BoardsSection = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Boards & Curriculum
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Multi-Board Academic Support
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Ideation Tutorial supports students
            from multiple academic boards
            through structured conceptual teaching
            and board-oriented preparation.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {boards.map((board) => (
            <BoardCard
              key={board.title}
              title={board.title}
              description={board.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default BoardsSection;