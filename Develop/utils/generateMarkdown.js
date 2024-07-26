// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // fix the first part so it won't stop here is license is nothing.
     if (license === "MIT"){
      licenseIBadge ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";}
    else if (license === "Apache License 2.0"){
      licenseBadge ="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";}
    else if (license === "GNU General Public License(GPL) v3"){
      licenseBadge ="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";}
    else if (license === "Mozilla Public License 2.0"){
      licenseBadge ="[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";}
    else if (license === "BSD 3-Clause License"){
      licenseBadge ="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";}
    else{
      licenseBadge = "";}
    return licenseBadge
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    licenseLink ="https://opensource.org/licenses/MIT";}
  else if (license === "Apache License 2.0"){
    licenseLink = "https://opensource.org/licenses/Apache-2.0";}
  else if (license === "GNU General Public License(GPL) v3"){
    licenseLink ="https://www.gnu.org/licenses/gpl-3.0";}
  else if (license === "Mozilla Public License 2.0"){
    licenseLink ="https://opensource.org/licenses/MPL-2.0";}
  else if (license === "BSD 3-Clause License"){
    licenseLink ="https://opensource.org/licenses/BSD-3-Clause";}
  else{
   licenseLink = "";}
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  return  `This repository is licensed under the ${licenseBadge} [license](${licenseLink})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseInfo = renderLicenseSection
  return `# ${data.title}
  
  ##Description 
  ${data.description}
  ## Table of Contents
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Contributing](#Contributing)
  -[Tests](#Tests)
  -[Questions](#Questions)
  -[License](#License)

  ##Installation
  ${data.installation}
 
  ##Usage
  ${data.usage}

  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}

  ##Questions
  If you have any questions please contact me [${data.gitHubUser}](https://github.com/${data.githubUser}) or email me at ${data.email}

  ##License
  ${licenseInfo}
`;
}

module.exports = generateMarkdown;
