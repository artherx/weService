<script lang="ts">
    import '../../assets/css/revision_documentacion.css'
    import {goto} from '$app/navigation'
    let aprobarD= true
    let descartarD= true
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