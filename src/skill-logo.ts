const skillIconNames: Record<string, string> = {
  "Typescript": "typescript",
  "React": "react",
  "Node.js": "nodedotjs",
  "Python": "python",
  "AWS": "amazonaws",
  "Docker": "docker",
  "Azure": "microsoftazure",
  "Vue.js": "vuedotjs",
  "PostgreSQL": "postgresql",
  "Snowflake": "snowflake",
  "Flask": "flask",
  "PostGIS": "postgresql", // Using PostgreSQL icon as PostGIS is an extension
  "OpenAPI": "openapi",
  "Rapidoc": "rapidoc",
  "Redoc": "redoc",
  "Kubernetes": "kubernetes",
  "Grafana": "grafana",
  "GitHub Actions": "githubactions",
  "JavaScript": "javascript",
  "HTML": "html5",
  "CSS": "css3",
  "Git": "git",
  "Linux": "linux",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "Nginx": "nginx",
  "Jenkins": "jenkins",
  "Terraform": "terraform",
  "Ansible": "ansible",
  "Stripe": "stripe",
};

const skillIconUrls: Record<string, string> = Object.fromEntries(Object.entries(skillIconNames).map(([name, iconName]) => [name, `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${iconName}.svg`]));

export { skillIconNames, skillIconUrls };