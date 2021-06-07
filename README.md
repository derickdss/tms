# Task

Fans would like to be added to a waiting list when they have been unlucky after the first batch of tickets sold out quickly. This will enable them to come back to the site and buy when more tickets become available.

Create a form that does a POST request with JSON to `/api/waiting-list`.

The body should be JSON and contain `emailAddress` and `mobileNumber` fields

## Minimum requirements:

- Allow fans to ‘join the waiting list’ by adding their email and phone number
- A success message "You have been added to the waiting list" should be displayed on successful submission
- Display error message returned by the api on an unsuccessful submission
- Accessibility should be considered
- Design should be loosely based on the Ticketmaster website: https://www.ticketmaster.co.uk/

## Additional features:

- Form and field validation
- Tests
- Visualise loading state

## Notes

- You're welcome to use any method of styling you feel comfortable with. We use styled-components at Ticketmaster but we don't expect you to learn a new library for this exercise!
- You are encouraged to add comments in the code, or by extending this readme file explaining logic or reasoning for your decisions.


## The App
This app is written to help you add users to a waiting list when the tickets for a given event have been sold out. It starts with a landing page that shows you available events(just 1 in this case), from where you can proceed to book tickets for the event.
For ease of testing, I have set the app to show tickets have been sold out therefore disabling the book tickets button. The div will display providing the user with an option to add themselves to the waiting list. On clicking the "Join waiting list" button, the user will be presented with a form dialog to fill the necessary contact details. Here the user can fill in his/her details and click submit to fire the api to api/waiting-list(I have skipped adding a validator as this gives you an easy way to test some of the use cases of showing errors). Depending on the informaiton you have passed, you will either get a success or error message.

Bulk of the content on the landing page is for UI purposes only and doesnt really have a functional role. The Appbar tabs have some accessibiltiy features.

There are also some unit tests written which can be executed using `npm test`.

the web app can be run using `npm run dev -- -p 7005` 
(please use port number 7005 as I've hard coded that value in the api request.)

Notes: This app was written at pace and there were some things I would have liked to change but was forced to leave them alone cause of time constraints for now. These are things I would always come back and refactor in a real world scenario.
As always, your feedback is of great value!
