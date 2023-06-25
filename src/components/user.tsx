export interface UserProps {
	user: {
		gender: string;
		name: { title: string; last: string; first: string };
		picture: { large: string };
		location: { city: string; country: string };
		dob: { age: number };
	};
}

export default function User({ user }: UserProps) {
	const { gender, name, picture, location, dob } = user;

	return (
		<>
			<li className="user__item">
				<button id="delete__btn" className="user__delete--btn">
					<i className="fas fa-trash"></i>
				</button>
				<img
					className="user__img"
					alt="User photo"
					src={picture["large"]}
					width="100"
					height="100"
				/>
				<div className="user__name">
					<span className="material-symbols-outlined">badge</span>
					<span>
						- {name["title"]} {name["first"]} {name["last"]}
					</span>
				</div>
				<div className="user__year">
					<span className="material-symbols-outlined">cake</span>
					<span>- {dob["age"]}</span>
				</div>
				<div className="user__location">
					<span className="material-symbols-outlined">person_pin_circle</span>
					<span>
						- {location["city"]} {location["country"]}
					</span>
				</div>
				<div className="user__gender">
					<span className="material-symbols-outlined">man</span>
					<span>- {gender}</span>
				</div>
			</li>
		</>
	);
}
