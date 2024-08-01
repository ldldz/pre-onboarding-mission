import { dummy } from "../../data";
import { GroupedData } from "../../types";
import { groupDummy, isSubstring } from "../../utils";
import { HighlightText } from "../ui/HighlightText";

interface ISearchResultList {
  keyword: string;
}

export const SearchResultList = ({ keyword }: ISearchResultList) => {
  const groupedData: GroupedData = groupDummy(dummy);

  return (
    <ul>
      {Object.keys(groupedData).map((type) => (
        <>
          <li>{type}</li>
          {groupedData[type].map(({ description, key }) => (
            <li key={key}>
              {isSubstring(description, keyword) ? (
                <HighlightText text={description} highlight={keyword} />
              ) : (
                description
              )}
            </li>
          ))}
        </>
      ))}
    </ul>
  );
};
