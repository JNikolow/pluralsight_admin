import React from "react";
import { Switch, Route } from "react-router-dom";
import ManageCoursePage from './course/ManageCoursePage';

const CourseRouter = () => (
  <Switch>
    // Rout-a без параметри трябва да е с exact или да е първи
    <Route exact path="/course" component={ManageCoursePage} />
    <Route path="/course/:id" component={ManageCoursePage} />
  </Switch>
);

export default CourseRouter;