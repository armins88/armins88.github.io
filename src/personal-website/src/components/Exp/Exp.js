import React from 'react';
import { Row, Col, Card, Icon} from 'antd';
import {Timeline, TimelineEvent} from 'react-event-timeline'

class Exp extends React.Component{

    render(){
        // const dot = <FontAwesomeIcon icon="circle" style={{ fontSize: '30px' }} />
        const headerStyle = {"fontSize":"30px",
            "color": this.props.theme === "light" ? 'black' : 'white'};
        const subtitleStyle = {"fontSize":"25px",
            "color": this.props.theme === "light" ? 'black' : 'white'};
        const contentStyle = {"fontSize":"20px",
        "color": 'white', 'backgroundColor':'#40424a'};
        return(
            <div id="curious" className={"container curious-" +this.props.theme}>
                <h1 className={"section-header-"+this.props.theme}>Work Experience</h1>
                <Row type="flex" justify="center">
                    <Col>
                    <Timeline>
                        <TimelineEvent title="NormaTec"
                                        subtitle="Full-stack/Embedded Engineer"
                                        createdAt="1/2019 - Present"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}
                                        subtitleStyle={subtitleStyle}>                                        

Develop the user facing e-commerce web application that constitutes ~60% of business revenue, using <strong>React, Redux, SCSS,</strong> and <b>Typescript</b>. Develop the e-commerce backend API service in <b>.NET, EF and MySql</b>. <p />

Develop multiple versions of an already published mobile app and its corresponding Node backend service using React Native, Sagas, Redux. <p />
Design, develop, implement, and test  embedded software in various soft real-time pneumatic compressions systems using C and C++ on top of RTOS such as FreeRTOS.<p />
Architect, develop and launch a desktop application to factory lines and internal services, designed to calibrate and test sports and health devices before they (re-)enter the field in .NET, replacing a process that previously took upwards of 15 min with one that consistently takes ~ 3 min. <p />  

                        </TimelineEvent>
                        <TimelineEvent title="MIT- Civil and Environmental Engineering"
                                        createdAt="10/2017 - 12/2018"
                                        subtitle="Full-stack Engineer"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}
                                        subtitleStyle={subtitleStyle}>                                        

Developed a web portal for faculty, staff and students in CEE, where users can create, update, or view department/personal resources including student forms, departmental policies, and  a department wide intranet designed to manage space.Technologies used included PHP7, MySQL, JQuery, and CSS3.
                                        
                        </TimelineEvent>
                        <TimelineEvent title="Bluum Technologies"
                                        subtitle="Full-stack Engineer"
                                        createdAt="5/2018 - 11/2018 Part-time contract"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}
                                        subtitleStyle={subtitleStyle}>                                        
Contributed to several front end applications using React and Redux. Led the development of an API service for a web portal intended to be used by retail managers created in Lumen. Managed deployment on Google Cloud Platform.
                                      
                        </TimelineEvent>
                        <TimelineEvent title="Mass. General Hospital"
                                        subtitle="Data Science Intern"
                                        createdAt="5/2017 - 10/2017"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}
                                        subtitleStyle={subtitleStyle}>
                                        Pioneered multiple data science projects, from the data extraction process to statistical analysis and classification using Python, Mysql, Pandas, Numpy, and Scipy. <p /> Worked with a team of engineers to successfully migrate MySql databases from an obsolete server to a new server, using MySql, Python. 

                        </TimelineEvent>
                        <TimelineEvent title="Reggora Inc."
                                        subtitle="Software Engineering Intern"
                                        createdAt="5/2017 - 9/2017"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}
                                        subtitleStyle={subtitleStyle}>
                        Designed a fully client side floor planning software intended for lenders and appraisers to create maps of real estate using Typescript, React, and CSS. 
                        <p /> Developed parts of a backend service that assisted appraisers in making detailed reports using  Python3, various third party REST API’s, MongoDB, and React.
                        </TimelineEvent>
                </Timeline>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Exp