import CreateContact from './components/contactMenu/CreateContact.vue';
import FrequentContact from './components/contactMenu/FrequentContact.vue';
import ContactBar from './components/contactMenu/ContactBar.vue';
import Duplicate from './components/contactMenu/Duplicate.vue';
import Export from './components/contactMenu/Export.vue';
import Import from './components/contactMenu/Import.vue';
import CreateLabel from './components/contactMenu/CreateLabel.vue';
import Print from './components/contactMenu/Print.vue';
import SearchContact from './components/contacts/SearchContact.vue';

export const routes = [
    { path: '/createcontact', component: CreateContact },
    
    { path: '/frequentcontact', component: FrequentContact },
    { name: 'home', path: '/', component: ContactBar },
    { path: '/duplicate', component: Duplicate },
    {  name: 'exp', path: '/export', component: Export },
    { path: '/import', component: Import },
    { path: '/createlabel', component: CreateLabel },
    {  name: 'search-contact', path: '/searchcontact', component: SearchContact },
    // { path: '/print', component: Print },
];