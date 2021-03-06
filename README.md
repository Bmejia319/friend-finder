# Language Match App

## Description

*Language Match* matches a user to their most compatible coding language based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

The application is implemented using a Node.js and Express server on the back end and the Materialize CSS framework on the front end.