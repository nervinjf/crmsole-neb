import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getRegistros, getRegistrosThunk } from '../store/slice/getForm.slice';

const Home = () => {

    const dispatch = useDispatch();
    const get = useSelector(state => state.getform)

    useEffect(() => {
        dispatch(getRegistrosThunk())
    }, [])

    return (
        <div className='container-home'>
            <h1>Dashboard</h1>
            <div className='container-grid'>
                <div className='register-cant'>
                    <h2>Registros:</h2>
                    <h2>{get.data?.length}</h2>
                </div>
                

            </div>
        </div>
    );
};

export default Home;