//App.js

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, 
		faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import './App.css'

const App = () => {
	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		// Fetch GitHub repositories
		const fetchRepositories = async () => {
			try {
				const response = await fetch
('https://api.github.com/users/AbhilashGaurav/repos?per_page=4');
				const data = await response.json();
				setRepositories(data);
			} catch (error) {
				console.error('Error fetching GitHub repositories:', error);
			}
		};

		fetchRepositories();
	}, []);

	return (
		<div className="portfolio-container">
			<header>
				<div className="profile-photo"></div>
				<div className="header-content">
					<h1>AbhilashGaurav</h1>
					<div className="social-icons">
						<a href=
"https://www.linkedin.com/in/abhilash-gaurav-8b0a911bb/"
							target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faLinkedin} size="2x" />
						</a>
						<a href=
"https://github.com/AbhilashGaurav" target="_blank" 
							rel="noopener noreferrer">
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</a>
					</div>
				</div>
			</header>
			<div className="content">
				<section className="about">
					<h2>About Me</h2>
					<p>
						Hello! I'm Abhilash Gaurav, a passionate 
						web developer with a strong
						foundation in React and JavaScript.
						I love building engaging and interactive
						web applications.Let's create something 
						amazing together!
					</p>
				</section>
				<section className="projects">
					<h2>Projects</h2>
					<div className="project-tiles">
						{repositories.map(repo => (
							<div className="project-tile" key={repo.id}>
								<a href={repo.html_url} 
								target="_blank" 
								rel="noopener noreferrer">
									<b>{repo.name}</b></a>
								<p>{repo.description}</p>
							</div>
						))}
					</div>
				</section>
				<section className="skillset">
					<h2>Skillset</h2>
					<div className="palettes">
						<div>

							<FontAwesomeIcon icon={faPython} size="3x" />
							<FontAwesomeIcon icon={faReact} size="3x" />
						</div>
					</div>
				</section>
				<section className="experience">
					<h2>Experience</h2>
					Technical Content Writer “python language” 
					Intern for GeeksForGeeks from
					April 2022-October 2022.
				</section>
				<section className="contact">
					<h2>Contact</h2>
					<div>
						Father’s Name: Mr. Ram Khilawan
					</div>
					<div>
						Mother’s Name: Kamlesh Kumari
					</div>
					<div>
						Date of Birth: 19 Dec 2003
					</div>
					<div>
						Languages Known: English, Hindi
					</div>
					<div>
						Nationality: Indian
					</div>
					<div>
						Hobbies: Playing acoustic Guitar,
						football, Listening Smooth Music,
						Competitive Coding
					</div>
				</section>
			</div>
		</div>
	);
};

export default App;
