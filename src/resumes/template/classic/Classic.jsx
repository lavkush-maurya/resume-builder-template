import "./classic.css";

const Classic = ({ resumeContext, input }) => {
  return (
    <div className="classic">
      <div id="classic">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <div className="container">
          <div className="left_side">
            <div className="profileText">
              <h2>{input.fname} {input.lname}<br /><span>{input.position}</span></h2>
            </div>
            <div className="contact-info">
              <h3 className="title">Contact Info</h3>
              <ul>
                <li>
                  <span className="icon"><i className="fa-solid fa-phone" /></span>
                  <span className="text">{input.contactNo}</span>
                </li>
                <li>
                  <span className="icon"><i className="fa-solid fa-envelope" /></span>
                  <span className="text">{input.email}</span>
                </li>
                <li>
                  <span className="icon"><i className="fa-brands fa-linkedin-in" /></span>
                  <span className="text"><a href={input.linkdinlink}>LinkdIn</a></span>
                </li>
                <li>
                  <span className="icon"><i className="fa-brands fa-github" /></span>
                  <span className="text"><a href={input.Githublink}>Github</a></span>
                </li>
                <li>
                  <span className="icon"><i className="fa-solid fa-location-pin" /></span>
                  <span className="text">{input.city}, {input.state}</span>
                </li>
              </ul>
            </div>
            <div className="contact-info education">
              <h3 className="title">Education</h3>
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
                  <ul>
                    <li>
                      <h5>{month}/{year} -  {EndMonth}/{EndYear}</h5>
                      <h4>{record.Degree}</h4>
                      <h6>{record.University} - {record.EducationCity}</h6>
                      <h6>{record.Description}</h6>
                    </li>
                  </ul>
                )
              }) : <></>}


            </div>
            {/* <div className="contact-info languages">
              <h3 className="title">Languages</h3>
              <ul>
                <li>
                  <span className="text">Gujrati</span>
                  <span className="text">Hindi</span>
                  <span className="text">English</span>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="right_side">
            <div className="about">
              <h2 className="title2">Profile <i className="fa-solid fa-file-user" /></h2>
              <p className="bio">{input.profile}</p>
            </div>
            <div className="about skills">
              <h2 className="title2">Skills </h2>
              {resumeContext.skill ? resumeContext.skill.map((record, index) => {
                return (
                  <div className="skill" key={index}>
                    <div><b>{record.skill}  </b> {record.level}  </div>
                  </div>
                )
              }) : <></>}
            </div>
            <div className="about projects">
              <h2 className="title2">Projects</h2>
              <ul>
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
                    <li>
                      <h5>{month}/{year} <span>-</span>{EndMonth}/{EndYear}</h5>
                      <span>{record.Title}</span>
                      <p>{record.Description}</p>
                    </li>

                  )
                }) : <div></div>}
              </ul>
            </div>
            {/* <div className="about certificates">
              <h2 className="title2">Certificates</h2>
              <ul>
                <li>
                  <h5>2022-01</h5>
                  <p>Core java training certificate by internshala</p>
                </li>
                <li>
                  <h5>2022-11</h5>
                  <p>Python assessment skill test(basic) by hackerrank</p>
                </li>
                <li>
                  <h5>2022-11</h5>
                  <p>Foundation of data by google</p>
                </li>
                <li>
                  <h5>2021-08</h5>
                  <p>Python certification course by great learning</p>
                </li>
                <li>
                  <h5>2021-04</h5>
                  <p>c++ certification basic by udemy</p>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classic;