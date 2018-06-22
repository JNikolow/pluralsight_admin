import React from "react";
import { Switch, Route } from "react-router-dom";
import ManageCoursePage from './course/ManageCoursePage';

// Rout-a ��� ��������� ������ �� � � exact ��� �� � �����
const CourseRouter = () => (
  <Switch>
    <Route exact path="/course" component={ManageCoursePage} />
    <Route path="/course/:id" component={ManageCoursePage} />
  </Switch>
);

export default CourseRouter;