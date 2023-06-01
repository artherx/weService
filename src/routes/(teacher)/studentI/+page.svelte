<script lang="ts">
    import '../../assets/css/revicionasistentesadmin.css'
	import type { StudentResponse } from "../../../domain/entities/student/StudentResponse";

    let studentId= ''
    let tipo= 'investigador'
    let texto= ''

    function handleChange(event:Event) {
        tipo = (event.target as HTMLSelectElement)?.value || ''; // Actualizar la variable con el valor seleccionado
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
        } catch (error) {
            console.error('Error al crear la sesión', error);
        }
    }

</script>

<header>
    <img src="ASSETS/IMG/logo-social.png" alt="Logo">
    <nav class="navegacion">
        <a href="InicioProf.html">Inicio</a>
        <a href="EntregaJovenes.html">Jovenes investigadores</a>
        <a href="EntregaAsistentes.html">Asistentes</a>
        <button class="btnLogOut">Cerrar Sesión</button>
    </nav> 
</header>
<h1>Revision de documentacion</h1>
<h3> Seleccione postulado</h3>
<div>
    <div>
        <input type="text" required bind:value={studentId}>
        <button on:click={onClickUser}>save</button>
        
    </div>
    <div>
    <select name="archivos" id="archivos" bind:value={tipo} on:change={handleChange}>
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
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>upload</button>
    </div>
    <div>
        <button>enviar</button>
    </div>
</div>