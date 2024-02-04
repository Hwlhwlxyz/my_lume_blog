type Props = {
  tags: string[];
};

export default function ({ tags }: Props) {
  return (
    <div>
      {tags.map((tag: string) => {
        return (
          <div key={tag} className={"tag"}>
            <div>
              <a href={"/tag/" + tag}>{tag}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
