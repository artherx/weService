<script lang="ts">
	import type { IFormLoginUser } from '../../domain/interfaces/FormLoginUser';
    import {goto} from '$app/navigation'
    import '../assets/css/login.css'
    let userL: IFormLoginUser ={
        userNL:"",
        passL: ""
    }
    const onClickUser = (e:Event)=>{
        e.preventDefault()
        if(userL.userNL && userL.passL){
            if(userL.userNL==="jh" && userL.passL==="jh"){
                console.log(userL)
                goto('/homeINV', {replaceState:true})
            }
            else{
                console.log("error")
            }
        } else{
            console.log("no hay contraseña")
        }        
    }
</script>



<header>
    <img src="/logo-social.png" alt="Logo UMNG">
</header>
<section>
    <div class="izquierda">
        <h1>Universidad Militar Nueva Granada</h1>
        <span>El administrador se encarga de verificar los documentos enviados por el operador</span>
    </div>
    <div class="derecha">
        <div class="Iniciar-Sesion">
            <h2>Iniciar sesión</h2>
            <form action="#">
                <div class="login">
                    <span class="iconos"><ion-icon name="person-circle"></ion-icon></span>
                    <input id="userU" type="Usuario" required bind:value={userL.userNL} />
                    <label for="userU" >Usuario</label>
                </div>
                <div class="login">
                    <span class="iconos"><ion-icon name="lock-closed"></ion-icon></span>
                    <input id="passwordU" type="Contraseña" required bind:value={userL.passL} />
                    <label for="passwordU">Contraseña</label>
                </div>
                <div class="recordarContra">
                    <label><input type="Checkbox">Recordar Contraseña</label>
                    <a href="#">¿Se olvido la contraseña?</a>
                </div>
                <button type="submit" class="btn" on:click={onClickUser}>Iniciar sesión</button>
                <div class="login-registro">
                    <p>
                        ¿No tienes cuenta? <a href= "#" class="link-registro"> Registrarse </a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</section>