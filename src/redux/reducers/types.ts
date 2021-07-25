
export declare type CaseModel = {
    id: number;
    image: string;
    title: string;
    name: string;
    link: string;
    filter: string;
};
  
 
  // SelectorTypes
  export type SelectorType = {
    caseReducer: CaseReducerType;
  };
  
  // Reducers
  export type CaseReducerType = {
    cases: CaseModel[];
    isLoading: boolean;
    error: string | Object;
  };
  