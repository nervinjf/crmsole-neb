import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getRegistros, getRegistrosThunk } from '../store/slice/getForm.slice';

const Home = () => {

    const dispatch = useDispatch();
    const get = useSelector(state => state.getform)
    const [ totalEfectiva, setTotalEfectiva ] = useState();
    const [ totalCita, setTotalCita ] = useState();
    const [ totalNinteresado, setTotalNinteresado ] = useState();
    const [ totalseguimiento, setTotalseguimiento ] = useState();
    const [ totalProspecto, setTotalProspecto ] = useState();
    const [ totalInformacionC, setTotalInformacionC ] = useState();
    const [ totalconsideracion, setTotalconsideracion ] = useState();
    const [ totalCorreo, setTotalCorreo ] = useState();
    const [ totalSMS, setTotalSMS ] = useState();
    const [ totalRecordatorio, setTotalRecordatorio ] = useState();
    const [ totalCitaRe, setTotalCitaRe ] = useState();

    const [ close, setClose ] = useState(false);

    useEffect(() => {
        dispatch(getRegistrosThunk())
    }, [])

    useEffect(() => {
        let numero = "hola";
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva !== "None"){
                newTotal.push(items.efectiva.length)
            }
        });
        setTotalEfectiva(newTotal)
      }, [get])

      useEffect(() => {
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "Cita Programada"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotalCita(newTotal)
      }, [get])

      useEffect(() => {
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "No Interesado"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotalNinteresado(newTotal)
      }, [get])

      useEffect(() => {
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "En Seguimiento"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotalseguimiento(newTotal)
      }, [get])

      useEffect(() => {
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "Prospecto a Futuro"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotalProspecto(newTotal)
      }, [get])

      useEffect(() => {
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "Informacion por correo"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotalInformacionC(newTotal)
      }, [get])

      useEffect(() => {
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "En consideración"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotalconsideracion(newTotal)
      }, [get])

      useEffect(() => {
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "Correo"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotalCorreo(newTotal)
      }, [get])

      useEffect(() => {
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "SMS"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotalSMS(newTotal)
      }, [get])

      useEffect(() => {
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "Recordatorio"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotalRecordatorio(newTotal)
      }, [get])

      useEffect(() => {
        let newTotal = [];
        const test = get.data?.forEach(items => {
            if(items.efectiva === "Cita re-programada"){
                newTotal.push(items.efectiva.length)
            }
            
        });
        setTotalCitaRe(newTotal)
      }, [get])

      const closeChange = () => {
        setClose(!close)
      }

      console.log(totalEfectiva)

    return (
        <div className='container-home'>
            <h1>Dashboard</h1>
            <div className='container-grid'>
                <div className='register-cant'>
                    <h2>Registros:</h2>
                    <h2>{get.data?.length}</h2>
                </div>
                <div className='register-cant-efectiva' onClick={closeChange} style={{cursor: "pointer"}}>
                    <h2>Efectivas:</h2>
                    <h2>{totalEfectiva?.length}</h2>
                </div>                

            </div>
            <div className='container-DboardDetails' style={close === true ? {visibility: "visible", opacity: "100%"} : {visibility: "hidden", opacity: "0%"}}>
                <div className='DboardDetails'>
                    <div className='container-cancel'>
                    <i class="fa-solid fa-xmark" onClick={closeChange}></i>
                    </div>
                    <h2>Detalle Efectiva</h2>
                    <div className='grid-details'>
                        <div className='DboardDetails-items'>
                            <h3>Cita programada</h3>
                            <p>{totalCita?.length}</p>
                        </div>
                        <div className='DboardDetails-items'>
                            <h3>No interesado</h3>
                            <p>{totalNinteresado?.length}</p>
                        </div>
                        <div className='DboardDetails-items'>
                            <h3>En seguimiento</h3>
                            <p>{totalseguimiento?.length}</p>
                        </div>
                        <div className='DboardDetails-items'>
                            <h3>Prospecto a futuro</h3>
                            <p>{totalProspecto?.length}</p>
                        </div>
                        <div className='DboardDetails-items'>
                            <h3>Informacion por correo</h3>
                            <p>{totalInformacionC?.length}</p>
                        </div>
                        <div className='DboardDetails-items'>
                            <h3>En consideración</h3>
                            <p>{totalconsideracion?.length}</p>
                        </div>
                        <div className='DboardDetails-items'>
                            <h3>Correo</h3>
                            <p>{totalCorreo?.length}</p>
                        </div>
                        <div className='DboardDetails-items'>
                            <h3>SMS</h3>
                            <p>{totalSMS?.length}</p>
                        </div>
                        <div className='DboardDetails-items'>
                            <h3>Recordatorio</h3>
                            <p>{totalRecordatorio?.length}</p>
                        </div>
                        <div className='DboardDetails-items'>
                            <h3>Cita re-programada</h3>
                            <p>{totalCitaRe?.length}</p>
                        </div>
                        
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;