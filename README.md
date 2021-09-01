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

- _Full Crud,_
- _Hand rolled CSS._
- _User Authentication._
- _Displaying property listings._
- _Flexbox/grid,_
- _2 media queries._

<br>

### Libraries and Dependencies

|   Library    | Description                           |
| :----------: | :------------------------------------ |
|    React     | _Rendering front page._               |
| React Router | _Rendering components._               |
|    Axios     | _For communicating with the backend._ |

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

```structure
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

| Task                   | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating Branches      |    L     |     1 hrs      |     1 hrs     |    3 hrs    |
| Initial Skeleton.      |    H     |     1 hrs      |     1 hrs     |    3 hrs    |
| Backend Controllers    |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| Backend Controllers p2 |    H     |     1 hrs      |     1 hrs     |    3 hrs    |
| Component Setup        |    H     |     3 hrs      |     4 hrs     |    2 hrs    |
| DB Setup               |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Backend Function debug |    H     |     3 hrs      |     3 hrs     |    2 hrs    |
| Landing Page.          |    H     |     4 hrs      |     2 hrs     |    3 hrs    |
| Detail Page            |    H     |     3 hrs      |     2 hrs     |    2 hrs    |
| Property Listings      |    H     |     3 hrs      |     3 hrs     |    2 hrs    |
| Adding Search Bar      |    H     |     2 hrs      |     2 hrs     |    3 hrs    |
| Sign-in/Sign-up        |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Styling part 1         |    H     |     4 hrs      |     3 hrs     |    3 hrs    |
| Styling part 2         |    H     |     4 hrs      |     3 hrs     |    3 hrs    |
| Styling part 3         |    H     |     4 hrs      |     3 hrs     |    2 hrs    |
| Debugging              |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Testing functionality  |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| TOTAL                  |    H     |     48 hrs     |     42hrs     |    45hrs    |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://i.imgur.com/fdUaceG.png)
<br>

---

## Post-MVP

- Have interactive css
- Filtering through properties
- Comments
- Form for contacting seller

---

## Code Showcase

```
  const handleCreate = async (formData, id) => {
    const PropertyData = await postProperty(formData);
    setProperties((prevState) => [...prevState, PropertyData]);
    handleCategoryAdd(id, PropertyData.id)
    history.push('/properties');
  };
```

## Code Issues & Resolutions

- Had an issue getting the single property to edit the file. It only existed in the
  Property Detail. Had to move the use effect to the main container and then move the
  single property into the main container.
