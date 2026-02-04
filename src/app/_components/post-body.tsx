// import markdownStyles from "./markdown-styles.module.css";
import MarkdownIt from "markdown-it";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  const md = MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  const parsedContent = md.render(content ?? "");

  return (
    <section className="flex items-center justify-center">
      {parsedContent ? (
        <article
          className="prose mx-auto max-w-xl break-all lg:max-w-3xl xl:max-w-4xl"
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
      ) : (
        <p>Blogpost coming soon...(</p>
      )}
    </section>
  );
}
