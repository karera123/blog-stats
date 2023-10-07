import { RefModel } from "./ref";

export interface TheoryModel {
  question: string,
  answer: string,
  refs?: RefModel[]
}