import { FC, useEffect, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { onSnapshot } from 'firebase/firestore';

import { resultsCollection, Result } from '../utils/firebase';
import { itemNamesTranslations } from '../Constants/quizItemNames';

const Results: FC = () => {
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState<Result[]>([]);
	const [statistics, setStatistics] = useState<string>();
	const [mistakes, setMistakes] = useState<MistakesDictionary>({});

	useEffect(() => {
		setLoading(true);
		// Call onSnapshot() to listen to changes
		const unsubscribe = onSnapshot(resultsCollection, snapshot => {
			// Access .docs property of snapshot
			setResults(snapshot.docs.map(doc => doc.data()));
			setLoading(false);
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
		<div>
			{loading ? (
				<CircularProgress sx={{ display: 'block', margin: 'auto' }} />
			) : (
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
					</Typography>
					<Typography
						variant="h4"
						sx={{ textAlign: 'left', fontWeight: 'bold' }}
					>
						Respondents made mistakes mainly in:
					</Typography>
					<ul className="listOfMistakes">
						{Object.entries(mistakes).map(([m, index]) => (
							<li key={index}>
								<Typography variant="h5" sx={{ textAlign: 'left' }}>
									{itemNamesTranslations[m]} (
									{((mistakes[m] / quizTaken) * 100).toFixed(2)}
									%)
								</Typography>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default Results;
