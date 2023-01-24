# Superscript Take Home Test Solution

This is my solution to the take home test! I hope you enjoy it. I appreciate and look forward to any feedback good and bad as I am keen to learn and get better everyday.

## Installation

Clone the repo to your local machine.
Then open it in your chosen IDE. (Visual Studio Code Terminal Example below)

```bash
1. cd (the location of the project on your machine)/form-page-superscript
2. code .

```

## Usage

```bash
# 1. install the necessary packages for the project.
npm install

# 2. run a local server so you can run the webapp.
npm run serve

# 3. Enjoy!
```

## Info

Index.html depends on: 
- Index.js - Contains the JS logic to handle the form submission.
- Api.js - contains the JS logic to handle the POST request to the API.

Success.html depends on: 
- Success.js - Handles the logic of populating the response data as the new account data.

LocalStorage is used to cache the response data so we can use it for the Success/Account Page

Some future proofing was done in case some data doesn’t exist on both expired and active product cases.

- Logo Animated Gif was done by me.

## Improvements:

- Adding RECAPTCHA to enable web hosts to distinguish between human and automated access to websites.
- Better Validation, such as regex checking to make sure password entered is secure, currently there is validation on whether the password is the same as the confirmed password or whether the fields are empty or not.
- Make form fields required in the front end as well saving us from making unnecessary API calls to the backend.
- Abstract the caching to a different file and add some error handling such as the storage not being a valid json which will then cause an error, we can do a try - catch to handle those errors.
- Use the full Vue.js framework to complete this project rather than just the library, but due to my lack of knowledge as of yet when it comes to Vue.js, I have decided to still use some aspects of Vue.js as it will be a good learning curve for me and it will make the code simpler and more readable.
- Put more time into UX/UI and make the web experience better for the user, such as adding a Loading animation while the form is submitting, so the user knows that the form is being submitted/account being created, etc.
- Add Unit Tests to make sure that all the logic is working as it should.

## Q&A

What would make this process easier in the future?
- Being exposed to Front-End work on a daily basis and having a deeper understanding of Vue.js as well as best Front-End practices will make this process quicker in the future.
