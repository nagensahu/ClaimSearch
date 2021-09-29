import { LightningElement, track } from 'lwc'; 

const LINEITEMDATA = [
    {   
        id: "1",
        createdon: "2021-06-01",
        inquiry: "210666000334",
        category: "Claims",
        subcategory : "EOB/RA Request",
        status: "Closed",
        inquiryowner: "Katherine Micele",
        channel :"Inbound Call",
        recentcontact: "MICHAEL AKHURST"
    }
];

const LINEITEMCOLUMNS = [
  { label: 'Created On', fieldName: 'createdon', type: "date-local", sortable: false, wrapText: true,typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        },
        initialWidth : 100 
    },
    { label: 'Inquiry', fieldName: 'inquiry', type: "button", sortable: false, wrapText: true, initialWidth : 140, typeAttributes: {variant: "base", label: {fieldName: "inquiry"}}},
    { label: 'Category', fieldName: 'category', type: "text", sortable: false, wrapText: true, initialWidth : 140 },
    { label: 'Sub Category', fieldName: 'subcategory', type: "text", sortable: false, wrapText: true, initialWidth : 200 },
    { label: 'Status', fieldName: 'status', type: "text", sortable: false, wrapText: true, initialWidth : 140},
    { label: 'Inquiry Owner', fieldName: 'inquiryowner', type: "text", sortable: false, wrapText: true, initialWidth : 200 },
    { label: 'Channel', fieldName: 'channel', type: "text", sortable: false, wrapText: true, initialWidth : 140},
    { label: 'Recent Contact', fieldName: 'recentcontact', type: "text", sortable: false, wrapText: true, initialWidth : 200}
];

export default class Claiminquiries extends LightningElement {
    value = 'all';
    showcategoryvalues = false;
    categoryvalue='';
    @track lineitemData = LINEITEMDATA;
    lineitemColumns = LINEITEMCOLUMNS;

    get options() {
        return [
            { label: 'All', value: 'all' },
            { label: 'Category/SubCategory', value: 'category' }
        ];
    }

    get categoryoptions() {
        return [
            { label: 'Account Creation', value: 'accountcreation' },
            { label: 'Agent', value: 'agent' },
            { label: 'AON Pre-Enrolment', value: 'aonpreenrolment' },
            { label: 'Assistance', value: 'assistance' },
            { label: 'Authorizations', value: 'authorizations' },
            { label: 'Behavoral Health', value: 'behavioralhealth' },
            { label: 'Benefits', value: 'benefits' },
            { label: 'Care Choices Run-Out', value: 'carechoicesrunout' },
            { label: 'Case Management', value: 'casemanagement' },
            { label: 'Claims', value: 'claims' },
            { label: 'CMS Disclosure of Info', value: 'cmsdisclosureofinfo' },
            { label: 'CMS Medicare Complaints', value: 'cmsmedicarecomplaints' },
            { label: 'COB', value: 'cob' },
            { label: 'Code Review', value: 'codereview' },
            { label: 'Collection/Premium Bill', value: 'collectionpremiumbill' },
            { label: 'Comission', value: 'commission' },
            { label: 'Complaint', value: 'complaint' },
            { label: 'Cost Estimator', value: 'costestimator' },
            { label: 'Cost Recovery', value: 'costrecovery' },
            { label: 'Credentialing', value: 'credentialing' },
            { label: 'CRED-New Organization', value: 'credneworganization' },
            { label: 'CRED-New Provider Applicant', value: 'crednewproviderapplicant' },
            { label: 'CRED-Sanctions Screening Request', value: 'credsanctionsscreeningrequest' },
            { label: 'Demographic Member', value: 'demographicmember' },
            { label: 'EDI', value: 'edi' },
            { label: 'Education Request', value: 'educationrequest' },
            { label: 'Eligibility', value: 'eligibility' }
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.showcategoryvalues = event.detail.value == 'category' ?  true: false;

    }

}