Purpose of the project is easy to develope , easy to maintain , easy to debug , enforce coading standards for all team members.
considering this i used typescript and ts-lint...considering this reason only i increased the dev-dependency in the this project

##Technical stack 
-Typescript 
- React 
- Redux 
- Webpack 
- JEST 
- Enzyme

Unable to use SASS due to lack of time.

Justification for Dependecy Used in the project.

I used Typescript considering its benifits in long run of the project like in managing systematic code in team,debugging, auto suggession in IDE , compile time warnings etc.

I used bootstrap to make responsive instead of writing css for different media resolution to save time and provide better user experience

Polyfill Dependecy like isomorhic-fetch / es6-promise and object.assign for cross browser compitability 

Jest and enzyme [also redux-mock-store/ enzyme adapter] for testing purpose

User exciting feature added like
-search bar with debounce / auto suggession of movies without clicking search icon
-desktop / mobile freindly UI
-Visited movie page listing as jump links

![Component Architecture](/src/cd.png "Component Architecture")

To instlall dependancy
npm install

To Start the Project
npm start

To run test cases
npm test
