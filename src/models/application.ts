import { RefModel } from "./ref";

export interface ApplicationModel {
  question: string,
  answer?: string,
  refs?: RefModel[],
  image?: {
    path: string,
    alternativeName: string,
    refs?: RefModel[]
  },
}