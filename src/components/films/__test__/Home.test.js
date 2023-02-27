
import { useContext } from 'react';
import App, { stateContext, } from './../../../App';
import {mount} from 'enzyme'

const TestComponent= ()=>{
    const {films, searchTerm} = useContext(stateContext)
}