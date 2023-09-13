import React from "react";
import arrowBack from '../assets/img/left.png';
import arrowUp from '../assets/img/arrow-up.png';
import arrowDown from '../assets/img/arrow-down.png';
import attach1 from '../assets/img/file-type-1.png';
import attach2 from '../assets/img/file-type-2.png';
import attach3 from '../assets/img/file-type-3.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import 'react-tabs/style/react-tabs.css';
import "../assets/styles/styles.css"

function Notification() {
    return (
      <div className="notification">
            <div className="header">
                <h2>
                    <img src={arrowBack} alt="logo" />
                    Notification
                </h2>
                <h6>Mark all as read</h6>
            </div>
            <div className="tabs-set">
            <Tabs>
                <TabList>
                    <Tab>All Activities</Tab>
                    <Tab><span>Tickets</span> <span className="badge">12</span></Tab>
                    <Tab><span>SLA</span> <span className="badge">0</span></Tab>
                    <Tab><span>Tasks</span> <span className="badge">0</span></Tab>
                    <Tab><span>Missed Chat</span> <span className="badge">0</span></Tab>
                </TabList>

                <TabPanel>
                    <div className="panel-body">                        
                        <Accordion>
                        <AccordionItem 
                            header={
                                <div className="conent-header">
                                    <h4>Today</h4>
                                    <span className="up-arrow">
                                        <img src={arrowUp} alt="arrow-up"/>
                                    </span>
                                </div>
                                }
                                initialEntered>
                            <div className="expand-content">
                                <Accordion>
                                <AccordionItem 
                                    header={
                                        <div>
                                            <div className="innert-conent-header">
                                            <div className="comment-header">
                                                <div className="prof-details">
                                                    <div className="prof-icn">
                                                        HA
                                                    </div>
                                                    <div className="prof-info">
                                                        <h3><span>Honey</span> updated the incident ticket #ASC1302</h3>
                                                        <p>30 min ago</p>
                                                    </div>
                                                </div>
                                                <div className="showMore">
                                                    <span className="down-arrow">
                                                        <img src={arrowDown} alt="arrow-down"/>
                                                    </span>
                                                    <span className="btn-text">Show more</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                        <div className="content-wrap">
                                            <h5>Unable to send emails</h5>
                                            <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                            <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                            <div className="attact-set">
                                                <h3>Attachments:</h3>
                                                <ul>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach1}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.doc</span>
                                                    </li>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach2}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.pdf</span>
                                                    </li>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach3}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.xsl</span>
                                                    </li>
                                                    <li className="last">
                                                        <span className="attach-txt">+3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                        }
                                    >
                                    <div className="acc-body-content">
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>
                                <AccordionItem 
                                    header={
                                        <div>
                                            <div className="innert-conent-header">
                                            <div className="comment-header">
                                                <div className="prof-details">
                                                    <div className="prof-icn">
                                                        HA
                                                    </div>
                                                    <div className="prof-info">
                                                        <h3><span>Honey</span> updated the incident ticket #ASC1302</h3>
                                                        <p>30 min ago</p>
                                                    </div>
                                                </div>
                                                <div className="showMore">
                                                    <span className="down-arrow">
                                                        <img src={arrowDown} alt="arrow-down"/>
                                                    </span>
                                                    <span className="btn-text">Show more</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                        <div className="content-wrap">
                                            <h5>Unable to send emails</h5>
                                            <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                            <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                            <div className="attact-set">
                                                <h3>Attachments:</h3>
                                                <ul>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach1}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.doc</span>
                                                    </li>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach2}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.pdf</span>
                                                    </li>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach3}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.xsl</span>
                                                    </li>
                                                    <li className="last">
                                                        <span className="attach-txt">+3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                        }
                                    >
                                    <div className="acc-body-content">
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>
                                </Accordion>
                            </div>
                        </AccordionItem>
                        </Accordion>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="panel-body">                        
                        <Accordion>
                        <AccordionItem 
                            header={
                                <div className="conent-header">
                                    <h4>Today</h4>
                                    <span className="up-arrow">
                                        <img src={arrowUp} alt="arrow-up"/>
                                    </span>
                                </div>
                                }
                                initialEntered>
                            <div className="expand-content">
                                <Accordion>
                                <AccordionItem 
                                    header={
                                        <div>
                                            <div className="innert-conent-header">
                                            <div className="comment-header">
                                                <div className="prof-details">
                                                    <div className="prof-icn">
                                                        HA
                                                    </div>
                                                    <div className="prof-info">
                                                        <h3><span>Honey</span> updated the incident ticket #ASC1302</h3>
                                                        <p>30 min ago</p>
                                                    </div>
                                                </div>
                                                <div className="showMore">
                                                    <span className="down-arrow">
                                                        <img src={arrowDown} alt="arrow-down"/>
                                                    </span>
                                                    <span className="btn-text">Show more</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                        <div className="content-wrap">
                                            <h5>Unable to send emails</h5>
                                            <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                            <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                            <div className="attact-set">
                                                <h3>Attachments:</h3>
                                                <ul>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach1}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.doc</span>
                                                    </li>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach2}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.pdf</span>
                                                    </li>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach3}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.xsl</span>
                                                    </li>
                                                    <li className="last">
                                                        <span className="attach-txt">+3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                        }
                                    >
                                    <div className="acc-body-content">
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>
                                <AccordionItem 
                                    header={
                                        <div>
                                            <div className="innert-conent-header">
                                            <div className="comment-header">
                                                <div className="prof-details">
                                                    <div className="prof-icn">
                                                        HA
                                                    </div>
                                                    <div className="prof-info">
                                                        <h3><span>Honey</span> updated the incident ticket #ASC1302</h3>
                                                        <p>30 min ago</p>
                                                    </div>
                                                </div>
                                                <div className="showMore">
                                                    <span className="down-arrow">
                                                        <img src={arrowDown} alt="arrow-down"/>
                                                    </span>
                                                    <span className="btn-text">Show more</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                        <div className="content-wrap">
                                            <h5>Unable to send emails</h5>
                                            <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                            <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                            <div className="attact-set">
                                                <h3>Attachments:</h3>
                                                <ul>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach1}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.doc</span>
                                                    </li>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach2}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.pdf</span>
                                                    </li>
                                                    <li>
                                                        <span className="attach-icn">
                                                            <img src={attach3}/>
                                                        </span>
                                                        <span className="attach-txt">Screenshot.xsl</span>
                                                    </li>
                                                    <li className="last">
                                                        <span className="attach-txt">+3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                        }
                                    >
                                    <div className="acc-body-content">
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="acc-inner-content">
                                            <div className="content-wrap">
                                                <h5>Unable to send emails</h5>
                                                <h6><span>Honey Arora</span> update the ticket #ASC 1304 with a public note</h6>
                                                <p>Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you? </p>
                                                <div className="attact-set">
                                                    <h3>Attachments:</h3>
                                                    <ul>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach1}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.doc</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach2}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.pdf</span>
                                                        </li>
                                                        <li>
                                                            <span className="attach-icn">
                                                                <img src={attach3}/>
                                                            </span>
                                                            <span className="attach-txt">Screenshot.xsl</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>
                                </Accordion>
                            </div>
                        </AccordionItem>
                        </Accordion>
                    </div>
                </TabPanel>
            </Tabs>
            </div>
      </div>
    );
  }
  

  export default Notification;