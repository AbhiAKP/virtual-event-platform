import React from "react";
import HeaderContainer from "../../components/global/HeaderContainer";
import CreateCoursePage from "../../components/createCourse/CreateCoursePage";
import FooterContainer from "../../components/global/FooterContainer";

function CreateCourse() {
  return (
    <div>
      <HeaderContainer />
      <CreateCoursePage />
      <FooterContainer />
    </div>
  );
}

export default CreateCourse;