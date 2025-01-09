export interface AdventureStep {
  stepID: string;
  label: string;
  buttons: {
    label: string;
    stepID: string;
    route?: string;
  }[];
}
