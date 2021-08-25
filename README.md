# Duelve

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Duelve** is a real-estate application that allows for users to both search for properties both for listing and for short-term homestays.

<br>

## MVP


_The **Duelve** MVP is to have full CRUD, hand rolled css, and authentication for users. Duelve will also display the property listings and have proper styling with flexbox/grid and 2 media queries, and a detail page for properties._

<br>

### Goals

- _Full Crud (create, read, update, delete),_
- _Proper CSS._
- _Signing in users + registering them._
- _Displaying property listings._
- _Flexbox/grid,_
- _2 media queries._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Rendering front page._ |
|   React Router   | _Rendering components._ |
|      Axios       | _For communicating with the backend._ |




<br>

### Client (Front End)

#### Wireframes

- Sign in

![Sign In](https://i.imgur.com/VOcFRte.png)

- Sign Up

![Sign Up](https://i.imgur.com/l5NGUaY.png)

- Homepage

![Homepage](https://i.imgur.com/DbBA60T.png)

- Search List

![Search](https://i.imgur.com/Wig18aC.png)

- Property Detail

![Property Detail](https://i.imgur.com/3MMZU21.png)

- Edit Property

![Edit Property](https://i.imgur.com/L7fPAaT.png)

- Create Property

![Create Property](https://i.imgur.com/uzwFljs.png)

#### Component Tree


[Component Tree](https://i.imgur.com/LlaqJig.png)

#### Component Architecture


``` structure
src
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Property.jsx
      |__ PropertyCreate.jsx
      |__ PropertyDetail.jsx
      |__ PropertyEdit.jsx
      |__ Category.jsx
      |__ Signin.jsx
      |__ Signup.jsx
|__ components/
      |__ Navbar
       |__ Navbar.jsx
|__ services/
      |__ apiconfig.js
      |__ auth.js
      |__ properties.js
      |__ category.js
```

#### Time Estimates


| Task                  | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating Branches     |    L     |     1 hrs      |     1 hrs     |    3 hrs    |
| Initial Skeleton.     |    H     |     1 hrs      |     1 hrs     |     TBD     |
| Backend Controllers   |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Backend Controllers p2|    H     |     1 hrs      |     1 hrs     |     TBD     |
| Component Setup       |    H     |     3 hrs      |     4 hrs     |     TBD     |
| DB Setup              |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Backend Function debug|    H     |     3 hrs      |     3 hrs     |     TBD     |
| Landing Page.         |    H     |     4 hrs      |     2 hrs     |     TBD     |
| Detail Page           |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Property Listings     |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Adding Search Bar     |    H     |     2 hrs      |     2 hrs     |     TBD     |
| Sign-in/Sign-up       |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Styling part 1        |    H     |     4 hrs      |     3 hrs     |     TBD     |
| Styling part 2        |    H     |     4 hrs      |     3 hrs     |     TBD     |
| Styling part 3        |    H     |     4 hrs      |     3 hrs     |     TBD     |
| Debugging             |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Testing functionality |    H     |     3 hrs      |     3 hrs     |     TBD     |
| TOTAL                 |    H     |     48 hrs     |     42hrs     |     TBD     |




<br>

### Server (Back End)

#### ERD Model


[ERD](https://i.imgur.com/fdUaceG.png)
<br>

***

## Post-MVP

- Have interactive css
- Filtering through properties
- Comments
- Form for contacting seller

***

## Code Showcase


## Code Issues & Resolutions

