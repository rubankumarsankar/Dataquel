import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
// import HomePage2 from '../HomePage2/HomePage2';
// import HomePage3 from '../HomePage3/HomePage3';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
// import PricingPage from '../PricingPage/PricingPage';
// import PortfolioPage from '../PortfolioPage/PortfolioPage';
// import PortfolioSinglePage from '../PortfolioSinglePage/PortfolioSinglePage';
// import TeamPage from '../TeamPage/TeamPage';
// import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
// import ServicePage from '../ServicePage/ServicePage';
// import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
// import BlogPage from '../BlogPage/BlogPage';
// import BlogDetails from '../BlogDetails/BlogDetails';
// import ContactPage from '../ContactPage/ContactPage';
// import PartnerSection from '../../components/business-consulting-components/PartnerSection/PartnerSection';
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
import CIOMentoringPage from '../../components/technology/IT Strategy/CIOMentoring';
import NotFound from '../../components/NotFound';
import CIOServicesPage from '../../components/technology/IT Strategy/CIOServicesPage';
import ITStrategyPage from '../../components/technology/IT Strategy/ITStrategyPage';
import EnterprisePage from '../../components/technology/IT Strategy/EnterprisePage';
import OutsourcingITServicesPage from '../../components/technology/IT Strategy/OutsourcingITServicesPage';
import ManagedServicesPage from '../../components/technology/IT Strategy/ManagedServicesPage';
import ITImplementationPage from '../../components/technology/IT Strategy/ITImplementationPage';
import MicrosoftOfficePage from '../../components/technology/Modern Workplace/MicrosoftOfficePage';
import Microsoft365MigrationPage from '../../components/technology/Modern Workplace/Microsoft365MigrationPage';
import Microsoft365Page from '../../components/technology/Modern Workplace/Microsoft365Page';
import MicrosoftTeamsPage from '../../components/technology/Modern Workplace/MicrosoftTeamsPage';
import MicrosoftAdoptionPage from '../../components/technology/Modern Workplace/MicrosoftAdoptionPage';
import DigitalMarketingPage from '../../components/technology/Modern Software Delivery/DigitalMarketingPage';
import WebsiteDevelopmentPage from '../../components/technology/Modern Software Delivery/WebsiteDevelopmentPage';
import SoftwareQualityPage from '../../components/technology/Modern Software Delivery/SoftwareQualityPage';
import DevOpsPage from '../../components/technology/Modern Software Delivery/DevOpsPage';
import CustomApplicationDevelopmentPage from '../../components/technology/Modern Software Delivery/CustomApplicationDevelopmentPage';
import CloudSolutionsPage from '../../components/technology/Modern Software Delivery/CloudSolutionsPage';
import ISO134852015MDPage from '../../components/certifications/Quality Management Systems/ISO134852015MDPage';
import OHSMSPage from '../../components/certifications/OHSMSPage';
import ISO201212012Page from '../../components/certifications/ISO201212012Page';
import ISO260012019Page from '../../components/certifications/ISO260012019Page';
import ISO500012018Page from '../../components/certifications/ISO500012018Page';
import FSMSPage from '../../components/certifications/Food Safety Management System/FSMSPage';
import Food22000Page from '../../components/certifications/Food Safety Management System/Food22000Page';
import HALALPage from '../../components/certifications/Food Safety Management System/HALALPage';
import HACCPPage from '../../components/certifications/Food Safety Management System/HACCPPage';
import ISO1829512017Page from '../../components/certifications/Customer Contact Centers/ISO1829512017Page';
import BSCIPage from '../../components/certifications/Customer Contact Centers/BSCIPage';
import OEKOTEXPage from '../../components/certifications/Customer Contact Centers/OEKOTEXPage';
import SEDEXPage from '../../components/certifications/Customer Contact Centers/SEDEXPage';
import ISOISMSPage from '../../components/certifications/Information Technology/ISOISMSPage';
import ISOBCMSPage from '../../components/certifications/Information Technology/ISOBCMSPage';
import ISOPIMPage from '../../components/certifications/Information Technology/ISOPIMPage';
import ISOPOPIPage from '../../components/certifications/Information Technology/ISOPOPIPage';
import ISOISCCSPage from '../../components/certifications/Information Technology/ISOISCCSPage';
import ISOISCEUIPage from '../../components/certifications/Information Technology/ISOISCEUIPage';
import ISOITSMSPage from '../../components/certifications/Information Technology/ISOITSMSPage';
import CSAPage from '../../components/certifications/Information Technology/CSAPage';
import CMMIPage from '../../components/certifications/Information Technology/CMMIPage';
import PCIDSSPage from '../../components/certifications/Information Technology/PCIDSSPage';
import SOCTYPE2Page from '../../components/certifications/Information Technology/SOCTYPE2Page';
import TISAXPage from '../../components/certifications/Information Technology/TISAXPage';
import GDPRPage from '../../components/certifications/Information Technology/GDPRPage';
import HIPPAPage from '../../components/certifications/Information Technology/HIPPAPage';

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
          <Route path="technology-consulting/cio-mentoring" element={<CIOMentoringPage />} />
          <Route path="technology-consulting/cio-services" element={<CIOServicesPage />} />
          <Route path="technology-consulting/it-strategy" element={<ITStrategyPage />} />
          <Route path="technology-consulting/enterprise-architecture" element={<EnterprisePage />} />
          <Route path="technology-consulting/outsourcing-it-services" element={<OutsourcingITServicesPage />} />
          <Route path="technology-consulting/managed-services" element={<ManagedServicesPage />} />
          <Route path="technology-consulting/it-implementation" element={<ITImplementationPage />} />
          <Route path="technology-consulting/cloud-solutions" element={<CloudSolutionsPage />} />
          <Route path="technology-consulting/custom-application-development" element={<CustomApplicationDevelopmentPage />} />
          <Route path="technology-consulting/devops" element={<DevOpsPage />} />
          <Route path="technology-consulting/software-quality-assurance-testing" element={<SoftwareQualityPage />} />
          <Route path="technology-consulting/website-development-wordpress" element={<WebsiteDevelopmentPage />} />
          <Route path="technology-consulting/seo-digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="technology-consulting/microsoft-adoption" element={<MicrosoftAdoptionPage />} />
          <Route path="technology-consulting/microsoft-teams" element={<MicrosoftTeamsPage />} />
          <Route path="technology-consulting/microsoft-365-managed" element={<Microsoft365Page />} />
          <Route path="technology-consulting/microsoft-365-migration" element={<Microsoft365MigrationPage />} />
          <Route path="technology-consulting/microsoft-office-365" element={<MicrosoftOfficePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="about-us/partners" element={<PartnersPage />} />
          <Route path="about-us/locations" element={<LocationsPage />} />
          <Route path="industries/financial" element={<FinancialPage />} />
          <Route path="industries/health" element={<HealthPage />} />
          <Route path="industries/retail" element={<RetailPage />} />
          <Route path="industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="certifications/iso-9001" element={<ISO9001Page />} />
          <Route path="certifications/iso-134852015-md" element={<ISO134852015MDPage />} />
          <Route path="certifications/iso-140012015-ems" element={<EMSPage />} />
          <Route path="certifications/iso-450012018-ohsms" element={<OHSMSPage />} />
          <Route path="certifications/iso-201212012" element={<ISO201212012Page />} />
          <Route path="certifications/iso-260012019" element={<ISO260012019Page />} />
          <Route path="certifications/iso-500012018" element={<ISO500012018Page />} />
          <Route path="certifications/iso-220002018-fsms" element={<FSMSPage />} />
          <Route path="certifications/food-safety-certification-22000" element={<Food22000Page />} />
          <Route path="certifications/haccp" element={<HACCPPage />} />
          <Route path="certifications/halal" element={<HALALPage />} />
          <Route path="certifications/iso-18295-12017" element={<ISO1829512017Page />} />
          <Route path="certifications/sedex" element={<SEDEXPage />} />
          <Route path="certifications/bsci" element={<BSCIPage />} />
          <Route path="certifications/oeko-tex" element={<OEKOTEXPage />} />
          <Route path="certifications/iso-270012022-isms" element={<ISOISMSPage />} />
          <Route path="certifications/iso-223012019-bcms" element={<ISOBCMSPage />} />
          <Route path="certifications/iso-277012019-pim" element={<ISOPIMPage />} />
          <Route path="certifications/iso-270182019-popi" element={<ISOPOPIPage />} />
          <Route path="certifications/iso-270172015-isccs" element={<ISOISCCSPage />} />
          <Route path="certifications/iso-270192019-isceui" element={<ISOISCEUIPage />} />
          <Route path="certifications/iso-20000-12018-itsms" element={<ISOITSMSPage />} />
          <Route path="certifications/cloud-security-alliance-csa" element={<CSAPage />} />
          <Route path="certifications/cmmi" element={<CMMIPage />} />
          <Route path="certifications/pci-dss" element={<PCIDSSPage />} />
          <Route path="certifications/soc-type2" element={<SOCTYPE2Page />} />
          <Route path="certifications/tisax" element={<TISAXPage />} />
          <Route path="certifications/gdpr" element={<GDPRPage />} />
          <Route path="certifications/hippa" element={<HIPPAPage />} />
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
          <Route path="*" element={<NotFound />} />  
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
