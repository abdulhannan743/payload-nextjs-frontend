type TitleParts = {
  titleWithoutLastWord: string;
  lastWord: string;
};

type HeadingParts = {
  heading: string;
  subHeading: string;
};

export const splitTitle = (title: string): TitleParts => {
  const titleWords = title.split(" ");
  const lastWord = titleWords.pop() || "";
  const titleWithoutLastWord = titleWords.join(" ");
  return { titleWithoutLastWord, lastWord };
};

export const splitHeadingAtWord = (text: string, splitWord: string): HeadingParts => {
  const splitIndex = text.indexOf(splitWord);
  if (splitIndex === -1) {
    return { heading: text, subHeading: "" };
  }

  const heading = text.slice(0, splitIndex + splitWord.length).trim();
  const subHeading = text.slice(splitIndex + splitWord.length).trim();
  return { heading, subHeading };
};
