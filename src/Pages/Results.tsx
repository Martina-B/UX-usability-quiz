import { FC, useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore';

import { resultsCollection, Result } from '../utils/firebase';

const Results: FC = () => {
	const [results, setResults] = useState<Result[]>([]);

	useEffect(() => {
		// Call onSnapshot() to listen to changes
		const unsubscribe = onSnapshot(resultsCollection, snapshot => {
			// Access .docs property of snapshot
			setResults(snapshot.docs.map(doc => doc.data()));
		});
		// Don't forget to unsubscribe from listening to changes
		return () => {
			unsubscribe();
		};
	}, []);

	const getStatistics = () =>
		results.reduce((value, res) => value + res.points, 0);

	const quizTaken = results.length;

	type MistakesDictionary = {
		[name: string]: number;
	};

	const mostCommonMistakes: MistakesDictionary = results.reduce(
		(result: MistakesDictionary, res) => {
			for (const m of res.mistakes) {
				if (result[m]) {
					result[m] += 1;
				} else {
					result[m] = 1;
				}
			}
			return result;
		},
		{}
	);

	return (
		<>
			<Typography variant="h4">
				UX Usability Quiz was taken {quizTaken} times with average success rate{' '}
				{getStatistics()}&#37;!
			</Typography>
			<Typography>Respondents made mistakens mainly in:</Typography>
			<ul className="list">
				{Object.entries(mostCommonMistakes).map(([m, index]) => (
					<li key={index}>
						{m}{' '}
						{(mostCommonMistakes[m] /
							Object.entries(mostCommonMistakes).length) *
							100}
						&#37;
					</li>
				))}
			</ul>
		</>
	);
};

export default Results;
