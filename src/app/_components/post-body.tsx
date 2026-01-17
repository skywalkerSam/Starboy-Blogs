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
    <section className="font-paprika flex items-center justify-center">
      {parsedContent ? (
        <article
          className="prose mx-auto max-w-xl break-all lg:max-w-3xl md:tracking-wide xl:max-w-4xl"
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
      ) : (
        <p>Blogpost coming soon...(</p>
      )}
    </section>
    // <div className="mx-auto max-w-3xl md:tracking-wide lg:max-w-4xl lg:text-xl xl:max-w-5xl">
    //   <div
    //     // className={markdownStyles["markdownStyles.markdown"]}
    //     dangerouslySetInnerHTML={{ __html: content }}
    //   />
    // </div>
  );
}
