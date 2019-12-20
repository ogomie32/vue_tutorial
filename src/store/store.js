import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    contacts: [
        {id:1, name: 'Big Sis', email: 'bennylin904@gmail.com', tel: '08133691772', frequently: true},
        {id:2, name: 'Bibia Julius 1', email: 'bennylin904@gmail.com', tel: '08133691772'},
        {id:3, name: 'Bibia Julius 2', email: 'bennylin904@gmail.com', tel: '08133691772'},
        {id:4, name: 'Aunty James', email: 'bennylin904@gmail.com', tel: '08133691772'},
        {id:5, name: 'Bro Lawrence Legion', email: 'bennylin904@gmail.com', tel: '08133691772'},
        {id:6, name: 'Bro Monday Dance', email: 'bennylin904@gmail.com', tel: '08133691772', frequently: true},
        {id:7, name: 'Chris Gabe', email: 'gabechris@gmail.com', tel: '08133691772', frequently: true},
        {id:8, name: 'Faith', email: 'olufemifaith@gmail.com', tel: '08094119397'},
        {id:9, name: 'My Dad', tel: '08133691772'},
        {id:10, name: 'Eric', email: 'ericugwuogbo@gmail.com', tel: '08034225502'},
        {id:11, name: 'Ngozi Francis', email: 'ngozifrank4@gmail.com', tel: '08167419743'},
        {id:12, name: 'Nnenne', tel: '08147567407', frequently: true},
        {id:13, name: 'Abraham', tel: '08054329981', frequently: true},
    ],
    filteredContacts: [],
    showSideMenu: true,
    searchContact: {},
};

const getters = {
    sortedContacts: state  => {
        let sorted = state.contacts;

        // console.log(sorted);
        
        sorted = sorted.sort((a, b) => {
            if (a.name < b.name){
                return -1 
            }
            if (a.name > b.name){
                return 1
            }
            return 0
        });
        
        // console.log(sorted);
        return sorted;
    },
    contactsCount: state  => {
        return state.contacts.length;
    },
    getShowSideMenu(state){
        return state.showSideMenu;
    },
    getFilteredContacts(state){
        return state.filteredContacts;
    },
    getSearchContact(state){
        return state.searchContact;
    }
};

const mutations = {
    'ADD_STAR'(state, {contactsId}){
        const con = [...state.contacts];
        const record = con.findIndex(star => star.id === contactsId);
        
        const newObj = {
            ...con[record],
            frequently: true
        }
        con[record] = newObj;
        state.contacts = con;
    },
    'SUBMIT_CONTACTS'(state, {contactId,contactsName,contactsEmail,contactsTel}){
        if(contactsEmail){
            state.contacts.push({
                id: contactId,
                name: contactsName,
                email: contactsEmail,
                tel: contactsTel
            });
        } else {

        }
        
    },
    'SET_SHOW_SIDE_MENU'(state, payload){
        state.showSideMenu = payload;
    },
    'SET_SEARCH_CONTACT'(state, payload){
        state.searchContact = payload;
    },
    'FILTER_SEARCH'(state, text) {
        let unfiltered = state.contacts

        text = text.trim().toLowerCase()

        const filtered = unfiltered.filter(function (item) {
            if (item.name.toLowerCase().indexOf(text) !== -1) {
                return item
            }
        })
        if(text.length < 1 && filtered.length < 1) {
            state.filteredContacts = unfiltered;
            return;
        }
        state.filteredContacts = filtered;
    }
    
};

const actions = {
    addStar({commit}, order){
        commit('ADD_STAR', order)
    },
    submitContacts({commit}, order){
        commit('SUBMIT_CONTACTS', order)
    }
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});