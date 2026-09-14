export type Project = {
  title: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "AWS Kubernetes Platform",
    description:
      "Designed a scalable Kubernetes platform on AWS with automated provisioning, monitoring, and secure application delivery.",
    tech: ["AWS", "EKS", "Terraform", "Helm", "Prometheus"],
  },
  {
    title: "GitOps Delivery Pipeline",
    description:
      "Implemented a GitOps workflow that validates, builds, and deploys containerized applications through controlled environments.",
    tech: ["GitHub Actions", "Argo CD", "Docker", "Kubernetes"],
  },
  {
    title: "Cloud Observability Stack",
    description:
      "Created dashboards and alerts that give engineering teams actionable visibility into infrastructure and application health.",
    tech: ["Prometheus", "Grafana", "CloudWatch", "Alertmanager"],
  },
];
