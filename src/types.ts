export type Tdummy = {
  description: string;
  key: string;
  type: "COMPANY" | "COUNTRY" | "PEOPLE" | "JOB";
};

export type GroupedData = {
  [key: string]: Tdummy[];
};
