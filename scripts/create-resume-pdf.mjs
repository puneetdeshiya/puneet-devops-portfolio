import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";

const outputPath = path.resolve("public/resume.pdf");
const document = new PDFDocument({ margin: 46, size: "A4" });
const output = fs.createWriteStream(outputPath);
document.pipe(output);

const orange = "#f59e0b";
const slate = "#334155";
const dark = "#0f172a";
const pageBottom = 795;

function newPageIfNeeded(height) {
  if (document.y + height > pageBottom) document.addPage();
}

function heading(text) {
  newPageIfNeeded(34);
  document.moveDown(0.7).font("Helvetica-Bold").fontSize(12).fillColor(orange).text(text);
  document.moveTo(46, document.y + 4).lineTo(549, document.y + 4).strokeColor("#cbd5e1").lineWidth(0.6).stroke();
  document.moveDown(0.65);
}

function bullet(text) {
  newPageIfNeeded(38);
  const startY = document.y;
  document.font("Helvetica").fontSize(9.5).fillColor(slate).text("•", 52, startY);
  document.text(text, 66, startY, { width: 480, lineGap: 2 });
  document.y += 4;
}

function experience(role, company, dates, responsibilities) {
  newPageIfNeeded(112);
  document.font("Helvetica-Bold").fontSize(11).fillColor(dark).text(role);
  document.font("Helvetica-Bold").fontSize(9.5).fillColor(orange).text(company);
  document.font("Helvetica-Oblique").fontSize(9).fillColor(slate).text(dates);
  document.moveDown(0.35);
  responsibilities.forEach(bullet);
  document.moveDown(0.35);
}

document.rect(0, 0, 595, 114).fill(dark);
document.fillColor("#ffffff").font("Helvetica-Bold").fontSize(25).text("Puneet Kumar Deshiya", 46, 38);
document.fillColor("#fbbf24").font("Helvetica").fontSize(11).text("Senior DevOps Engineer | AWS Cloud Engineer | Platform Engineer", 46, 73);
document.fillColor("#e2e8f0").font("Helvetica").fontSize(8.8).text(
  "puneetdeshiya@yahoo.com  |  +91-7983328185  |  Village + Post Kairi, Shamli, Uttar Pradesh 251305, India",
  46,
  92,
  { width: 505 }
);
document.y = 126;

heading("PROFESSIONAL SUMMARY");
document.font("Helvetica").fontSize(9.7).fillColor(slate).text(
  "Senior DevOps and AWS Cloud Engineer with 8+ years of experience building, automating, securing, and operating modern cloud platforms. Experienced in AWS architecture, Kubernetes, infrastructure as code, CI/CD, GitOps, observability, and production reliability engineering.",
  { width: 503, lineGap: 3 }
);

heading("PROFESSIONAL EXPERIENCE");
experience("Senior DevOps Engineer", "IDX", "Sep 2023 - Present", [
  "Lead the design and operation of secure, highly available AWS cloud infrastructure for production workloads.",
  "Architect and manage Kubernetes platforms on Amazon EKS, including cluster reliability and scaling.",
  "Define and improve CI/CD standards using Jenkins and GitHub Actions to enable reliable releases.",
  "Drive infrastructure automation with Terraform, GitOps practices, monitoring, and incident-response improvements.",
]);
experience("DevOps Engineer", "Sinch", "Jan 2020 - Aug 2023", [
  "Managed Linux servers and cloud environments to maintain stable, secure application platforms.",
  "Built monitoring and alerting with Prometheus, Grafana, and CloudWatch to improve service visibility.",
  "Automated routine deployment and operational tasks with Python, Bash, and infrastructure-as-code tooling.",
  "Maintained CI/CD pipelines, supported releases, and troubleshot production issues to improve deployment reliability.",
]);
experience("System Administrator", "Hitech Infomatic Pvt. Ltd.", "Jan 2017 - Jun 2019", [
  "Administered Linux servers, user access, patching, backups, and routine system maintenance.",
  "Configured network services, DNS, firewalls, and connectivity for business systems.",
  "Monitored production servers, resolved incidents, and documented operational procedures for reliable support.",
]);

heading("TECHNICAL SKILLS");
const skillGroups = [
  ["Cloud", "AWS, Azure, GCP"],
  ["Containers", "Docker, Kubernetes, Helm"],
  ["CI/CD & GitOps", "Jenkins, GitHub Actions, GitLab CI/CD, Argo CD"],
  ["Infrastructure", "Terraform, Ansible, CloudFormation"],
  ["Observability", "Prometheus, Grafana, ELK Stack, CloudWatch"],
  ["Systems", "Linux, Ubuntu, CentOS, Amazon Linux"],
  ["Automation", "Python, Bash, YAML, JSON"],
  ["Networking", "VPC, Route 53, Load Balancer, VPN, DNS"],
];
skillGroups.forEach(([label, values]) => {
  newPageIfNeeded(24);
  document.font("Helvetica-Bold").fontSize(9.5).fillColor(dark).text(`${label}: `, { continued: true });
  document.font("Helvetica").fillColor(slate).text(values);
  document.moveDown(0.25);
});

heading("CERTIFICATIONS");
[
  "AWS Solutions Architect Associate",
  "AWS DevOps Engineer Professional",
  "Certified Kubernetes Administrator (CKA)",
  "HashiCorp Terraform Associate",
  "Red Hat Certified Engineer (RHCE)",
  "Microsoft Azure Administrator",
].forEach(bullet);

heading("SELECTED PROJECT HIGHLIGHTS");
bullet("AWS Kubernetes Platform — scalable Amazon EKS platform with automated provisioning, monitoring, and secure delivery.");
bullet("GitOps Delivery Pipeline — controlled application delivery using GitHub Actions, Argo CD, Docker, and Kubernetes.");
bullet("Cloud Observability Stack — actionable dashboards and alerts using Prometheus, Grafana, CloudWatch, and Alertmanager.");

document.end();
await new Promise((resolve, reject) => {
  output.on("finish", resolve);
  output.on("error", reject);
});
