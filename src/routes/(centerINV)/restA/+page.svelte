<script lang="ts">
    import '../../assets/css/revisionAsistentesAdmin.css'
    import {goto} from '$app/navigation'
    let student = 'No hay nombre'
    const onClickStudent=(e:Event)=>{
        e.preventDefault()
        goto('/testA', {replaceState:true})
    }
</script>
<section>
    <h2>Revisión de jovenes asistentes</h2>
        <div id="carta" on:click={onClickStudent}>
            <img src="/logo contratacion.png" alt="postilado 1" width="20px" height="20px">
            <h6>{student}</h6>
        </div>
</section>