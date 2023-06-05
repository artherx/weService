<script lang="ts">
    import '../../assets/css/revision_documentacion.css'
    import {goto} from '$app/navigation'
    let aprobarD= true
    let descartarD= true
    let testRandom =[
        {
            "_id": "647d1947aec551ce916818b9",

  "studentId": "647d1941aec551ce916818b7",
  "studentName": "fghgvc",
  "profesorID": "6477cb8c13ec7c201fd4d51d",
  "title": "Certificado+electoral.pdf",
  "tipo": "formato de justificación",
  "estado": "espera",
 
        },
        {
            "_id": "647d46cc5607f965ce16f7cb",

  "studentId": "647d46c75607f965ce16f7c9",
  "studentName": "ramiroi",
  "profesorID": "6477cb8c13ec7c201fd4d51d",
  "title": "fase div 8-8.pdf",
  "tipo": "Hoja de vida ",
  "estado": "espera",
        },
        {
            "_id": "647d46da5607f965ce16f7cd",
  "studentId": "647d46c75607f965ce16f7c9",
  "studentName": "ramiroi",
  "profesorID": "6477cb8c13ec7c201fd4d51d",
  "title": "fase div 8-8.pdf",
  "tipo": "Certificado de Antescedentes Policia Nacional",
  "estado": "espera",
        },
        {
            "_id": "647d46e45607f965ce16f7cf",
  "studentId": "647d46c75607f965ce16f7c9",
  "studentName": "ramiroi",
  "profesorID": "6477cb8c13ec7c201fd4d51d",
  "title": "METODOS MATEMATICOS 2019-2.pdf",
  "tipo": "declaración de no inhabilidades, incompatibilidades ",
  "estado": "espera",
        },
        {
            "_id": "647d46ec5607f965ce16f7d1",
  "studentId": "647d46c75607f965ce16f7c9",
  "studentName": "ramiroi",
  "profesorID": "6477cb8c13ec7c201fd4d51d",
  "title": "fase div 4-8.pdf",
  "tipo": "declaración de no inhabilidades, incompatibilidades ",
  "estado": "espera",
        },
        {
            
        }
    ]
    const onClickA=(e:Event)=>{
        if(aprobarD){
            e.preventDefault(),
            descartarD=false
        }
    }
    const onClickD=(e:Event)=>{
        if(descartarD){
            e.preventDefault(),
            aprobarD=false
        }
    }
</script>
<section class="contenido">
    <h6>apartado del postulado 1</h6>
    <div id="carta2">
        <a href="" download="">nombre documento</a>
        <h6>4 1464 IN-IV-F-26 Concertación de entregables según OPS</h6>
        <button id="aprobar" on:click={onClickA} style={aprobarD?'': "opacity: 0;"}>Aprobar</button>
        <button id="denegar" on:click={onClickD} style={descartarD?'': "opacity: 0;"}>Denegar</button>
    </div>
</section>