import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/iniciosesion.css";

export const InicioSesion = () => {

	const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	async function handleSubmit(e) {
        e.preventDefault()
        const isLogged = await actions.login(email, password)
        if (isLogged) {
            navigate("/vendedor");
        }
    }

	return (
		<div className="inicio-sesion d-flex justify-content-center">
			<div className="LeftSide col-md-4">
				<h1>¡Nos alegra volver a verte en tu barrio!</h1>
			</div>
			<div className="col-md-4 m-4">
				<div className="card p-5">
					<div className="card-body">
					<form onSubmit={handleSubmit} >
						<div className="mb-4">
							<h1>Iniciar sesión</h1>
						</div>
						<div className="">
							<label for="exampleInputEmail1" className="form-label">Accede con tu dirreción de email y contraseña</label>
							<div className="d-flex justify-content-around m-2">
								<div className="form-check">
									<input className="form-check-input" type="radio" name="opcion" id="opcion1" value="opcion1"/>
									<label className="form-check-label" for="opcion1">Soy un particular</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="opcion" id="opcion2" value="opcion2"/>
									<label className="form-check-label" for="opcion2">Soy una empresa</label>
								</div>
							</div>
						</div>
						<div className="mb-3">
							<label for="exampleInputEmail1" className="form-label">Email</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@address.com" onChange={(event) => { setEmail(event.target.value) }}/>
						</div>
						<div className="mb-4">
							<label for="exampleInputPassword1" className="form-label">Contraseña</label>
							<input type="password" className="form-control" id="exampleInputPassword1" placeholder="***********" onChange={(event) => { setPassword(event.target.value) }}/>
							<div className="form-text">¿Olvidaste tu contraseña?</div>
						</div>
						<button type="submit" className="boton mb-4">Iniciar Sesión</button>
						<div className="mb-3 form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
							<label className="form-check-label" for="exampleCheck1">Recordarme</label>
						</div>
						<div className="form-text d-flex justify-content-center">¿No tienes cuenta?  
						<Link to="/createuser">
						Crea una cuenta nueva
						</Link>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};