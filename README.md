# Udacity React-Native Mobile Flashcards

## Overview

This is the final project in the Udacity React Nanodegree.  
It's been built and tested for Android devices.

The app replicates the flashcard method of studying. When opened it will default to a list of decks available.  
If there are no current decks it will populate the list with 2 dummy decks.
There is also an option to create a new deck.

The user can click on a deck in the list to navigate to the deck view where they can take a quiz on the topic, add a card
to the deck or delete the deck.

When a quiz is taken the user can click to view the answer to each question and report if they guessed correctly or incorrectly.  
Once completed the user is shown their score against the number of cards.
A full score is rewarded with a gold star, scoring null will show a sad face icon instead.

There is also a daily notification to study that is cleared and
reset for the next day when a quiz is completed.

## Instructions

Install project dependencies with `yarn install` or `npm install`

Start the project with one of the following commands,  
`yarn start`  
`expo start`  
`npm start`

To run on an Android device, download the Expo Go app and scan the QR code that shows up when starting the project.

## Stack

The project uses: [React-Native](https://reactnative.dev/), [Expo](https://docs.expo.io/), [Redux Toolkit](https://redux-toolkit.js.org/), [Async Storage](https://react-native-async-storage.github.io/async-storage/).
