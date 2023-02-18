
import "./Blue.css";

const Blue = ({ resumeContext, input }) => {
  return (
    <div id="BlueTemplate">
      <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" media="print" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <div className="content">
        <div className="bluet-container">
          {/* START: PAGE CONTENT */}
          <section id="about" className="section section-about">
            <div className="animate-up animated">
              <div className="section-box-none">
                <div className="profile">
                  <div className="row">

                    <div className="col-md-6">
                      <h1 className="profile-title"> {input.fname} {input.lname}</h1>
                      <h2 className="profile-position">{input.position}</h2>
                    </div>
                    <div className="col-xs-6">
                      <div className="profile-preword text-center"><span>Basic info</span></div>
                      <ul className="profile-list">
                        <li className="clearfix">
                          <strong className="title">Address</strong>
                          <span className="address">{input.city}, {input.state}</span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">E-mail</strong>
                          <span className="cont"><a href={input.email}>{input.email}</a></span>
                        </li>
                        <li className="clearfix">
                          <strong className="title">Phone</strong>
                          <span className="cont"><a href={input.contactNo}>{input.contactNo}</a></span>
                        </li>
                        <li className="clearfix">
                          <span className="cont"><a href={input.linkdinlink}>LinkdIn</a> &nbsp; <a href={input.Githublink}>Github</a></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="profile-info text-center">
                        <div className="profile-preword"><span > About me</span></div>
                        <div className="profile-text">
                          <p>{input.profile}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="profile-info text-center">
                        <div className="profile-preword"><span> Work Experience</span></div>
                        <div className="profile-text-less">
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
                              <div className="row post-box padd" key={index}>
                                <div className="col-xs-1">
                                  <ul className="timeline">
                                    <li style={{ marginBottom: 35 }}>
                                      <div className="tl-circ" />
                                      <p className="tm">{EndMonth}/{EndYear} </p>
                                    </li>
                                    <li className="timeline-inverted">
                                      <div className="tl-circ" />
                                      <p className="tm">{month}/{year}</p>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xs-11 experience-blue">
                                  <h4 >{record.Title}</h4>
                                  <h3 className="education">{record.Description} </h3>
                                </div>
                              </div>
                            )
                          }) : <div></div>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="profile-info text-center">
                        <div className="profile-preword"><span>education</span></div>
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
                            <div className="row post-box padd vcenter" key={index}>
                              <div className="col-xs-1">
                                <ul className="timeline">
                                  <li style={{ marginBottom: 5 }}>
                                    <div className="tl-circ" />
                                    <p className="tm"> {EndMonth}/{EndYear}</p>
                                  </li>
                                  <li className="timeline-inverted">
                                    <div className="tl-circ" />
                                    <p className="tm">{month}/{year} </p>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-xs-11">
                                <h3 className="education">{record.University} - {record.EducationCity}</h3>
                                <h4>{record.Degree}</h4>{record.Description}
                              </div>
                            </div>
                          )
                        }) : <></>}
                      </div>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-sm-6">
                      <div className="profile-preword text-center "><span><i className="fa fa-bookmark" />Skills</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="profile-preword text-center "><span><i className="fa fa-certificate" />training courses &amp; CERTIFICATES</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="section-box post-box ">
                        <div className="row">
                          <div className="col-sm-12">


                            <div className="progress-bar animated">
                              <div className="bar-data">
                                <span className="bar-title">SEM (SEO &amp; PPC)</span>
                                <span className="bar-value">93%</span>
                              </div>
                              <div className="bar-line">
                                <span className="bar-fill" data-width="51%" style={{ width: '93%' }} />
                              </div>
                            </div>
                           
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="section-box post-box ">
                        <div className="row">
                          <p>
                            <span style={{ fontWeight: 600 }}>09/2012 Google AdWords training course: <span style={{ fontWeight: 300 }}><br />basic and advanced level, organised by MarketingLab.pl</span>
                            </span></p>
                          <p><span style={{ fontWeight: 600 }}>05/2013 Google Analytics training course: <span style={{ fontWeight: 300 }}><br />basic and advanced level, organised by iSurvival.pl</span></span></p>
                          <p><span style={{ fontWeight: 600 }}>09/2014: Google AdWords Certification</span></p>
                          <p><span style={{ fontWeight: 600 }}>08/2015: Programming in HTML5 with JavaScript and CSS3,<span style={{ fontWeight: 300 }}> Microsoft 20480B, Altkom Akademia</span></span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ paddingTop: 20 }}>
                    <div className="col-sm-6">
                      <div className="profile-preword text-center"><span><i className="fa fa-globe" />Languages</span>
                        <div className="section-box post-box " style={{ height: 170 }}>
                          <div className="row">
                            <p className="tags ">English: <span style={{ fontWeight: 300 }}>B2</span></p>
                            <p className="tags">Polish: <span style={{ fontWeight: 300 }}>Native</span></p>
                            <p className="tags">Spanish: <span style={{ fontWeight: 300 }}>Basic</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                    <div className="col-xs-6">
                      <div className="profile-preword text-center"><span><i className="fa fa-info-circle" />Additional info</span>
                        <div className="section-box post-box " style={{ height: 170 }}>
                          <div className="row">
                            <ul className="additional-info">
                              <li><i className="fa fa-check" />Leadership mentality</li>
                              <li><i className="fa fa-check" />1 month period of notice</li>
                              <li><i className="fa fa-check" />B2B possibility</li>
                              <li><i className="fa fa-check" />Ready for new challenges</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

  )
}
export default Blue;