import {
	CSSProperties,
	FC,
	forwardRef,
	Ref,
	useImperativeHandle,
	useState
} from 'react';
import '../Styles/QuizItem.css';

type Props = {
	isCorrect: boolean;
	style?: CSSProperties;
	ref: Ref<unknown>;
};

const QuizItem: FC<Props> = forwardRef(
	({ isCorrect, style, children }, ref) => {
		const [chosen, setChosen] = useState(true);

		useImperativeHandle(
			ref,
			() => ({
				isCorrect,
				chosen
			}),
			[chosen]
		);

		const switchChosen = () => {
			setChosen(!chosen);
		};

		const handleKeyDown = (ev: { keyCode: number }) => {
			// check keys if you want
			if (ev.keyCode === 13) {
				focus();
			}
		};

		return (
			// eslint-disable-next-line jsx-a11y/no-static-element-interactions
			<div
				className={chosen ? 'quiz-item-chosen' : ''}
				onClick={switchChosen}
				onKeyDown={handleKeyDown}
				style={style}
			>
				{children}
			</div>
		);
	}
);

export default QuizItem;
