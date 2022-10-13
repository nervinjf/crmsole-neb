import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports'; 
import { useForm } from 'react-hook-form';
import { addRegistrosThunk } from '../store/slice/getForm.slice';


const registrar = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    // const dispatch = useDispatch();

    // useEffect(() =>{
    //     axios.get('https://api-res-sole-nebconnection2.herokuapp.com/api/register')
    //         .then((res) => dispatch((res.data)))
    // }, [])


    const registrarDatos = (data) =>{
        console.log(data)
        dispatch(addRegistrosThunk(data))
    }


    return (
        <div className='contain-Form'>
            <h1>Registrar</h1>
            <form onSubmit={handleSubmit(registrarDatos)}>
                <label htmlFor="nombre">Nombre Cliente</label>
                <input type="text" {...register("nombre")}/>
                <label htmlFor="telefono">Telefono</label>
                <input type="number" {...register("telefono")}/>
                <label htmlFor="correo">Correo</label>
                <input type="email" {...register("correo")}/>
                <label htmlFor="direccion">Dirección</label>
                <input type="text" {...register("direccion")}/>
                <label htmlFor="fechatime">Fecha</label>
                <input type="datetime-local" {...register("fechatime")}/>
                <label htmlFor="fuente">Fuente</label>
                <select name="fuente" id="fuente" {...register("fuente")}>
                    <option value="None">None</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Llamada">Llamada</option>
                    <option value="Correo">Correo</option>
                    <option value="SMS">SMS</option>
                </select>
                <label htmlFor="efectiva">Efectiva</label>
                <select name="efectiva" id="efectiva" {...register("efectiva")}>
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
                <label htmlFor="noefectiva">No Efectiva</label>
                <select name="noefectiva" id="noefectiva" {...register("noefectiva")}>
                    <option value="None">None</option>
                    <option value="No Contesta">No Contesta</option>
                    <option value="Contestadora">Contestadora</option>
                    <option value="IVR">IVR</option>
                    <option value="Volver a llamar">Volver a llamar</option>
                </select>
                <label htmlFor="nolocalizable">No Localizable</label>
                <select name="noefectiva" id="noefectiva" {...register("nolocalizable")}>
                    <option value="None">None</option>
                    <option value="Fuera de Servicio">Fuera de Servicio</option>
                    <option value="Equivocado">Equivocado</option>
                    <option value="Número Errado">Número Errado</option>
                    <option value="Tono de Fax">Tono de Fax</option>
                    <option value="Duplicado">Duplicado</option>
                </select>
                <label htmlFor="operador">Operador</label>
                <select name="operador" id="operador" {...register("operador")}>
                    <option value="None">None</option>
                    <option value="Claudia De Abreu">Claudia De Abreu</option>
                    <option value="Christopher Escalante">Christopher Escalante</option>
                    <option value="Maria Mariño">Maria Mariño</option>
                </select>
                <label htmlFor="intentos">Intentos</label>
                <select name="intentos" id="intentos" {...register("intentos")}>
                    <option value="None">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="appoimentdate">Appoiment Date</label>
                <input type="datetime-local" {...register("appoimentdate")}/>
                <label htmlFor="selle">Selle</label>
                <input type="text" {...register("selle")}/>
                <label htmlFor="claim">Claim</label>
                <input type="text" {...register("claim")}/>
                <label htmlFor="claimnumber">Claim Number</label>
                <input type="text" {...register("claimnumber")}/>
                <label htmlFor="companiaseguro">Compañía de Seguro</label>
                <input type="text" {...register("companiaseguro")}/>
                <label htmlFor="numerop">Número de póliza</label>
                <input type="text" {...register("numerop")}/>
                <label htmlFor="claimp">Claim Poliza</label>
                <input type="text" {...register("claimp")}/>
                <label htmlFor="dol">Dol</label>
                <input type="text" {...register("dol")}/>
                <label htmlFor="description">Description</label>
                <textarea id="w3review" name="w3review" rows="4" {...register("description")}></textarea>
                <label htmlFor="nota">Nota</label>
                <input type="text" {...register("nota")}/>
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default registrar;