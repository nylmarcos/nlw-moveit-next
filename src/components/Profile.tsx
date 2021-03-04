import { useContext } from 'react';

import styles from '../styles/components/Profile.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
	const { level } = useContext(ChallengesContext);

	return (
		<div className={styles.profileContainer}>
			<img src="https://avatars.githubusercontent.com/u/3015741?s=400&v=4" alt="Nyl Marcos"/>
			<div>
				<strong>Nyl Marcos</strong>
				<p>
					<img src="icons/level.svg" alt=""/>
					Level {level}
				</p>	
			</div>
		</div>
	);
}