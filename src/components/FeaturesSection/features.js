import React from 'react';
import PartnerSection from '../PartnerSection';
import CountUp from 'react-countup';
import sIcon1 from '../../images/icons/icon_head.svg'
import sIcon2 from '../../images/icons/icon_check.svg'
import sIcon3 from '../../images/icons/icon_like.svg'
import sIcon4 from '../../images/icons/icon_dart_board.svg'
import Bg from '../../images/shapes/bg_pattern_1.svg'
import fimg from '../../images/about/about_image_1.webp'

const FunFact = [
    {
        title: '25',
        subTitle: 'Years of experience',
        symbol: '+',
        icon: sIcon1,
    },
    {
        title: '280',
        subTitle: 'Success Stories',
        symbol: '+',
        icon: sIcon2,
    },
    {
        title: '5.6',
        subTitle: 'Companies Trust Us',
        symbol: 'K+',
        icon: sIcon3,
    },
    {
        title: '100',
        subTitle: 'Results Guaranteed',
        symbol: '%',
        icon: sIcon4,
    },


]


const FeaturesSectionnew = (props) => {

    return (
        <section className="client_logo_section section_space_1" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="section_space pt-0">
                    <div className="heading_block text-center">
                        {/* <div className="heading_focus_text mb-0">
                            Our Best-In-Class Partners
                        </div> */}
                        <h2 className='text-dark '>Our Best-In-Class Partners</h2>
                    </div>
                    <PartnerSection />
                </div>
            </div>
        </section>
    );
}

export default FeaturesSectionnew;