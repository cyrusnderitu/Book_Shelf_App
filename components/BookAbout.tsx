import CommentCard from "./CommentCard";

const BookAbout = () => {
  return (
    <div className="my-8 font-popps">
      <h1 className="text-xl font-bold mt-4 ">Synopsis</h1>
      <p>
        Welcome to the Portsmouth chapter of the Silent Book Club!This is a
        gentle, relaxed space with chat, quiet reading time, and the opportunity
        to meet like-minded people with a love of books by the seaside.Bring
        whatever you are reading, some headp..
      </p>
      <div className="tags mt-8">
        <h4 className="text-lg font-bold  my-4 ">Tags</h4>
        <div className="card-actions flex items-center gap-x-2">
          <div className="badge badge-ghost">Psycology</div>
          <div className="badge badge-ghost">Money</div>
          <div className="badge badge-ghost">Invest</div>
          <div className="badge badge-ghost">Business</div>
          <div className="badge badge-ghost">Enterpreneur</div>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-x-4">
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
};

export default BookAbout;
