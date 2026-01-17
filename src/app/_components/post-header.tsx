import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "./post-title";
import { type Author } from "interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block hover:text-primary hover:underline">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16 lg:mb-24 xl:mb-32">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-4">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
