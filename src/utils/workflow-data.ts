import { useTranslations } from "next-intl";

export interface WorkflowItem {
  id: string;
  stepNumber: number;
  title: string;
  desc: string;
  checklist: string[];
  className: string;
  orientation: "left" | "right";
}

export function useWorkflowData(): WorkflowItem[] {
  const t = useTranslations("home.workflow.items");

  const workflowConfig = [
    { id: "1", className: "bg-main -rotate-2", orientation: "left" as const },
    {
      id: "2",
      className: "bg-pink-400 -rotate-4 lg:-mt-18",
      orientation: "right" as const,
    },
    {
      id: "3",
      className: "bg-third rotate-2 lg:-mt-12",
      orientation: "left" as const,
    },
    {
      id: "4",
      className: "bg-main rotate-2 lg:-mt-12",
      orientation: "right" as const,
    },
    {
      id: "5",
      className: "bg-pink-400 -rotate-5 lg:-mt-8",
      orientation: "left" as const,
    },
    {
      id: "6",
      className: "bg-third -rotate-2 lg:-mt-18",
      orientation: "right" as const,
    },
  ];

  return workflowConfig.map((config, index) => ({
    id: config.id,
    stepNumber: index + 1,
    title: t(`${config.id}.title`),
    desc: t(`${config.id}.desc`),
    checklist: t.raw(`${config.id}.checklist`) as string[],
    className: config.className,
    orientation: config.orientation,
  }));
}
