// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license !== "None") {
    return `https://img.shields.io/badge/License-${data.license}-lightgreen`
  } else "";
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license !== "None") {
    // write link to License.txt file
  } else "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   renderLicenseBadge()
//   renderLicenseLink()
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
   [ - License](#license)

   [ - Description](#description)
 
   [ - Installation](#installation)
 
   [ - Usage](#usage)
   
   [ - Contributing](#contributing)
   
   [ - Tests](#tests)
   
   [ - Questions](#questions)
  
 
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}


  ## Description
  ${data.description}
  
  
  ## Installation
 ${data.installation}
 

  ## Usage
 ${data.usage}
 
  
  ## Contributing
  ${data.contributions}
 
  
  ## Tests
  ${data.tests}
  

  ## Questions
  Feel free to contact me via email, ${data.email} if you have any questions regarding this project. 
  Additionally, my GitHub profile is ${data.github} to view more projects.
`;
}

module.exports = generateMarkdown;
