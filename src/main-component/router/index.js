import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import PricingPage from '../PricingPage/PricingPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import PortfolioSinglePage from '../PortfolioSinglePage/PortfolioSinglePage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ServicePage from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import BlogPage from '../BlogPage/BlogPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import ContactPage from '../ContactPage/ContactPage';
import PartnerSection from '../../components/business-consulting-components/PartnerSection/PartnerSection';
import PartnersPage from '../AboutUsPage/partners';
import LocationsPage from '../AboutUsPage/Location';
import FinancialPage from '../industriesPages/financial';
import HealthPage from '../industriesPages/health';
import ManufacturingPage from '../industriesPages/manufacturing';
import RetailPage from '../industriesPages/retail';
import MicrosoftPage from '../TechPlatforms/microsoft';
import GooglePage from '../TechPlatforms/googleCloud';
import AWSPage from '../TechPlatforms/AWS';
import ContactUsPage from '../ContactPage/ContactUs';
import AuditPage from '../../components/technology/Cyber Security/audit';
import GovernancePage from '../../components/technology/Cyber Security/governance';
import PenetrationPage from '../../components/technology/Cyber Security/Penetration';
import VirtualCISOPage from '../../components/technology/Cyber Security/VirtualCISO';
import IdentityPage from '../../components/technology/Cyber Security/Identity';
import ISO9001Page from '../../components/certifications/Quality Management Systems/ISO9001';
import EMSPage from '../../components/certifications/EMS';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          {/* <Route path="home_software_company" element={<HomePage2 />} />
          <Route path="home_business_consulting" element={<HomePage3 />} /> */}
          <Route path="technology-consulting/audit-assurance" element={<AuditPage />} />
          <Route path="technology-consulting/governance-compliance" element={<GovernancePage />} />
          <Route path="technology-consulting/penetration-testing" element={<PenetrationPage />} />
          <Route path="technology-consulting/identity-access" element={<IdentityPage />} />
          <Route path="technology-consulting/virtual-ciso-services" element={<VirtualCISOPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="about-us/partners" element={<PartnersPage />} />
          <Route path="about-us/locations" element={<LocationsPage />} />
          <Route path="industries/financial" element={<FinancialPage />} />
          <Route path="industries/health" element={<HealthPage />} />
          <Route path="industries/retail" element={<RetailPage />} />
          <Route path="industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="certifications/iso-9001" element={<ISO9001Page />} />
          <Route path="certifications/iso-140012015-ems" element={<EMSPage />} />
          <Route path="tech-platforms/microsoft" element={<MicrosoftPage />} />
          <Route path="tech-platforms/google-cloud" element={<GooglePage />} />
          <Route path="tech-platforms/aws" element={<AWSPage />} />
          {/* <Route path="partners" element={<PartnersPage />} />
          <Route path="locations" element={<LocationsPage />} /> */}
          {/* <Route path="pricing" element={<PricingPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio_details/:slug" element={<PortfolioSinglePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />   */}
          <Route path="contact-us" element={<ContactUsPage />} />  
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
