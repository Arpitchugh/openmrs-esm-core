export const sharedDependencies = {
  dayjs: () => require("dayjs"),
  i18next: () => require("i18next"),
  react: () => require("react"),
  "react-dom": () => require("react-dom"),
  "react-router-dom": () => require("react-router-dom"),
  "react-i18next": () => require("react-i18next"),
  "single-spa": () => require("single-spa"),
  "@openmrs/esm-api": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-app-shell": () => ({}),
  "@openmrs/esm-breadcrumbs": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-config": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-module-config": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-context": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-error-handling": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-extensions": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-extension-manager": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-framework": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-globals": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-react-utils": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-state": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-styleguide": () => require("@openmrs/esm-framework"),
  "@openmrs/esm-utils": () => require("@openmrs/esm-utils"),
  "@openmrs/esm-offline": () => require("@openmrs/esm-offline"),
  "carbon-components": () => require("carbon-components"),
  "carbon-icons": () => require("carbon-icons"),
  rxjs: () => require("rxjs"),
};
