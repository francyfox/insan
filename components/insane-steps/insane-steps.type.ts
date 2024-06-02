export interface InsaneStepsItem {
  title: string;
  desc: string;
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