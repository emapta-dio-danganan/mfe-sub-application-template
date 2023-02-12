import React from "react";
import ReactDOM from 'react-dom';
import { render, cleanup, screen, queryByTestId, fireEvent, waitFor, wait } from '@testing-library/react';
import "@testing-library/jest-dom";
// import Enzyme, { shallow } from 'enzyme';
// import 'regenerator-runtime/runtime';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { MARK_JABAY_STORE } from '../../constant/Store';
// import "../../../../setup/Fetch"
import { Provider } from "react-redux"

import CreateCompany from "../../../src/pages/client-management/CreateCompany";
import { SVG_LEAVES } from "../../../../../resources/js/version2/assets/Asset";

describe('EP050-US007 - VERIFY BASIC INFORMATION', () => {

    afterEach(cleanup);

    const mockStore = configureMockStore();
    let store = mockStore(MARK_JABAY_STORE);
    const mockFn = jest.fn();

    test('[UT] (EP050-US007-PS-TC001-001) - Content Belt should have icon', async () => {
        const { container } = render(
            <Router>
                <Provider store={store}>
                    <CreateCompany />
                </Provider>
            </Router>
        )

        expect(container.getElementsByClassName('belt-icon').length).toBe(1);
    });

    // test('[UT] (EP050-US007-PS-TC001-001) - Content Belt should have title: BASIC INFORMATION', async () => {
    //     const { container } = render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo {...config} />
    //             </Provider>
    //         </Router>
    //     )

    //     let pageTitle = await waitFor(() => screen.getByText("BASIC INFORMATION"));
    //     expect(pageTitle).toBeInTheDocument();
    // });


    // test('[UT] (EP050-US007-PS-TC001-001) - Content Belt should have button: Save and Continue', async () => {
    //     const { container } = render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo {...config} />
    //             </Provider>
    //         </Router>
    //     )

    //     let saveButton = await waitFor(() => screen.getByText("Save and Continue"));
    //     expect(saveButton).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC002-001) - Widget should have name: Categories', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <ClientManagementDetails />
    //             </Provider>
    //         </Router>
    //     )

    //     let categories = await waitFor(() => screen.getByText("CATEGORIES"));
    //     expect(categories).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC002-001) - Categories should have: Company Information', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <ClientManagementDetails />
    //             </Provider>
    //         </Router>
    //     )

    //     let categories = await waitFor(() => screen.getByText("CATEGORIES"));
    //     expect(categories).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC002-001) - Categories should have: Client Accounts', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <ClientManagementDetails />
    //             </Provider>
    //         </Router>
    //     )

    //     let accounts = await waitFor(() => screen.getByText("Client Accounts"));
    //     expect(accounts).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC002-001) - Categories should have: Deals', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <ClientManagementDetails />
    //             </Provider>
    //         </Router>
    //     )

    //     let deal = await waitFor(() => screen.getByText("Deals"));
    //     expect(deal).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC002-001) - Categories should have: Documents', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <ClientManagementDetails />
    //             </Provider>
    //         </Router>
    //     )
        
    //     let docu = await waitFor(() => screen.getByText("Documents"));
    //     expect(docu).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC002-001) - Categories should have: Configuration', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <ClientManagementDetails />
    //             </Provider>
    //         </Router>
    //     )
        
    //     let config = await waitFor(() => screen.getByText("Configuration"));
    //     expect(config).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC002-001) - Categories should have: Audit Trails', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <ClientManagementDetails />
    //             </Provider>
    //         </Router>
    //     )
        
    //     let audit = await waitFor(() => screen.getByText("Audit Trails"));
    //     expect(audit).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-001) - Basic Info has: Company Logo field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let companyLogo = await waitFor(() => screen.getByText("COMPANY LOGO"));
    //     expect(companyLogo).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-001) - Basic Info has: Legal Business Name field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let legalName = await waitFor(() => screen.getByText("LEGAL BUSINESS NAME"));
    //     expect(legalName).toBeInTheDocument();
    // });


    // test('[UT] (EP050-US007-PS-TC003-001) - Basic Info has: Trade Name field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let legalName = await waitFor(() => screen.getByText("TRADE NAME"));
    //     expect(legalName).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-004) - Basic Info has: Website Verification field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let website = await waitFor(() => screen.getByText("WEBSITE"));
    //     expect(website).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-005) - Basic Info has: Industry Verification field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let industry = await waitFor(() => screen.getByText("INDUSTRY"));
    //     expect(industry).toBeInTheDocument();
    // });


    // test('[UT] (EP050-US007-PS-TC003-006) - Basic Info has: Country verification field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let country = await waitFor(() => screen.getAllByText("COUNTRY"));
    //     expect(country.length).toBe(2);
    // });

    // test('[UT] (EP050-US007-PS-TC003-007) - Basic Info has: Timezone field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let timezone = await waitFor(() => screen.getByText("TIMEZONE"));
    //     expect(timezone).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-008) - Basic Info has:  Company Description field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let description = await waitFor(() => screen.getByText("COMPANY DESCRIPTION"));
    //     expect(description).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-009) - Basic Info has: Year field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let year = await waitFor(() => screen.getByText("IN BUSINESS SINCE"));
    //     expect(year).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-010) - Basic Info has: Business Structure field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let structure = await waitFor(() => screen.getByText("BUSINESS STRUCTURE"));
    //     expect(structure).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-011) - Basic Info has: Phone Number field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let phoneNumber = await waitFor(() => screen.getByText("PHONE NUMBER"));
    //     expect(phoneNumber).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-012) - Basic Info has: Fax Number field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let faxNumber = await waitFor(() => screen.getByText("FAX NUMBER"));
    //     expect(faxNumber).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-013) - Basic Info has: Email Address field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let email = await waitFor(() => screen.getByText("EMAIL ADDRESS"));
    //     expect(email).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-014) - Basic Info has: Address field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let address = await waitFor(() => screen.getByText("ADDRESS"));
    //     expect(address).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-016) - Basic Info has: Country field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let country = await waitFor(() => screen.getAllByText("COUNTRY"));
    //     expect(country[1]).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-017) - Basic Info has: State/City field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let state = await waitFor(() => screen.getByText("STATE/CITY"));
    //     expect(state).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-018) - Basic Info has: Postal Code field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let postal = await waitFor(() => screen.getByText("POSTAL CODE"));
    //     expect(postal).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-019) - Basic Info has: BDM field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let bdm = await waitFor(() => screen.getByText("BUSINESS DEVELOPMENT MANAGER"));
    //     expect(bdm).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-020) - Basic Info has: Project Manager field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let cna = await waitFor(() => screen.getByText("PROJECT MANAGER"));
    //     expect(cna).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-021) - Basic Info has: PROJECT MANAGER field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let cxm = await waitFor(() => screen.getByText("CUSTOMER EXPERIENCE MANAGER"));
    //     expect(cxm).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-022) - Basic Info has: CX Leader field', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let cxl = await waitFor(() => screen.getByText("CUSTOMER EXPERIENCE LEADER"));
    //     expect(cxl).toBeInTheDocument();
    // });

    // test('[UT] (EP050-US007-PS-TC003-023) - Has button: Save and Continue button', async () => {
    //     render(
    //         <Router>
    //             <Provider store={store}>
    //                 <CreateBasicInfo />
    //             </Provider>
    //         </Router>
    //     )

    //     let saveButton = await waitFor(() => screen.getByText("Save and Continue"));
    //     expect(saveButton).toBeInTheDocument();
    // });
})