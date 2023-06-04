<script lang="ts">
    import '../../assets/css/revisionJovenInvesAdmin.css'
    import {goto} from '$app/navigation'
    const onClickStudent=(e:Event)=>{
        e.preventDefault()
        goto('/testI', {replaceState:true})
    }
</script>
<section>
    <h2>Revisión de jovenes investigador</h2>
        <div id="carta" on:click={onClickStudent}>
            <img src="/logo contratacion.png" alt="postilado 1" width="20px" height="20px">
            <h6>jose arturo ramirez</h6>
        </div>
</section>