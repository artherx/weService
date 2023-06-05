<script lang="ts">
    import {goto} from '$app/navigation'
	import type { UserRespose } from '../../../domain/user/UserResponse';
	import { profesor } from '../../../utils/stores/ProfesorStore';
    import '../../assets/css/registre.css'
    let nombreUsuario = '';
    let contraseña = '';
    let rol = '';
    let confir=''
    function handleChange(event:Event) {
        rol = (event.target as HTMLSelectElement)?.value || ''; // Actualizar la variable con el valor seleccionado
    }
    const onClickUser = async(e:Event)=>{
        e.preventDefault()
        if(nombreUsuario && contraseña && confir){
            if(confir===contraseña){
                    try{
                        const response = await fetch('/api/valid-user', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ nombreUsuario })
                        })
                        const usuario: UserRespose = await response.json()
                        if (!usuario.ok) {
                            console.log("Hubo algun error al consultar el usuario.")
                            return
                        }
                        if (usuario.data !== null) {
                            console.log('Ya existe un usuario con ese nombre', usuario.data)
                            return
                        }
                        const responseRegister: UserRespose = await (await fetch('/api/register-user', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ nombreUsuario, contraseña, role: rol })
                        })).json()
                        if (!responseRegister.ok) {
                            console.log("Hubo algun error al registrar el usuario.")
                            return
                        }
                        if (responseRegister.data === null) {
                            console.log("No se registro el usuario.")
                            return
                        }
                        profesor.set((responseRegister.data?._id) ? responseRegister.data?._id : "")
                        console.log('Sesión creada exitosamente');
                        // console.log('Datos de la sesión:', nuevaSesion);
                        if(rol==='teacher')
                            goto('/homeTe', {replaceState:true})
                        if(rol==='admin')
                            goto('/homeINV', {replaceState:true})
                    
                    }catch(error){
                        console.error('Error al crear la sesión', error);
                    }

            }
            else{
                console.log("contraseñas diferentas")
            }
        } else{
            console.log("no hay contraseña")
        }        
    }
</script>

<img src="/logo-social.png" alt="Logo UMNG" id='R'>
<section id='RS'>
    <div class="izquierdaR">
        <h1>Universidad Militar Nueva Granada</h1>
        <span>El administrador se encarga de verificar los documentos enviados por el operador</span>
    </div>
    <div class="derechaR">
        <div class="Iniciar-SesionR">
            <h2>Registrar sesión</h2>
            <form action="#">
                <div class="loginR">
                    <span class="iconosR"><ion-icon name="person-circle"></ion-icon></span>
                    <input id="userUR" type="Usuario" required bind:value={nombreUsuario}/>
                    <label for="userU" >Usuario</label>
                </div>
                <div class="loginR">
                    <span class="iconosR"><ion-icon name="lock-closed"></ion-icon></span>
                    <input id="passwordUR" type="Contraseña" required bind:value={contraseña}/>
                    <label for="passwordUR">Contraseña</label>
                </div>
                <div class="loginR">
                    <span class="iconosR"><ion-icon name="lock-closed"></ion-icon></span>
                    <input id="passwordUR" type="Contraseña" required bind:value={confir}/>
                    <label for="passwordU">Confirmar Contraseña</label>
                </div>
                <select name="menu" id="menuR" bind:value={rol} on:change={handleChange}>
                    <option value="admin"> administrador</option>
                    <option value="teacher">profesor</option>
                </select>
                <button type="submit" class="btnR" on:click={onClickUser}>Registrar sesión</button>
                <div class="login-registroR">
                    <p>
                        ¿Ya tienes cuenta? <a href= "/" class="link-registroR"> Inicie Sesion </a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</section>