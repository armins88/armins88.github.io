import React from 'react';
import { Row, Col, Icon} from 'antd';
import Youtube from 'react-youtube';

class Personal extends React.Component{
    render(){
        return(
            <div id="jelly" className={"container jelly-" +this.props.theme}>
                <h1 className={"section-header-"+this.props.theme}> Projects and Research</h1>
                <Row type="content" justify="center">
                    <Col>
                        <ul className="no-style-list personal-projects">
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Aqua Watch</h3>
                                <p className={"subsection-content-"+this.props.theme}>Leaching of lead and other contaminants into tap
water poses a significant health risk and is expensive to accurately
and efficiently detect in real time. We have utilized commer-
cially available low-cost water metric sensors to represent water
samples in an n-dimensional space and leveraged classification
models to detect lead contamination in tap water. Experimental
results suggest that our novel methodology is an effective and cost
efficient way to detect lead contamination. Furthermore, our data
driven approach shows promise of being applied to other heavy
metal contaminants and organic pollutants while still using the
same hardware.
                                <br />
                                
                                <a target="_blank" rel="noopener noreferrer" href="assets/misc/AquaWatch.pdf" className={"site-btn-"+this.props.theme}>READ THE PAPER</a>
                                {/* <a target="_blank" rel="noopener noreferrer" href="https://www.bu.edu/hic/research/incubated-research/incubation-awards/" className={"site-btn-"+this.props.theme}>{this.toUpper("Recipient of Hariri Institute Research Incubation Award")}</a> */}
                                <div className={"header-btns-"+this.props.theme}>
                                    <a target="_blank" href="https://github.com/aqua-watch"><Icon type="github"></Icon></a>
                                </div>
                                 </p>
                                
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>MassCOVID19API</h3>
                                <p className={"subsection-content-"+this.props.theme}> Reports from mass.gov are all in .csv, .docx and .xlsx formats. This projects aims to pull, clean, JSONify, and distribute the most recent data. 
                                <hr />
                                <a target="_blank" href="https://github.com/armins88/MassCOVID19API"><Icon type="github"></Icon></a>
                                </p>
                                
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Interperter</h3>
                                <p className={"subsection-content-"+this.props.theme}> I decided to write a small interperter in an effort to better understand interperted languages and to experiment with my own language design ideas. Still a work in progress. Syntax is intended to be similar to Python/Lisp/JS.
                                <hr />
                                Still working on adding lambda functions and stronger types. Check out the source code: <a target="_blank" href="https://github.com/armins88/writefree-be"><Icon type="github"></Icon></a>
                                </p>
                                
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Dislection</h3>
                                <p className={"subsection-content-"+this.props.theme}>
A small firefox extension to convert all fonts in the DOM to one tailored for Dyslexic readers. Dislection is part of a larger effort to bring accessibility to the web. I plan to extend the extension to dynamically change text-based content on the web to fit a specific readers needs. There is more research that needs to be done into how we exactly quantify good reading and what properties of text and/or web-page we change in order to improve reading.

<a href="https://addons.mozilla.org/en-US/firefox/addon/dislection/?src=search"> Current master branch </a>

                                <hr />
                                <a target="_blank" href="https://github.com/armins88/Dislection"><Icon type="github"></Icon></a>
                                </p>
                                
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>PID Self Balancing Board</h3>
                                <p className={"subsection-content-"+this.props.theme}> Used PID control to balance a ball at a user determined set point using two servo motors to tilt a touch screen plane in the x and y direction.
                                <hr />

                                <div className={"header-btns-"+this.props.theme}>
                                    <Youtube videoId="m-j_BAwmVwc" />
                                </div>
                                </p>
                                
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Write Free</h3>
                                <p className={"subsection-content-"+this.props.theme}> World’s first web-based note-taking application specifically designed to support people with dyslexia.
                                <hr />
                                <a target="_blank" rel="noopener noreferrer" href="http://www.bu.edu/hic/project-spotlight/" className={"site-btn-"+this.props.theme}>READ MORE</a>
                                
                                <div className={"header-btns-"+this.props.theme}>
                                    Front End: <a target="_blank" href="https://github.com/armins88/writefree-fe"><Icon type="github"></Icon></a>
                                    Back End: <a target="_blank" href="https://github.com/armins88/writefree-be"><Icon type="github"></Icon></a>
                                    <a target="_blank" href="https://writefree.org/" >MVP developed by BU SPARK students </a>
                                </div>
                                </p>
                                
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Fat Pants</h3>
                                <p className={"subsection-content-"+this.props.theme}>Fat pants is a simple usb device built from scratch that dims and switches a set of lights. Submited as a final project for CS545 Embedded Systems
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                    <a target="_blank" href="https://github.com/armins88/Fat_Pants"><Icon type="github"></Icon></a>
                                </div>
                                </p>
                            </li>
                            
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Quest to Arm</h3>
                                <p className={"subsection-content-"+this.props.theme}> A port of the real time x86 OS <a href="http://www.questos.org" target="_blank" >quest</a> to ARMv7. Submited as a final project for CS522 Operating Systems
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                    <a target="_blank" href="https://github.com/armins88/quest/tree/arm"><Icon type="github"></Icon></a>
                                </div>
                                
                                </p>
                                
                               
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Stove Watch</h3>
                                <p className={"subsection-content-"+this.props.theme}> A specialized embedded device which determines if your stove is on or off shipped with an web app. 
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                     <a target="_blank" href="https://github.com/armins88/stove_watch"><Icon type="github"></Icon></a>
                                </div>
                                
                                 </p>
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Cross Word Generator</h3>
                                <p className={"subsection-content-"+this.props.theme}> Angular 7 app to generate a valid cross word puzzle given specific grid constraints. 
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                     <a target="_blank" href="https://github.com/armins88/Crossword_Generator"><Icon type="github"></Icon></a>
                                </div>
                                
                                 </p>
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Smart Lights</h3>
                                <p className={"subsection-content-"+this.props.theme}> A full stack implementation of a RGB light system hosted from a Raspi3 and controlled from a phone. 
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                     <a target="_blank" href="https://github.com/armins88/Smart_Lights"><Icon type="github"></Icon></a>
                                </div>
                                
                                 </p>
                            </li>
                        </ul>
                    </Col>
                   
                </Row>
          </div>
        );
    }
}

export default Personal