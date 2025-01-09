export interface AdventureStep {
  stepID: string;
  label: string;
  self?: boolean;
  buttons: {
    label: string;
    stepID: string;
    route?: string;
  }[];
}
