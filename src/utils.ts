import { GroupedData, Tdummy } from "./types";

export const isSubstring = (string: string, subString: string): boolean =>
  string.toLowerCase().search(subString.toLowerCase()) != -1;

export const highlightText = (
  text: string,
  highlightString: string
): string[] => text.split(new RegExp(`(${highlightString})`, "gi"));

export const groupDummy = (dummy: Tdummy[]): GroupedData =>
  dummy.reduce((acc, cur) => {
    acc[cur.type] = acc[cur.type] || [];
    acc[cur.type].push(cur);
    return acc;
  }, {} as GroupedData);
