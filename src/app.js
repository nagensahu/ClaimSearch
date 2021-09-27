import { LightningElement, track } from 'lwc'; 

const columns = [
    { label: 'Member ID', fieldName: 'memberId', type: 'button', typeAttributes: {variant: "base", label: {fieldName: "memberId"}} },
    { label: 'First Name', fieldName: 'firstName' },
    { label: 'Last Name', fieldName: 'lastName' },
    { label: 'D.O.B', fieldName: 'dateOfBirth' },
    { label: 'Location', fieldName: 'location' },
    { label: 'Group Name', fieldName: 'groupName' },
    { label: 'Business Category', fieldName: 'businessCategory' },
    { label: 'Active', fieldName: 'active' },
    { label: 'Related', type:'button', typeAttributes: { label: 'View', name: 'view_related', variant: 'base', disabled: { fieldName: 'hideRelated'}}}
];

const relatedColumns = [
    { label: 'Member ID', fieldName: 'memberId', type: 'button', typeAttributes: {variant: "base", label: {fieldName: "memberId"}} },
    { label: 'Business Category', fieldName: 'businessCategory' },
    { label: 'Active', fieldName: 'active' },
];

const data = [{
    id: '1',
    memberId: '205372388900',
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: '03/07/2000',
    location: 'Bloomfield Hills, MI',
    groupName: 'Oakland University',
    businessCategory: 'Fully Funded HMO',
    active: 'Y',
    hideRelated: false,
},
{
    id: '1',
    memberId: '205372388900',
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: '03/07/2000',
    location: 'Bloomfield Hills, MI',
    groupName: 'Oakland University',
    businessCategory: 'Fully Funded HMO',
    active: 'Y',
    hideRelated: true,
}];

const relatedData = [{
    memberId: '205372388900-01',
    businessCategory: 'Fully Funded HMO',
    active: 'Y',
},{
    memberId: '205372388900-02',
    businessCategory: 'Fully Funded HMO',
    active: 'N',
}]

const claimtypeoptions = [
    { label: 'Medical', value: 'medical' },
    { label: 'Dental', value: 'dental' },
    { label: 'FSA', value: 'fsa' },
];

const amountsoptions = [
    { label: 'Max', value: 'max' },
    { label: 'Withold', value: 'withold' },
    { label: 'Deductible', value: 'deductible' },
    { label: 'Coinsurance', value: 'coinsurance' },
    { label: 'Copay', value: 'copay' },
    { label: 'COB', value: 'cob' },
];

const businesscategoryoptions = [
    { label: 'ANCILLARY', value: 'ANC' },
    { label: 'CHLD', value: 'MICHILD' },
    { label: 'FULLY FUNDED EPO', value: 'FEPO' },
    { label: 'FULLY FUNDED HMO', value: 'FHMO' },
    { label: 'FULLY FUNDED MEDIGAP', value: 'FGAP' },
    { label: 'FULLY FUNDED POS', value: 'FPOS' },
    { label: 'FULLY FUNDED PPO', value: 'FPPO' },
    { label: 'MEDICAID', value: 'CAID' },
    { label: 'MEDICARE', value: 'CARE' },
    { label: 'PHIC POS', value: 'PPOS' },
    { label: 'SELF FUNDED EPO', value: 'SEPO' },
    { label: 'SELF FUNDED IND', value: 'SIND' },
    { label: 'SELF FUNDED POS', value: 'SPOS' },
    { label: 'SELF FUNDED PPO', value: 'SPPO' },
    { label: 'SHARED FUNDED POS', value: 'APOS' },
    { label: 'SHARED FUNDED PPO', value: 'APPO' },
    { label: 'SHARED FUNDED RX', value: 'AFRX' },
    { label: 'SHARED FUNDED EPO', value: 'AEPO' }
];

const procedurecodedefault = [
    {index: "1", label: 'Z0000', haserror : false},
    {index: "2", label: 'Z23', haserror : false},
    {index: "3", label: 'M3130', haserror : true}
];

const procedurecodestring = "Z0000,Z23,M3130";

export default class App extends LightningElement {
    @track columns = columns;
    @track data = [];
    @track relatedColumns = relatedColumns;
    @track relatedData = relatedData;
    @track overrideRequired = false;
    //@track isTableEmpty = this.data.length == 0;
    isTableEmpty = false;
    @track sortDirection = 'asc';
    @track defaultSortDirection = 'asc';
    @track sortedBy;
    @track advancedOptionText = "Show Advanced"
    @track showAdvanced = false;
    @track buttonStyle = "base";
    @track openmodel = false;
    claimtypeoptions = claimtypeoptions;
    amountsoptions = amountsoptions;
    businesscategoryoptions = businesscategoryoptions;
    procedurecodelist = procedurecodedefault;
    procedurecodestring = procedurecodestring;

    
     // Used to sort the 'Age' column
     sortBy(field, reverse, primer) {
        const key = primer
            ? function (x) {
                return primer(x[field]);
            }
            : function (x) {
                return x[field];
            };

        return function (a, b) {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        };
    }

    onHandleSort(event) {
        const { fieldName: sortedBy, sortDirection } = event.detail;
        const cloneData = [...this.data];

        cloneData.sort(this.sortBy(sortedBy, sortDirection === 'asc' ? 1 : -1));
        this.data = cloneData;
        this.sortDirection = sortDirection;
        this.sortedBy = sortedBy;
    }

    handleClick(){
        //Perform search and retrieve data
        console.log("click");
        this.data = data;
        //Show data if it exists
        this.isTableEmpty = this.data.length == 0;
        console.log(this.isTableEmpty);
    }

    handleAdvancedClick(){
        if(this.showAdvanced){
            this.showAdvanced = false;
            this.advancedOptionText = "Show Advanced";
            this.buttonStyle = "base"
        } else {
            this.showAdvanced = true;
            this.advancedOptionText = "Hide Advanced";
            this.buttonStyle = "brand-outline";
        }
    }

    handleRowAction(event) {
        console.log(JSON.stringify(event.detail.action.name));
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
        case 'view_related':
         this.openmodal();
                break;
        default:
        }
    }

    openmodal() {
        this.openmodel = true
    }
    closeModal() {
        this.openmodel = false
    }
}