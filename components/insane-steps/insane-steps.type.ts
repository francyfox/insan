export interface InsaneStepsItem {
  title: string;
  description: string;
  icon: {
    width: number;
    height: number;
    alt: string;
    src: string;
  }
}
export interface InsaneStepsProps {
  data: InsaneStepsItem[];
}