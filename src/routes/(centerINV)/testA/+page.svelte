<script lang="ts">
    import '../../assets/css/revision_documentacion.css'
    import {goto} from '$app/navigation'
    let aprobarD= false
    let descartarD= false
    let aprobarI= 'display: block;'
    let descartarI= 'display: block;'
    const onClickA=(e:Event)=>{
        e.preventDefault(),
        aprobarD=true
        descartarI='display: none;'
    }
    const onClickD=(e:Event)=>{
        e.preventDefault(),
        descartarD=true
        aprobarI='display: none;'
    }
</script>
<section class="contenido">
    <h6>apartado del postulado 1</h6>
    <div id="carta2">
        <a href="" download="">nombre documento</a>
        <h6>4 1464 IN-IV-F-26 Concertación de entregables según OPS</h6>
        <button id="aprobar" on:click={onClickA} >Aprobar</button>
        <button id="denegar"on:click={onClickD} >Denegar</button>
    </div>
</section>