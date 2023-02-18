import "./designer.css";

const Designer = ({ resumeContext, input }) => {
  return (
    <>
      <div id="designerResume">
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i,900,900i" rel="stylesheet" />
        <div className="cv">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <header className="cv-header">
                  <img className="cv-header__img" src="https://selcukcura.com/wp-content/themes/selfolio-2018/img/profile-img/selcuk-cura-young.jpg" data-zoomable />
                  <div className="cv-header__text-container">
                    <h1 className="cv-header__name">{input.fname} {input.lname}</h1>
                    <p className="cv-header__job-title">{input.position}</p>
                  </div>
                </header>
                <section className="cv-section">
                  <h2 className="cv-section__title"><i className="fas fa-user fa-fw" /> Profile</h2>
                  <div className="cv-section__wrapper">
                    <p className="cv-section__description">
                     {input.profile}</p>
                    <p />
                  </div>
                </section>
                <section className="cv-section">
                  <h2 className="cv-section__title"><i className="fas fa-briefcase fa-fw" /> Experience</h2>
                  <div className="cv-section__wrapper">
                    {resumeContext.project ? resumeContext.project.map((record, index) => {
                      if (record.StartYear != null) {
                        var splitArray = record.StartYear.split(" ");
                        var month = splitArray[1];
                        var year = splitArray[3];

                        var splitArrayEndYear = record.EndYear.split(" ");
                        var EndMonth = splitArrayEndYear[1];
                        var EndYear = splitArrayEndYear[3];
                      }
                      return (

                        <div className="cv-section__experience" key={index}>
                          <p className="cv-section__role">{record.Title}</p>
                          <p className="cv-section__period">{month} {year} –  {EndMonth} {EndYear}</p>
                          <p className="cv-section__description">{record.Description}</p>
                        </div>

                      )
                    }) : <div></div>}
                  </div>
                </section>
                <section className="cv-section">
                  <h2 className="cv-section__title"><i className="fas fa-graduation-cap fa-fw" /> Education</h2>
                  <div className="cv-section__wrapper">
                    {resumeContext.education ? resumeContext.education.map((record, index) => {
                      if (record.StartYear != null) {
                        var splitArray = record.StartYear.split(" ");
                        var month = splitArray[1];
                        var year = splitArray[3];

                        var splitArrayEndYear = record.EndYear.split(" ");
                        var EndMonth = splitArrayEndYear[1];
                        var EndYear = splitArrayEndYear[3];
                      }

                      return (
                        <div className="cv-section__experience" key={index}>
                          <p className="cv-section__role">{record.Degree} {record.University} - {record.EducationCity}</p>
                          <p className="cv-section__period">{month} {year} - {EndMonth} {EndYear}</p>
                          <p className="cv-section__description"> {record.Description}</p>
                        </div>
                      )
                    }) : <div></div>}
                  </div>
                </section>
              </div>
              <aside className="col-md-4 cv-sidebar">
                {/* details */}
                <section className="cv-sidebar-section">
                  <h2 className="cv-sidebar-section__title">Details</h2>
                  <p className="cv-sidebar-section__description">
                  {input.city || " "}  {input.state || " "} <br />
                    <a href={input.contactNo || " "} rel="nofollow">{input.contactNo || " "}</a> <br />
                    <a href={input.linkdinlink} rel="nofollow">Linkdin</a> <br />
                    <a href={input.Githublink} target="_blank">GitHub</a>
                  </p>
                </section>
                {/* skills */}
                <section className="cv-sidebar-section">
                  <h2 className="cv-sidebar-section__title">Skills</h2>
                  <p className="cv-sidebar-section__description">  {resumeContext.skill ?  resumeContext.skill.map((record, index) => {
                        return (
                            <div className="skill" key={index}>
                                <div><b>{record.skill}  </b> {record.level}  </div>
                            </div>
                        )
                    }): <></>} </p>
                </section>
                {/* languages */}
                {/* <section className="cv-sidebar-section">
                  <h2 className="cv-sidebar-section__title">Languages</h2>
                  <p className="cv-sidebar-section__description">English, Turkish.</p>
                </section> */}
              </aside>
            </div>
          </div>
        </div></div>
    </>
  )

}

export default Designer;