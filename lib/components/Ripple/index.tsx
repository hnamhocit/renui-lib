import {
	useState,
	FC,
	MouseEvent,
	CSSProperties,
	memo,
	useRef,
	useEffect,
} from "react";
// Assuming RippleContainer is defined in './Ripple.styled' or similar
// and uses transient props ($duration, $color) as per the prompt's styled-components example
import { RippleContainer } from "./Ripple.styled";

interface RippleState {
	key: number; // Unique key for each ripple
	x: number;
	y: number;
	size: number;
}

interface RippleProps {
	duration?: number;
	color?: string;
}

const Ripple: FC<RippleProps> = ({ duration = 850, color = "#fff" }) => {
	const [rippleArray, setRippleArray] = useState<RippleState[]>([]);
	// Use a ref to ensure timeout IDs are managed correctly across renders
	const timeoutIdsRef = useRef<NodeJS.Timeout[]>([]);

	// Cleanup timeouts on component unmount
	useEffect(() => {
		const timeoutIds = timeoutIdsRef.current;
		return () => {
			timeoutIds.forEach(clearTimeout);
		};
	}, []);

	const addRipple = (event: MouseEvent<HTMLDivElement>) => {
		const rippleContainer = event.currentTarget.getBoundingClientRect();
		// Use Math.max for slightly cleaner size calculation
		const size = Math.max(rippleContainer.width, rippleContainer.height);
		// Calculate position relative to the container element
		// event.clientX/Y gives position relative to viewport, subtract element's top/left
		const x = event.clientX - rippleContainer.left - size / 2;
		const y = event.clientY - rippleContainer.top - size / 2;
		const key = Date.now(); // Simple unique key generation

		const newRipple: RippleState = {
			key,
			x,
			y,
			size,
		};

		// Add the new ripple to the state
		setRippleArray((prevState) => [...prevState, newRipple]);

		// Set a timeout to remove this specific ripple after the animation duration
		const timeoutId = setTimeout(() => {
			setRippleArray((prevRipples) =>
				prevRipples.filter((r) => r.key !== key),
			);
			// Remove the timeout ID from the ref list once it has executed
			timeoutIdsRef.current = timeoutIdsRef.current.filter(
				(id) => id !== timeoutId,
			);
		}, duration);

		// Store the timeout ID so it can be cleared on unmount
		timeoutIdsRef.current.push(timeoutId);
	};

	return (
		<RippleContainer
			duration={duration} // Use transient prop convention for styled-components
			color={color} // Use transient prop convention for styled-components
			onMouseDown={addRipple}
		>
			{rippleArray.map((ripple) => {
				// Inline styles remain necessary for positioning and sizing each ripple dynamically
				const style: CSSProperties = {
					top: ripple.y,
					left: ripple.x,
					width: ripple.size,
					height: ripple.size,
				};
				// Use the unique key for the React key prop
				return <span key={ripple.key} style={style} />;
			})}
		</RippleContainer>
	);
};

// Memoization prevents unnecessary re-renders if props haven't changed
export default memo(Ripple);
