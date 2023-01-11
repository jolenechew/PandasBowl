# PandasBowl

## Overview

Panda's Bowl hopes to build a community where consumers can source for diet-specific recipe ideas and home-based businesses can increase their visibility by promoting their products in a marketplace.

**List food items to sell in a marketplace** - bringing consumers who are avid about food and diets to you \
**Upload recipes to share or further promote your products** - consumers would exhibit more interest in how the food is prepared and be more inclined to purchase your food product \
**View recipes tailored to your diets & nutritional needs** - be cognisant of the proportion of calories, fat, protein, and carbohydrates when viewing your recipe. 

## Features
### Authentication

Users are able to sign up with a username and password and view their profile, which indicates the amount of money spent and earned from the purchase and sale of food items respectively.

### Recipe Listings
Users would be able to browse, search and filter food items and recipes according to their diets. If the user is interested in buying the doof item, they can also purchase through the Recipe page after clicking on the particular item.

### Marketplace
Users can browse and filter food items according to price, popularity and diets. If the food item also has a recipe, they can view the recipe in the Recipe page as well.

### Recipe
Users can view the recipe of the food item, along with the dietary requirements it fulfills, the nutritional analysis of the recipe through Spoonacular API, and the HBB's location displayed through the Google Maps API to collect the item after purchase. The user can also pay for a food item through the Stripe payments system.

### My Listings
Users are able to view and add their food item listings to sell their food items in the marketplace.

### Chatbot 
Users are able to chat with a bot to receive guidance on how to navigate the website and to have their queries answered.

## Running the application 
Runs the app in the development mode.\
Open [https://main.d2nkpss24nmkjw.amplifyapp.com/] to view it in your browser.

### Deployment of application 
This application is deployed using Heroku and AWS Amplify.

### Login
Username: qwerty\
Password: qwerty

### Node.js setup
Install Node.js.
```bash
# Check to see if node was installed
node -v
npm -v
```

### Vue CLI setup
```bash
npm install -g @vue/cli
```

### App setup
Download dependencies and run the application on the server.
```bash
cd PandasBowl
npm i
npm run serve
```

## Clone files to server
Go to an empty directory in the server and clone the application.
```bash
git clone https://github.com/JieEnT/PandasBowl.git
```
