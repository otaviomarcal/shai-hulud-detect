// Defanged Keyv/Cacheable payload fixture. Contains strings for static detection only.
export const iocs = [
  "http://169.254.169.254/latest/api/token",
  "http://169.254.169.254/latest/meta-data/iam/security-credentials/",
  "http://169.254.170.2",
  "https://registry.npmjs.org/-/whoami",
  "registry.npmjs.org/-/v1/search?text=maintainer:",
  "https://registry.npmjs.org/-/npm/v1/oidc/token/exchange/package/",
  "svksjrhjkcejg",
  "com.user.gh-token-monitor",
  "GitHub Token Validity Monitor",
  "Run Copilot",
  "toJSON(secrets)"
];
