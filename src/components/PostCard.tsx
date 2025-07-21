import { getFormattedDate } from "../utils"

export interface IProps {
  title: string;
  pubDate?: Date;
  image?: string;
  description: string;
  slug: string;
  author?: {
    name: string;
    avatar: string;
  };
  category?: {
    title: string;
  }
}

export function PostCard(props: IProps) {
  const { title, slug, pubDate, author, image, description, category } = props;
  const link = `/blog/${slug}/`;

  return (
    <div className="flex flex-col">
      <a href={link}>
        {image && (
          <img
            alt="Cover"
            className="mb-2 border border-gray-300 rounded-lg"
            width={"720"}
            height={"360"}
            src={image}
          />
        )}
      </a>
      <span className="my-1.5 block font-black leading-none text-sm uppercase text-primary">
        { category ? category.title : ""}
      </span>
      <a
        href={link}
        className="hover:text-primary transition-colors text-black font-black text-xl"
      >
        {title}
      </a>

      <div className="my-2 line-clamp-2 text-base text-gray-9">
        <p className="text-slate-600">{description}</p>
      </div>

      <div className="mt-1 flex justify-between items-center not-prose md:text-base">
        <div className="flex gap-3 items-center">
          <img
            width="32"
            height="32"
            alt="avatar"
            src={author?.avatar}
            className="w-10 h-10 bg-slate-800 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm">{author?.name}</span>
            <span className="text-sm font-semibold text-slate-500">
              {getFormattedDate(pubDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
