# Testing plan
## Types of testing:
We will conduct the following tests: 
Unit: Manual
Who will conduct the test: Developers 
When: Before integrating code with other codes, as well as before pushing code to Github.
Integration: manual
Who will conduct the test: Developers 
When: Before pushing code to Github 

## Test Environments
Developers will do manual testing of their code on their local machines. 

## Supported OS/Browser Combinations
Chrome browser on MacOS (tested on a MacBook Air laptop)
Edge browser on Windows (tested on a Surface Pro tablet)
Safari browser on ios (tested on an iPhone 13)

## Process
All component work will be done on different files within our repository. After development is complete, developers should conduct Unit tests on their code and ensure it passes its requirements. 
Once all tests are passed, the developers can submit a pull request. Since we have two developers, code review will be done by the repository owner. Merging of a Pull Request will trigger a Github Action for unit tests (stretch). If the Action succeeds, the push from either Atom or Github command-line will be triggered and our Github repository will be updated.
Developers should be responsible for all the pull requests, mergers, and other events in the development environment. They should notify the product designer once the pending features are deployed on Github.
The product designer will test the features that were deployed in the Github repository manually. They will be utilizing a web page test for the manual performance testing and the script below will be used for the manual acceptance testing on the supported OS/browser combinations. Each Saturday, the project manager will run the acceptance testing script on all supported OS/browser combinations. 

## Defect Management
If there are any defects are found during manual testing, they will be brought up to the group via H-Island discord chat. There, the PM can assign a teammate (either the developer who writes the code or the other developer) the task of fixing the code. Once a bug has been fixed, run the acceptance test again to make sure it has been fully resolved.


## Manual Acceptance Testing Script
Tests should be run in the production environment, on supported OS/browser combinations. There is no custom data for testing purposes and no need for authentication information.
### Home Page
1. Visit the home page of the application. 
2. Expect to see a title, text about the problem of the covid pandemic effect on SIDS economies, a footer, and a navigation bar. (Home Page 1.2.3.4.5.6)
3. Expect to see a call to action button to take the survey. (Home Page 1.1)
4. Click on the button and expect to be redirected to the survey page. (Home Page 1I .1)
### Survey Question page: 
1. Expect to see a title, a question, a question number, a list of answers, a “back”, and an exit button (Survey page 1.
2. Expect the first question to only have the next button (Survey page 5)
3. Expect the last question to only have one a “back” button and a “submit survey” button (Survey page 5)
4. Expect both back and next buttons to perform their given action (Survey page 6)
### Click the “Submit Survey” button, expect to be redirected to the results page (Results page 9)
1. Expect the exit button to take users to the home page (Survey page 1)
2. Expect that every question is on a different page. (Survey page 2.)
3. Expect to be able to edit responses of the survey (Survey page 7)

### Results page: 
1. Expect to see a title, 3 cards with the SIDS results, back on the home page. (Results Page 1)
2. Expect that each card displays a picture, a title, and a flag of their SIDS. (Survey page 2.3.4)
3. Expect to see a footer and a header. (Survey page 5.6)



