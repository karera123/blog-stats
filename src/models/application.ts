import { RefModel } from "./ref";

interface Image {
  data: string,
  alternativeName: string,
  refs?: RefModel[]
}

export interface ApplicationModel {
  question: string | JSX.Element,
  answer?: string | JSX.Element,
  refs?: RefModel[],
  image?: Image[],
}