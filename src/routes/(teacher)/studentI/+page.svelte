<script lang="ts">
    import '../../assets/css/envioDocI.css'
	import type { StudentResponse } from "../../../domain/entities/student/StudentResponse";
	import type { UserRespose } from '../../../domain/user/UserResponse';
    import {goto} from '$app/navigation'
	import { profesor } from '../../../utils/stores/ProfesorStore';
    let buttomSave2=false
    let studentname= ''
    let studentID= ''
    let tipo= 'asistente'
    let title = '4 1464 IN-IV-F-26 Concertación de entregables según OPS'
    let archivoS= 'sin archivo'
    let archivoSelt: FileList | null= null
    let myProfesor='';
    let vectorCadenas: string[] = [];
    let textoArea = vectorCadenas.join('\n');
    
    function actualizarVector() {
    vectorCadenas = textoArea.split('\n');
  }

    profesor.subscribe((value) => {
        myProfesor = value
    })
    function arChange(event:Event) {
        const input = event.target as HTMLInputElement;
        archivoS = input.files?.[0]?.name || 'sin archivo';
        archivoSelt = input.files;
        buttomSave2 = archivoSelt !== null && archivoSelt.length > 0;
    }

    function handleChange(event:Event) {
        title = (event.target as HTMLSelectElement)?.value || ''; // Actualizar la variable con el valor seleccionado
    }
    const onClickUser = async(e:Event)=>{
        e.preventDefault()
        try {
            console.log(myProfesor+"|"+ studentname+ "|"+ tipo)
            const student = await fetch('/api/save-student', {
                method : "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({nombreStudent:studentname, tipoRole:tipo, profe:myProfesor})
            })
            const respuesta: StudentResponse = await student.json()
            console.log(respuesta.ok ,"|",respuesta.message.toString,"|",respuesta.data?.userName)
            studentID=(respuesta.data?._id !== undefined) ? respuesta.data?._id?.toString() : ""
            if (respuesta.ok) {
                console.log("dio usuario.", respuesta.data?._id, " ", respuesta.data?.userName, respuesta.message)
                return
            }
        } catch (error) {
            console.error('Error al crear la sesión', error);
        }
        
    }
    const onClickSel = async (e: Event) => {
        if(studentname==''){
            console.log('no se ha ingrasado un estudiante')
            return
        }
        if(archivoS!='sin archivo'){
            e.preventDefault();

            console.log('los datos son A: '+studentID+"|"+studentname+"|"+title+"|"+myProfesor+ "" +archivoS)
            const documento = await fetch('/api/save-documents',
            {
                method : "POST",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({studentid:studentID, student:studentname,titulo:archivoS,profe:myProfesor, tip: title})
            })
            const respuesta: any =await documento.json() as any
            console.log('los datos son B: '+respuesta.data?.studentName+"|"+respuesta.data?.title+"|"+respuesta.data?.estado)

            archivoSelt = null;
            buttomSave2 = false;
            vectorCadenas.push(archivoS);
            vectorCadenas = [...vectorCadenas]
            textoArea=vectorCadenas.join('\n')
            archivoS = 'sin archivo'
        }
        else console.log('sin selecionar archivo');


    
    }
    const onClieckEnv = async(e:Event)=>{
        e.preventDefault()
        goto('/homeTe',{replaceState:true})
    }

</script>

<section id="sectionSI">
    <div class="CuadroTexto1">
        <h1>Revision de documentacion joven investigador</h1>
        <h3> Ingrese postulado</h3>
        <div class="Boton1">
            <input type="text" bind:value={studentname} >
            <button class="BotonSave1" on:click={onClickUser}>Guardar</button>
        </div>   
    </div>
    
        <div class="DropDown1">
            <select name="archivos" id="archivos1" bind:value={title} on:change={handleChange}>
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
        <div class="SubirSave1">
            <div>
                <h6>{archivoS}</h6>
            <form>
                <div id="File1">
                    <p id="Text1">Seleccionar archivo</p>
                    <input type="file" id="archivo1" name="archivo" accept="application/pdf" bind:files={archivoSelt}  on:change={arChange}>
                </div>
            </form>
            </div>
            <button class="BotonSaveFin1" on:click={onClickSel}>Guardar</button>
        </div>
            <textarea name="" disabled={true} bind:value={textoArea} on:input={actualizarVector}></textarea>
            <div class="Boton1">
                <button class="BotonSend1" on:click={onClieckEnv} >Salir</button>
        </div>

</section>