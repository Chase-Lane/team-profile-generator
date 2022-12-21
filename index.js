const inquirer = require('inquirer');
const fs = require('fs')

//const namesHTML = ({}) =>

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your team managers name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your managers employee ID?',
      name: 'ID',
    },
    {
      type: 'input',
      message: 'What is your managers e-mail address?',
      name: 'email',
    },
    
  {
    type: 'list',
    message: 'Which employee title would you like to add?',
    name: 'Job_Title',
    choices: ['Intern','Engineer'],
     },
    {
     type: 'input',
     message: 'What is your team managers name?',
     name: 'username',
  },
    {
    type: 'input',
    message: 'What is your managers employee ID?',
    name: 'ID',
  },
 {
    type: 'input',
    message: 'What is your managers e-mail address?',
    name: 'email',
 },
                
    
  ])
  .then((response) => {  const HTMLnames = namesHTML(response);
    fs.writeFile('index.html', HTMLnames, (err) =>
    err? console.log(err) : console.log('Completed'));
});
