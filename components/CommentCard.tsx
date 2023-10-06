import Image from "next/image";
import Avatar from "../public/casual-life-3d-profile-picture-of-man-in-green-shirt-and-orange-hat.png";

const CommentCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">John Doe</h2>
        <p>
          The book so far is inspiring and the key concepts of the book are
          based on how the world revolves around money. One quote i got was from
          episnar vlore, - Respect Money and it will respect you-.
        </p>
        <div className="card-actions justify-end">
          <div className="avatar">
            <div className="w-24 mask mask-hexagon">
              <Image src={Avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
