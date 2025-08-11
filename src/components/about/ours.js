import React from 'react';
import sIcon1 from '../../images/icons/home-5.png'
import sIcon2 from '../../images/icons/home-6.png'
import sIcon3 from '../../images/icons/home-7.png'
import sIcon4 from '../../images/icons/home-8.png'
import "./style.css"

const Policy = [
    {
        title: 'Our Promise to our Clients',
        subTitle: 'You’ll get a clear roadmap, ongoing audits, and support at every stage. ',
        icon: sIcon1,
    },
    {
        title: 'Expert Minds, Real Impact',
        subTitle: 'Our team brings together diverse expertise and deep industry knowledge, committed to solving your toughest challenges with precision and care.',
        icon: sIcon2,
    },
    {
        title: 'Lightning-Fast Support',
        subTitle: 'We respond when it matters most, expect the fastest, most reliable customer service that keeps your business moving forward.',
        icon: sIcon3,
    },
    {
        title: 'Fair Pricing, Exceptional Value',
        subTitle: 'We offer transparent, value-driven pricing, ensuring you get world-class solutions without compromise.',
        icon: sIcon4,
    },


]


const Ours = (props) => {

    return (
        <section className="policy_section m-5">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-6" key={pitem}>
                            <div className="iconbox_block layout_icon_left">
                                <div className="iconbox_icon bg-primary-subtle">
                                    <img src={policy.icon} alt="Dollar SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Ours;