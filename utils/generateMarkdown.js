// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(data) {
//   if (data.license !== "None") {
//     return `![](https://img.shields.io/badge/License-${data.license}-lightgreen)`
//   } else return "";
// } 



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(data) {
//   if (data.license !== "None") {
//     // write link to License.txt file
    
//   } else "";
// }


var MIT = `The MIT license gives users express permission to reuse code for any purpose, 
sometimes even if code is part of proprietary software. As long as users include the original 
copy of the MIT license in their distribution, they can make any changes or modifications to the 
code to suit their own needs.`;

var apache = `Apache License 2.0 allows users of the software to distribute, modify, or otherwise use 
software for any purpose, as long as the user complies with the license terms. The terms state that 
users can’t remove existing copyright, patent, trademarks and attribution notices.`;

var GPL = `You may copy, distribute and modify the software as long as you track changes/dates in source files. 
Any modifications to or software including (via compiler) GPL-licensed 
code must also be made available under the GPL along with build & install instructions.`;

var BSD = `The BSD 3-clause license allows you almost unlimited freedom with the software so 
long as you include the BSD copyright and license notice in it (found in Fulltext). `;


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(data) {
//   if (data.license !== "None") {
//     if ("MIT") {return MIT;} 
//           else if ("APACHE 2.0") {return apache;} 
//           else if ("GPL 3.0") {return GPL;}
//           else if ("BSD 3") {return BSD;}
//         }
  
//   else "There is no licensing information for this project."
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  var renderLicenseBadge = function(data) {
    if (data.license !== "None") {
      return `![](https://img.shields.io/badge/License-${encodeURI(data.license)}-lightgreen)`
    } else return "";
  }

  var renderLicenseLink = function(data) {
    if (data.license !== "None") {
      //     // write link to License.txt file
          
        } else "";
  }

  var renderLicenseSection = function(data) {
    switch (data.license) {
      case "MIT" : return MIT;
      case "APACHE 2.0" : return apache; 
      case "GPL 3.0" : return GPL;
      case "BSD 3" : return BSD;
      default : return "There is no licensing information for this project."
    }
}


  return `# ${data.title}

  ${renderLicenseBadge(data)}

  ## Table of Contents
   
   [ - Description](#description)
 
   [ - Installation](#installation)
 
   [ - Usage](#usage)
   
   [ - Contributing](#contributing)
   
   [ - Tests](#tests)
   
   [ - Questions](#questions)
  
   [ - License](#license)

 
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
  Additionally, my GitHub profile is [${data.github}](https://github.com/${data.github}) to view more projects.

  ## License
  ${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
 