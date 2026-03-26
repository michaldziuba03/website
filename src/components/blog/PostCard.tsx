import { getFormattedDate } from "../../utils"

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
    readingTime?: string;
}

export function PostCard(props: IProps) {
    const { title, slug, pubDate, author, image, description, category } = props;
    const link = `/blog/${slug}/`;

    return (
        <article className="group flex flex-col h-full bg-background-darken/40 rounded-2xl border border-background-darken transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <a href={link} className="relative block overflow-hidden aspect-2/1 bg-background">
                {image ? (
                    <img
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={image}
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full bg-background-darken transition-transform duration-500 group-hover:scale-105"></div>
                )}


            </a>

            <div className="flex flex-col flex-1 p-5 md:p-6">
                {category && (
                    <span className="mb-3 w-fit inline-block bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        {category.title}
                    </span>
                )}
                <a
                    href={link}
                    className="hover:text-primary transition-colors font-bold text-lg md:text-xl mb-3 line-clamp-2"
                >
                    {title}
                </a>

                <p className="line-clamp-2 text-sm leading-relaxed text-foreground/80 mb-6 flex-1">
                    {description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-background-darken/50">
                    <div className="flex items-center gap-3">
                        {author?.avatar ? (
                            <img
                                alt={author.name}
                                src={author.avatar}
                                className="w-9 h-9 rounded-full object-cover border border-background-darken/50 bg-background"
                            />
                        ) : (
                            <div className="w-9 h-9 rounded-full bg-background-darken shrink-0" />
                        )}
                        <div className="flex flex-col">
                            <span className="font-bold text-sm leading-tight">{author?.name || "Unknown"}</span>
                            <span className="text-xs font-medium text-foreground/60 leading-tight mt-0.5">
                                {getFormattedDate(pubDate)}
                            </span>
                        </div>
                    </div>
                    {props.readingTime && (
                        <span className="text-xs font-semibold text-foreground/50 bg-background-darken/50 px-2 py-1 rounded-md">
                            {props.readingTime}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}
