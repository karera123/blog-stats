import { ApplicationModel } from "./application";
import { TheoryModel } from "./theory";

export interface HomeworkModel {
  title: string,
  theories: TheoryModel[],
  applications: ApplicationModel[]
}