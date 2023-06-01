<script lang="ts">
    import '../../assets/css/revicionasistentesadmin.css'
	import type { StudentResponse } from "../../../domain/entities/student/StudentResponse";
    let buttomSave=false
    let buttomUp=true
    let studentId= ''
    let tipo= 'administrador'
    let title = ''
    let texto= ''
    let sel = 0

    function handleChange(event:Event) {
        title = (event.target as HTMLSelectElement)?.value || ''; // Actualizar la variable con el valor seleccionado
    }
    const onClickUser = async(e:Event)=>{
        e.preventDefault()
        try {
            const student = await fetch('/api/save-student', {
                method : "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({studentId,tipo})
            })
            const respuesta: StudentResponse = await student.json()
            console.log("dio usuario.", respuesta.ok," ", studentId)
            if (respuesta.ok) {
                console.log("dio usuario.", respuesta.data?._id, " ", respuesta.data?.userName, respuesta.message)
                buttomSave=true
                return
            }
        } catch (error) {
            console.error('Error al crear la sesión', error);
        }
        
    }
    const onClieckSel = async(e:Event)=>{
        e.preventDefault()
        sel+=1
    }

</script>
<body>
<div>
    
    <div class="CuadroTexto">
        <h1>Revision de documentacion</h1>
        <h3> Seleccione postulado</h3>
        <div class="Boton">
            <input type="text" required bind:value={studentId} disabled={buttomSave}>
            <button on:click={onClickUser} disabled={buttomSave}>save</button>
        </div>
        
        
    </div>
    <div class="DropDown">
    <select name="archivos" id="archivos" bind:value={title} on:change={handleChange} disabled={buttomUp}>
        <option value="4 1464 IN-IV-F-26 Concertación de entregables según OPS">4 1464 IN-IV-F-26 Concertación de entregables según OPS</option>
        <option value="GA-GH-F-4 - Solicitud Orden y/o Contrato de Prestación de Servicios - V12">GA-GH-F-4 - Solicitud Orden y/o Contrato de Prestación de Servicios - V12</option>
        <option value="Cedula de ciudadania">Cedula de ciudadania</option>
        <option value="Hoja de vida ">Hoja de vida </option>
        <option value="Libreta militar">Libreta militar</option>
        <option value="Tarjeta profesional">Tarjeta profesional</option>
        <option value="Diploma de grado">Diploma de grado</option>
        <option value="Acta de grado">Acta de grado</option>
        <option value="Certificacion a Fondo de pensiones">Certificacion a Fondo de pensiones</option>
        <option value="Certificacion a Afiliación a EPS">Certificacion a Afiliación a EPS</option>
        <option value="Certificacion a Afiliación a ARL">Certificacion a Afiliación a ARL</option>
        <option value="Registro Unico Tributario (RUT)">Registro Unico Tributario (RUT)</option>
        <option value="Compromiso de Confidencialidad">Compromiso de Confidencialidad</option>
        <option value="Examen Ocupacional de Ingreso ">Examen Ocupacional de Ingreso </option>
        <option value="Formato de Seguridad Social">Formato de Seguridad Social</option>
        <option value="Certificado de Antescedentes Procuraduría General">Certificado de Antescedentes Procuraduría General</option>
        <option value="Certificado de Antescedentes Contraloría General">Certificado de Antescedentes Contraloría General</option>
        <option value="Certificado de Antescedentes Policia Nacional">Certificado de Antescedentes Policia Nacional</option>
        <option value="formato de justificación">formato de justificación</option>
        <option value="declaración de no inhabilidades, incompatibilidades ">declaración de no inhabilidades, incompatibilidades </option>
        <option value="pantallazo requisición univex">pantallazo requisición univex</option>
    </select>
    
    </div>
    <div>
        <textarea name="" id="" cols="30" rows="10" disabled={buttomUp}></textarea>
        <button disabled={buttomUp}>upload</button>
    </div>
    <div>
        <button disabled={buttomUp}>enviar</button>
    </div>
</div>
</body>