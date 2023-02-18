import { Card  } from "react-bootstrap";
const Modern = ({resumeContext,input}) => {
    return (
        <div className="page">
            <Card>
                <Card.Body>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr><td ><div className="titleName"> <h4>{input.fname || " "}   {input.lname || " "} </h4>
                                <h6> {input.position || " "}  </h6>
                            </div></td>

                                <td>
                                    <h6 style={{ marginLeft: "170px" }}> {input.city || " "}  {input.state || " "}<br /> {input.contactNo || " "}
                                        <br /> {input.email || " "} <br />
                                        <a href={input.linkdinlink}>Linkdin link</a>  <a href={input.Githublink}>Github Link</a></h6>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <h5 >  Profile </h5>
                     {input.profile || " "}
                    <hr />
                    <h5 >  Education </h5>
                    {resumeContext.education ? resumeContext.education.map((record, index) => {
                        if(record.StartYear !=null)
                        {
                            var splitArray=record.StartYear.split(" ");
                            var month = splitArray[1];
                            var year = splitArray[3];
    
                            var splitArrayEndYear=record.EndYear.split(" ");
                            var EndMonth = splitArrayEndYear[1];
                            var EndYear = splitArrayEndYear[3];
                        }
                       
                        return (
                            <div className="education" key={index}>
                                <div><h6>{record.Degree} {record.University} - {record.EducationCity}</h6>
                               
                                <div className="duration">{month} {year} - {EndMonth} {EndYear}  </div>
                                    {record.Description}</div>
                            </div>
                        )
                    }):  <div></div>}
                    <hr />
                    <h5  >Projects/Experience </h5>
                    {resumeContext.project ? resumeContext.project.map((record, index) => {
                        if(record.StartYear !=null){
                            var splitArray=record.StartYear.split(" ");
                            var month = splitArray[1];
                            var year = splitArray[3];
    
                            var splitArrayEndYear=record.EndYear.split(" ");
                            var EndMonth = splitArrayEndYear[1];
                            var EndYear = splitArrayEndYear[3];
                        }
                       
                        return (
                            <div className="project" key={index}>
                                <div><h6>{record.Title} </h6></div>
                                <span className="duration"> {month} {year} - {EndMonth} {EndYear} </span>
                                <div>{record.Description}</div>
                            </div>
                        )
                    }) :  <div></div>}
                    <hr />
                    <h5 >Skill</h5>
                    {resumeContext.skill ?  resumeContext.skill.map((record, index) => {
                        return (
                            <div className="skill" key={index}>
                                <div><b>{record.skill}  </b> {record.level}  </div>
                            </div>
                        )
                    }): <></>}
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default Modern;