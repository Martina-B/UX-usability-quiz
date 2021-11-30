import { FC, useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore';

import { resultsCollection, Result } from '../utils/firebase';

const Results: FC = () => {
	const [results, setResults] = useState<Result[]>([]);
	const [statistics, setStatistics] = useState<string>();
	const [mistakes, setMistakes] = useState<MistakesDictionary>({});

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

	useEffect(() => {
		setStatistics(
			(
				results.reduce((value, res) => value + res.points, 0) / results.length
			).toFixed(2)
		);
	}, [results]);

	useEffect(() => {
		setMistakes(
			results.reduce((result: MistakesDictionary, res) => {
				for (const m of res.mistakes) {
					if (result[m]) {
						result[m] += 1;
					} else {
						result[m] = 1;
					}
				}
				return result;
			}, {})
		);
	}, [results]);

	const quizTaken = results.length;

	type MistakesDictionary = {
		[name: string]: number;
	};

	return (
		<>
			<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
				UX Usability Quiz was taken{' '}
				<Typography
					variant="h6"
					component="span"
					sx={{ backgroundColor: 'contrast', fontWeight: 'bold' }}
				>
					{quizTaken}
				</Typography>{' '}
				times with average success rate{' '}
				<Typography
					variant="h6"
					component="span"
					sx={{ backgroundColor: 'contrast', fontWeight: 'bold' }}
				>
					{statistics}%
				</Typography>
				.
			</Typography>
			<Typography variant="h4" sx={{ textAlign: 'left', fontWeight: 'bold' }}>
				Respondents made mistakens mainly in:
			</Typography>
			<ul className="listOfMistakes">
				{Object.entries(mistakes).map(([m, index]) => (
					<li key={index}>
						<Typography variant="h5" sx={{ textAlign: 'left' }}>
							{m} ({((mistakes[m] / quizTaken) * 100).toFixed(2)}
							%)
						</Typography>
					</li>
				))}
			</ul>
		</>
	);
};

export default Results;