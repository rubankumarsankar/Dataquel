
import React, { useState } from 'react';
import Bg from '../../images/shapes/shape_title_under_line.svg'
import shape1 from '../../images/shapes/shape_line_2.svg'
import shape2 from '../../images/shapes/shape_line_3.svg'
import shape3 from '../../images/shapes/shape_line_4.svg'
import shape4 from '../../images/shapes/shape_space_3.svg'

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';


const WhatWe  = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="process_technology_review_section bg-light section_decoration">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="heading_block">
                            <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                                What We Do
                            </div>
                            <h2 className="heading_text mb-0">
                                Solutions <mark>That Serve You</mark>
                            </h2>
                        </div>
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="1">
                                    01. Strategic IT & Digital Modernization 
                                </AccordionHeader>
                                <AccordionBody accordionId="1" className='acc_body'>
                                    <p className="m-0">
                                        Take advantage of enterprise-grade technology platforms, seamlessly integrated and optimized to solve your specific problems, from cloud migrations to legacy system upgrades.  
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="2">
                                    02. Data Analytics & Insight‑Driven Growth 
                                </AccordionHeader>
                                <AccordionBody accordionId="2" className='acc_body'>
                                    <p className="m-0">
                                        Leverage data to drive real business value, converting insights into decisions and empowering you to grow smarter. 
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="3">
                                    03. Security & Regulatory Compliance 
                                </AccordionHeader>
                                <AccordionBody accordionId="3" className='acc_body'>
                                    <p className="m-0">
                                       Safeguard your infrastructure with proven frameworks like HIPAA, TISAX, SEDEX, BSCI, and HACCP. We guide you through compliance with clarity and confidence
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="4">
                                    04. Industry Consulting That Solves Real Problems 
                                </AccordionHeader>
                                <AccordionBody accordionId="4" className='acc_body'>
                                    <p className="m-0">
                                        From manufacturing to logistics, healthcare to retail, our consultations deliver precise auditing, optimized workflows, and actionable strategy tailored to your industry realities 
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            {/* <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="5">
                                    05. Testing and QA
                                </AccordionHeader>
                                <AccordionBody accordionId="5" className='acc_body'>
                                    <p className="m-0">
                                        Data - driven diagnostic and predictive app for improving  outcomes Data driven diagnostic and predictive app for improving.
                                    </p>
                                </AccordionBody>
                            </AccordionItem> */}
                        </Accordion>
                    </div>
                    <div className="col-lg-5">
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <ul className="content_layer_group unordered_list_block text-center">
                                <li><AccordionHeader targetId="1"><span>Strategic IT  </span></AccordionHeader></li>
                                <li><AccordionHeader targetId="2"><span>Data Analytics  </span></AccordionHeader></li>
                                <li><AccordionHeader targetId="3"><span>Security & Regulatory </span></AccordionHeader></li>
                                <li><AccordionHeader targetId="4"><span>Industry Consulting  </span></AccordionHeader></li>
                                {/* <li><AccordionHeader targetId="5"><span>Testing and QA</span></AccordionHeader></li> */}
                            </ul>
                        </Accordion>
                    </div>
                </div>
              
            </div>

            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_3">
                <img src={shape3} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_4">
                <img src={shape4} alt="Techco Shape" />
            </div>
        </section>
    )
};
export default WhatWe ;
