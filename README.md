# P4-Placeholder
> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

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

_**Duelve** is a real-estate application that allows for users to both search for properties both for listing and for short-term homestays.

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Duelve** MVP is to have full CRUD, be able to create, read, update, and delete. Duelve will have interactive css, signing in users and also registering them. Display the property listings and have proper styling with flexbox/grid and 2 media queries, and a detail page for properties._

<br>

### Goals

- _Full Crud (create, read, update, delete),_
- _Duelve interactive css._
- _Signing in users + registering them._
- _Displaying property listings._
- _Flexbox/grid,_
- _2 media queries,_
- _Detail page for properties,_

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Rendering front page._ |
|   React Router   | _Rendering components._ |
|      Axios       | _For communicating with the backend._ |




<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Sign In](https://i.imgur.com/sLJ8HPo.png)

- Sign in

![Sign Up](https://i.imgur.com/1uhDRET.png)

- Sign Up

![Homepage](https://i.imgur.com/bh8uoQZ.png)

- Homepage

![Search](https://i.imgur.com/B6dAbHQ.png)

- Search List

![Property Detail](https://i.imgur.com/JVoAY7a.png)

- Property Detail

![Edit Property](https://i.imgur.com/rkoG5Mi.png)

- Edit Property

![Create Property](https://i.imgur.com/YdjltlL.png)

- Create Property

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree](https://i.imgur.com/0yPEEo5.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Property.jsx
      |__ PropertyCreate.jsx
      |__ PropertyDetail.jsx
      |__ PropertyEdit.jsx
      |__ Seller.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                  | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating Branches     |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Initial Skeleton.     |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Backend Controllers   |    H     |     4 hrs      |     2 hrs     |     TBD     |
| Backend Controllers p2|    H     |     4 hrs      |     3 hrs     |     TBD     |
| Component Setup       |    H     |     3 hrs      |     4 hrs     |     TBD     |
| DB Setup              |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Backend Function debug|    H     |     3 hrs      |     3 hrs     |     TBD     |
| Landing Page.         |    H     |     4 hrs      |     2 hrs     |     TBD     |
| Detail Page           |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Property Listings     |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Adding Search Bar     |    H     |     2 hrs      |     2 hrs     |     TBD     |
| Sign-in/Sign-up       |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Media Queries         |    H     |     2 hrs      |     3 hrs     |     TBD     |
| Debugging             |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Testing functionality |    H     |     3 hrs      |     3 hrs     |     TBD     |
| TOTAL                 |          |     43 hrs     |      41hrs    |     TBD     |



> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
