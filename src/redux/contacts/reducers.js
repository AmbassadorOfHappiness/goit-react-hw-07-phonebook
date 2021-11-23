import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

const items = createReducer([], {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
});

const filter = createReducer("", {
    [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });

