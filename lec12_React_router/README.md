#  [Lecture12 : React Router ](https://www.youtube.com/watch?v=VJov5QWEKE4&ab_channel=ChaiaurCode)

 This lecture covers the basics of navigation in React applications. It explains how to set up routes, handle different URLs, and implement dynamic navigation between components using react-router-dom. The tutorial includes examples on how to create route paths, link components, and manage nested routes. It emphasizes the importance of the router in single-page applications for delivering a seamless user experience without reloading the page.

## Screenshot

![Imgage1](./public/Screenshot%202024-09-29%20151618.png)
![Imgage2](./public/Screenshot%202024-09-29%20151628.png)

## [Watch Screen Recording](./public/Screen%20Recording%202024-09-29%20142948.mp4)

 
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Routes](#Routes)
- [Components](#Components)
- [Dynamic Routing](#dynamic-routing)

## Introduction

React Router is a standard library for routing in React. It helps to build a single-page application where different views can be rendered based on the URL without refreshing the browser.

This project demonstrates:
- Basic routing setup using `BrowserRouter`.
- Creating routes with `Route`.
- Navigation using `Link` and `NavLink`.
- `Nested routing` for components.
- Handling `dynamic parameters` in routes.
- Implementing a `fallback route` for non-existent pages (404).

## Features

- **BrowserRouter**: Wraps the main component to enable routing.
- **Route Components**: Defines individual routes for various components.
- **Link & NavLink**: Provides navigation without a full-page refresh.
- **Nested Routing**: Allows for hierarchical routing.
- **Dynamic Parameters**: Supports routes with parameters like `/user/:id`.
- **Fallback Route**: Catch-all route for undefined URLs (404).


## Routes
The application defines the following routes:

- `/:` (Home page):  Renders the `Home.js` component. This is the default route accessed when no specific path is provided.
- `/about` (About page):  Renders the `About.js` component, displaying information about the application.
- `/users/:id` (Dynamic user pages):  This route uses a dynamic parameter `:id`. The `Users.js` component is responsible for handling this route and extracting the user ID from the URL. The component can then display user-specific information based on the extracted ID.
- `/nested` (Nested routes): (Demonstrated within a parent component, not shown here) This route demonstrates how to define nested routes within a parent component. This allows for more complex routing structures.
 
## Components
- `App.jsx`: Main application file responsible for defining routes.
- `Home.jsx`: Component rendered for the root path `/`.
- `About.jsx`: Component rendered for the `/about` path.
- `Contact.jsx` : Display Contact info
- `Github.jsx` : Fetch and display Github API  
- `Header.jsx`: it contains all Header components
- `Home.jsx`: it contains home page
- `Layout.jsx`: It is root folder which loads **Header** and **Outlet** and **Footer**
- `Users.jsx` Component demonstrating dynamic routing with user ID extraction.
 

## Hooks
- `useState:` Manages local state within functional components.

- `useEffect:` Handles side effects, such as data fetching or subscriptions.
- `useParams:` Extracts parameters from the URL, enabling the application to respond dynamically based on the route.
- `useLoaderData:` Fetches data associated with a route before rendering the component, streamlining data management and ensuring that the necessary data is available.