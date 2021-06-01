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


The App
This app will give you a landing page that shows you avaialble event(just 1 in this case), from where you can proceed to book tickets for the event.
In this case, we're going to be assuming that the tickets for a show have run out and focus on sending the necessary apis to add our contact information onto the waiting list. 

Bulk of the content on the landing page is for UI purposes only and doesnt really have a functional role. The Appbar tabs have some accessibiltiy features.

The main functional component is associated with the "Join waiting list" button. When clicked, the button would open a Form dialog to give you an option to enter you mobile and email information. I have skipped adding a validator as this gives you an easy whay to test some of the use cases of showing errors.
When you submit the form data, the data is then passed onto the addToWaitingList function which in turn fires a POST api to api/waiting-list with the necessary headers. Depending on the informaiton you have passed, you will either get a success or error message.

There are also some unit tests written which can be executed using `npm test`.

the web app can be run using `npm run dev -- -p <port number>` 

Notes: This app was written at pace and there were some things I would have liked to change but was forced to leave them alone cause of time constraints for now. These are things I would always come back and refactor in a real world scenario. As an example, I see the addWaitingListResponse and Error variables pretty much like duplicate code that needs to be refactored but time constraints. What appears like a quick fix might break the app.
