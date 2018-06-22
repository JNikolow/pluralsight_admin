import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./course/CoursesPage";
import CourseRouter from './CourseRouter';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses" component={CoursesPage} />          
      <Route path="/course" component={CourseRouter} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </main>
);

export default MainRouter;
