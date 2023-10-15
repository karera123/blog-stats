import { RefModel } from "./ref";

export interface TheoryModel {
  question: string | JSX.Element,
  answer: string | JSX.Element,
  refs?: RefModel[]
}