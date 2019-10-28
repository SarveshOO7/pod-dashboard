# Pod 5 Operator's Dashboard &nbsp; ![GitHub Logo](https://raw.githubusercontent.com/badgerloop-software/pod-dashboard/master/src/public/images/icon.png)
*Authors: Eric Udlis, Luke Houge, Alex Vesel, Michael Handler*

## Platform/Technologies:
- [Electron](https://electronjs.org) (our software framework)
- [Node.js](https://nodejs.org/en/) (our javascript runtime)
- [eslint](https://eslint.org) (our linting utility)
- [Github Actions](https://github.com/actions) (our continuous integration service)
- [Jest](http://jestjs.io) (our javascript testing framework)

## Run Instructions
``` 
git clone https://github.com/badgerloop-software/pod-dashboard.git
cd pod-dashboard/src
npm install
npm start
```

## Testing &nbsp; [![Actions Status](https://github.com/badgerloop-software/pod-dashboard/workflows/Node%20CI/badge.svg)](https://github.com/badgerloop-software/pod-dashboard/actions)
https://github.com/badgerloop-software/pod-dashboard/actions
- Configured with eslint for formatting tests
- Configured with jest for unit testing and coverage
- CI handled by Github Actions

It is currently configured to run a pretest that uses eslint to check for any formating and stylistic errors. If that passes without any issues, then it runs jest which completes all unit tests that are setup (none except for a test called add.js for now) and then displays the coverage (what percent is unit tested). Github actions will run automatically on any commit, and before a pull request to check that all checks passed.

### Some commands to know:
To run just lint: 
```
npm run pretest
```
or 
```
npn run lint
```
To run lint on a certian file
```
eslint [file].js [dir]
```
To have lint fix some errors automatically (good for spacing issues)
```
npm run pretest -- --fix
```
\
To run just coverage test:
```  
npm run coverage
```
\
To run lint and unit tests with coverage: 
```
npm test
```
\
To view coverage report  open the following HTML file:
```
pod-dashboard/coverage/lcov-report/index.html
```
## File Structure
```├── .eslintrc.js                 // Config file for eslint, our styling tester
├── .eslintrc.json                  // Config file for eslint, our styling tester
├── .gitignore                      // Tells git which files/directories to ignore (node_modules mainly)
├── /Exports/                       // Output folder for the .json files generated from the testing tool portion of the dash
│  ├── Example.json
│  ├── README.md
├── README.md                       // Readme file listing general information and install instructions
├── /node_modules/                  // Folder generated by node when you run `npm i` containing all of our packages  
├── package-lock.json               // File Generated by node that lists all our dependancies
├── package.json                    // Our node configuration file- contains scripts for starting dashboard, and running tests
├── /src/
│  ├── app.js                       // Run the main Electron Process
│  ├── battery.html                 // Battery page HTML file
│  ├── cache.js                     // Temporary Cache to store telemetry information before being exported
│  ├── dataRecording.js             // Temporary cache to hold data while recording
│  ├── constants.json               // Store all constants in one place
│  ├── database.json                // Master file with all telemetry information
│  ├── index.html                   // Main page HTML file
│  ├── terminal.html                // Terminal page HTML file    
│  ├── testPodServer.js             // A file that is used to send  dummy data to the dashboard for testing (run node testPodServer.js)
│  └── testing.html                 // Testing page HTML file
│  ├── /public/
│  │  ├── /fonts/                   // Our fonts folder containing the montserrat source files for offline compatibility
│  │  ├── /images/                  // Our images folder
│  │  ├── /javascripts/             // Folder for our public JS files (both for frontend and backend)
│  │  │  ├── Countdown.js           //
│  │  │  ├── Timer.js               //
│  │  │  ├── batteries.js           //
│  │  │  ├── charthandling.js       // Create, fill, and clear charts using Plotly.js
│  │  │  ├── communication.js       // The hub of all incomming and outgoing connections
│  │  │  ├── config.js              // Read and Write to the Constants File
│  │  │  ├── datainterfacing.js     // Interface with the local tempory database and long term database
│  │  │  ├── dynamicloading.js      // Dynamically fill the dashboard with content based off database.JSON
│  │  │  ├── handler.js             // Handle all updaters and interfacing between the frontend and backend
│  │  │  ├── main.js                // Handles all responsive UI elements of the dashboard
│  │  │  ├── renderer.js
│  │  │  ├── terminal.js            // Main Javascript file for the terminal
│  │  │  └── testingtool.js         // Main Javascript file for the Post Run Analysis Tool
│  │  ├── /stylesheets/
│  │  │  ├── fonts.css              // Imports font files
│  │  │  ├── main.css               // Main CSS file
│  │  │  ├── main.grid.css          // CSS for main view grid layout
│  │  │  ├── terminal.grid.css      // CSS for terminal view
│  │  │  └── testingtool.grid.css   // Test File to Send UDP Packets to the dashboard```


