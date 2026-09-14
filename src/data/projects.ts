export type Project = {
  title: string;
  category: string;
  description: string;
  outcome: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "AWS Kubernetes Platform",
    category: "Platform Engineering",
    description:
      "Designed a scalable Kubernetes platform on AWS with automated provisioning, monitoring, and secure application delivery.",
    outcome: "Improved deployment consistency and reduced operational overhead across environments.",
    tech: ["AWS", "EKS", "Terraform", "Helm", "Prometheus"],
  },
  {
    title: "GitOps Delivery Pipeline",
    category: "CI/CD Automation",
    description:
      "Implemented a GitOps workflow that validates, builds, and deploys containerized applications through controlled environments.",
    outcome: "Enabled repeatable releases and faster delivery with stronger change visibility.",
    tech: ["GitHub Actions", "Argo CD", "Docker", "Kubernetes"],
  },
  {
    title: "Cloud Observability Stack",
    category: "Monitoring & Reliability",
    description:
      "Created dashboards and alerts that give engineering teams actionable visibility into infrastructure and application health.",
    outcome: "Helped teams detect issues earlier and improve system reliability and response time.",
    tech: ["Prometheus", "Grafana", "CloudWatch", "Alertmanager"],
  },
];
