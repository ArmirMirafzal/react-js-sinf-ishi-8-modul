import { AppState } from "./../app";

import User from "./user";

export interface UsersProps extends Pick<AppState, "users"> {}

export default function Users({ users }: UsersProps) {
	return (
		<>
			<main className="main">
				<section className="hero">
					<div className="container">
						<h1>RANDOM USER GENERATOR</h1>
					</div>
				</section>

				<div className="container">
					<div className="middle">
						<form id="form" className="form">
							<input
								className="form__input"
								type="search"
								name="user-search"
								id="form__input"
								placeholder="Live search users"
								aria-label="search"
							/>

							<button id="form__button" className="form__button">
								<span className="form__button-inner">
									<span className="material-symbols-outlined">refresh</span>
									<span>Refresh</span>
								</span>
							</button>

							<button id="clear__button" className="clear__button form__button">
								<span className="form__button-inner">
									<i className="fa-sharp fa-solid fa-broom"></i>
									<span>Clear</span>
								</span>
							</button>

							<div className="border"></div>
						</form>
						<ul id="user" className="user">
       {users.map((user)=> (
        <User user={user}/>
       ))}
      </ul>
					</div>
				</div>
			</main>
		</>
	);
}
