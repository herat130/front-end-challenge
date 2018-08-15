Purpose of the project is to easy development , easy to maintain with enforce coading standards for team members.
considering this i used typescript and ts-lint ...due to this reason only i increased the dev dependency in the this project
still i want to use noad-sass but as i used bootstrap my css requirement is low and used the

Technical stack : Typescript - React - Redux - Webpack - JEST - Enzyme

Justification for Dependecy Used in the project.
I used Typescript considering its benifits in long run of the project like in managing systematic code in team,debugging, auto suggession in IDE , compile time warnings etc.
I used bootstrap to make responsive instead of writing css for different media resolution to save time and provide better user experience
Polyfill Dependecy like isomorhic-fetch / es6-promise and object.assign to work application properly in different browser.
Jest and enzyme [also redux-mock-store/ enzyme adapter] for testing purpose

To Start the Project
npm start

To run test cases
npm test