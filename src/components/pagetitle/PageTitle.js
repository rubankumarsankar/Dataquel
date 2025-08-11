import React from 'react'
import Bg from '../../images/shapes/Bannerbg.webp'


const PageTitle = (props) => {
    return (
        <section className="page_banner_section text-center section_space_1" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="heading_focus_text text-white">
                    {props.pageTop}
                    <span className="badge bg-secondary">{props.pagesub}</span>
                </div>
                <h1 className="page_title mb-3 ">{props.pageTitle}</h1>
                <h3 className="page_sub_title mb-5">{props.pageSubTitle}</h3>
                <h6 className="page_cont mb-4 ">{props.pageCon}</h6>
            </div>
        </section>
    )
}

export default PageTitle;