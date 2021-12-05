import { FC, useEffect, useState } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getDoc, getDocs } from 'firebase/firestore';

import { resultsCollection, resultDocument, Result } from '../utils/firebase';

const Evaluation: FC = () => {
	const { id } = useParams<{ id: string }>();
	const [loading, setLoading] = useState(false);
	const [myResult, setMyResult] = useState<Result>();
	const [results, setResults] = useState<Result[]>([]);
	const [percentile, setPercentile] = useState<string>();

	useEffect(() => {
		setLoading(true);
		getDocs(resultsCollection).then(r => {
			setResults(r.docs.map(doc => doc.data()));

			getDoc(resultDocument(id)).then(r => {
				setMyResult(r.data());
				setLoading(false);
			});
		});
	}, []);

	useEffect(() => {
		if (myResult) {
			let worseThanI = 0;
			for (const r of results) {
				if (r.points < myResult.points) {
					worseThanI += 1;
				}
			}
			setPercentile(((worseThanI * 100) / results.length).toFixed(2));
		}
	}, [myResult]);

	return (
		<div>
			{loading ? (
				<CircularProgress sx={{ display: 'block', margin: 'auto' }} />
			) : (
				<>
					<Typography
						variant="h4"
						sx={{ fontWeight: 'bold', textAlign: 'center' }}
					>
						You’ve been better than{' '}
						<Typography
							variant="h4"
							component="span"
							sx={{ backgroundColor: 'contrast', fontWeight: 'bold' }}
						>
							{percentile}%
						</Typography>{' '}
						of quiz respondents.
					</Typography>
					{!!myResult && !!myResult.mistakes && (
						<>
							<Typography
								variant="h6"
								sx={{ textAlign: 'center', marginTop: '50px' }}
							>
								You found{' '}
								<Typography
									variant="h6"
									component="span"
									sx={{ backgroundColor: 'contrast', fontWeight: 'bold' }}
								>
									{' '}
									{(myResult.points * 7) / 100} / 7
								</Typography>{' '}
								mistakes!
							</Typography>
							<Typography variant="h6" sx={{ textAlign: 'center' }}>
								And incorrectly marked{' '}
								<Typography
									variant="h6"
									component="span"
									sx={{ backgroundColor: 'contrast', fontWeight: 'bold' }}
								>
									{myResult.incorrectChoosen}
								</Typography>{' '}
								elements as wrong.
							</Typography>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Evaluation;
