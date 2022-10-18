import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useForm } from 'react-hook-form';
import { addRegistrosThunk } from '../store/slice/getForm.slice';


const registrar = () => {

    const [status, setStatus] = useState("");
    const [efectiva, setEfectiva] = useState("");
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();


    const test = [
        { label: "None", value: "None" },
        { label: "Efectiva", value: "Efectiva" },
        { label: "No efectiva", value: "No efectiva" },
        { label: "No localizable", value: "No localizable" }
    ]

    const registrarDatos = (data) => {
        dispatch(addRegistrosThunk(data))
        reset({
            "appoimentdate": "",
            "claim": "",
            "nombre": "",
            "telefono": "",
            "correo": "",
            "direccion": "",
            "fechatime": "",
            "companiaseguro": "",
            "numerop": "",
            "claimp": "",
            "dol": "",
            "description": "",
            "nota": "",
            "fuente": "",
            "efectiva": "",
            "noefectiva": "",
            "nolocalizable": "",
            "operador": "",
            "intentos": "",
            "campana": "",
            "selle": "",
            "claimnumber": "",
            "status": ""
        })

    }

    const captureStatus = (e) => {
        setStatus(e.target.value);
    }

    const captureEfectiva = (e) => {
        setEfectiva(e.target.value);
    }

    console.log(status)

    return (
        <div className='contain-Form'>
            <h1>Registrar</h1>
            <form onSubmit={handleSubmit(registrarDatos)}>
                <div className='container-form-input'>
                    <div>


                        <div className='form-contac'>
                            <div className='form-contac-detail'>
                                <label htmlFor="nombre">Nombre Cliente</label>
                                <input type="text" {...register("nombre")} />
                            </div>
                            <div className='form-contac-detail'>
                                <label htmlFor="telefono">Telefono</label>
                                <input type="number" {...register("telefono")} />
                            </div>
                            <div className='form-contac-detail'>
                                <label htmlFor="correo">Correo</label>
                                <input type="email" {...register("correo")} />
                            </div>
                            <div className='form-contac-detail'>
                                <label htmlFor="direccion">Dirección</label>
                                <input type="text" {...register("direccion")} />
                            </div>
                            <div className='form-contac-detail'>
                                <label htmlFor="fechatime">Fecha</label>
                                <input type="datetime-local" {...register("fechatime")} />
                            </div>
                            <div className='form-contac-detail'>
                                <label htmlFor="fuente">Fuente</label>
                                <select name="fuente" id="fuente" {...register("fuente")}>
                                    <option value="None">None</option>
                                    <option value="WhatsApp">WhatsApp</option>
                                    <option value="Llamada">Llamada</option>
                                    <option value="Correo">Correo</option>
                                    <option value="SMS">SMS</option>
                                </select>
                            </div>
                            <div className='form-contac-detail'>
                                <label htmlFor="efectiva">Status</label>
                                <select name="efectiva" id="efectiva" {...register("status")} onChange={captureStatus}>
                                    <option value="None">None</option>
                                    <option value="Efectiva">Efectiva</option>
                                    <option value="No efectiva">No efectiva</option>
                                    <option value="No localizable">No localizable</option>
                                </select>
                            </div>
                            <div className='form-contac-detail efectiva' style={status === "Efectiva" ? { display: "flex" } : { display: "none" }}>
                                <label htmlFor="efectiva">Efectiva</label>
                                <select name="efectiva" id="efectiva" {...register("efectiva")} onChange={captureEfectiva}>
                                    <option value="None">None</option>
                                    <option value="Cita Programada">Cita Programada</option>
                                    <option value="No Interesado">No Interesado</option>
                                    <option value="En Seguimiento">En Seguimiento</option>
                                    <option value="Prospecto a Futuro">Prospecto a Futuro</option>
                                    <option value="Informacion por correo">Informacion por correo</option>
                                    <option value="En consideración">En consideración</option>
                                    <option value="Correo">Correo</option>
                                    <option value="SMS">SMS</option>
                                    <option value="Recordatorio">Recordatorio</option>
                                    <option value="cita re-programada ">cita re-programada </option>
                                </select>
                            </div>
                            <div className='form-contac-detail nefectiva' style={status === "No efectiva" ? { display: "flex" } : { display: "none" }}>
                                <label htmlFor="noefectiva">No Efectiva</label>
                                <select name="noefectiva" id="noefectiva" {...register("noefectiva")}>
                                    <option value="None">None</option>
                                    <option value="No Contesta">No Contesta</option>
                                    <option value="Contestadora">Contestadora</option>
                                    <option value="IVR">IVR</option>
                                    <option value="Volver a llamar">Volver a llamar</option>
                                </select>
                            </div>
                            <div className='form-contac-detail nlocalizable' style={status === "No localizable" ? { display: "flex" } : { display: "none" }}>
                                <label htmlFor="nolocalizable">No Localizable</label>
                                <select name="nolocalizable" id="nolocalizable" {...register("nolocalizable")}>
                                    <option value="None">None</option>
                                    <option value="Fuera de Servicio">Fuera de Servicio</option>
                                    <option value="Equivocado">Equivocado</option>
                                    <option value="Número Errado">Número Errado</option>
                                    <option value="Tono de Fax">Tono de Fax</option>
                                    <option value="Duplicado">Duplicado</option>
                                </select>
                            </div>
                            <div className='form-contac-detail'>
                                <label htmlFor="operador">Operador</label>
                                <select name="operador" id="operador" {...register("operador")}>
                                    <option value="None">None</option>
                                    <option value="Claudia De Abreu">Claudia De Abreu</option>
                                    <option value="Christopher Escalante">Christopher Escalante</option>
                                    <option value="Maria Mariño">Maria Mariño</option>
                                </select>
                            </div>
                            <div className='form-contac-detail'>
                                <label htmlFor="intentos">Intentos</label>
                                <select name="intentos" id="intentos" {...register("intentos")}>
                                    <option value="None">None</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='form-contac-appoiment-hidden' style={efectiva === "Cita Programada" ? { display: "flex" } : { display: "none" }}>
                        <div className='form-contac-appoiment'>
                            <div className='form-contac-detail'>
                                <label htmlFor="appoimentdate">Appoiment Date</label>
                                <input type="datetime" value="0000-00-00T00:00:00" {...register("appoimentdate")} />
                            </div>
                            <div className='form-contac-detail'>
                                <label htmlFor="selle">Selle</label>
                                <input type="text" {...register("selle")} />
                            </div>
                            <div className='form-contac-detail'>

                                <label htmlFor="claim">Claim</label>
                                <input type="text" {...register("claim")} />
                            </div>
                            <div className='form-contac-detail'>

                                <label htmlFor="claimnumber">Claim Number</label>
                                <input type="text" {...register("claimnumber")} />
                            </div>
                            <div className='form-contac-detail'>

                                <label htmlFor="companiaseguro">Compañía de Seguro</label>
                                <input type="text" {...register("companiaseguro")} />
                            </div>
                            <div className='form-contac-detail'>

                                <label htmlFor="numerop">Número de póliza</label>
                                <input type="text" {...register("numerop")} />
                            </div>
                            <div className='form-contac-detail'>

                                <label htmlFor="claimp">Claim Poliza</label>
                                <input type="text" {...register("claimp")} />
                            </div>
                            <div className='form-contac-detail'>

                                <label htmlFor="dol">Dol</label>
                                <input type="text" {...register("dol")} />
                            </div>
                            <div className='form-contac-detail'>

                                <label htmlFor="description">Description</label>
                                <textarea id="w3review" name="w3review" rows="4" {...register("description")}></textarea>
                            </div>
                            <div className='form-contac-detail'>

                                <label htmlFor="nota">Nota</label>
                                <input type="text" {...register("nota")} />
                            </div>
                        </div>
                    </div>
                </div>
                <button>
                    <div className='btn-text-hidden'>
                        Submit
                    </div>

                    <div className='btn-i-hidden'>
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default registrar;