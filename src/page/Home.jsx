import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getRegistros, getRegistrosThunk } from '../store/slice/getForm.slice';

const Home = () => {

    const dispatch = useDispatch();
    const get = useSelector(state => state.getform)
    const [ total, setTotal ] = useState();

    useEffect(() => {
        dispatch(getRegistrosThunk())
    }, [])

    useEffect(() => {
        let numero = "hola";
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "No Interesado"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotal(newTotal)
      }, [get])

    //   console.log(total)
    return (
        <div className='container-home'>
            <h1>Dashboard</h1>
            <div className='container-grid'>
                <div className='register-cant'>
                    <h2>Registros:</h2>
                    <h2>{get.data?.length}</h2>
                </div>
                <div className='register-cant'>
                    <h2>Efectivas:</h2>
                    <h2>{total?.length}</h2>
                </div>                

            </div>
        </div>
    );
};

export default Home;