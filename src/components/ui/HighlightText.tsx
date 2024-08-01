import { highlightText } from "../../utils";

interface IHighlightText {
  text: string;
  highlight: string;
}

export const HighlightText = ({ text, highlight }: IHighlightText) => {
  return (
    <>
      {highlightText(text, highlight).map((part) =>
        part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part
      )}
    </>
  );
};
