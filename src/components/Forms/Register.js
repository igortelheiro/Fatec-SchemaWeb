import React from 'react'
import { Link } from 'react-router-dom'
import { AppLogo } from '../Tools/LoadImg'

export default function Register() {
	return (
		<main className="noHeader">
			<section className="form-container">
				<form action="">
					<div className="form-header">
						<AppLogo />
						<h1>Cadastre-se</h1>
					</div>

					<input required id="email-input" className="input" placeholder="Email"/>
					<input required id="username-input" className="input" placeholder="Nome de usuário"/>
					<input required id="birthday-input" className="input" placeholder="Data de nascimento"/>

					<select required name="gender" id="" className="input input-select">
							<option value="none" disabled selected>Gênero</option>
							<option value="masculino">Masculino</option>
							<option value="feminino">Feminino</option>
							<option value="outro">Outro</option>
					</select>

					<button type="submit" className="button">Cadastrar</button>

					<div className="form-link">
						<p>Já possui uma conta?</p>
						<Link className="routeLink" to="/login"> Faça o Login! </Link>
					</div>
				</form>
			</section>
    </main>
	)
}
