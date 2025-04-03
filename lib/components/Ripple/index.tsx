import {
	useState,
	useLayoutEffect,
	FC,
	MouseEvent,
	CSSProperties,
	memo,
} from "react";
import { RippleContainer } from "./Ripple.styled";

interface RippleState {
	x: number;
	y: number;
	size: number;
}

interface RippleProps {
	duration?: number;
	color?: string;
}

const useDebouncedRippleCleanUp = (
	rippleCount: number,
	duration: number,
	cleanUpFunction: () => void,
) => {
	useLayoutEffect(() => {
		let bounce: NodeJS.Timeout | null = null;
		if (rippleCount > 0) {
			if (bounce) {
				clearTimeout(bounce);
			}

			bounce = setTimeout(() => {
				cleanUpFunction();
				if (bounce) {
					clearTimeout(bounce);
				}
			}, duration * 4);
		}

		return () => {
			if (bounce) {
				clearTimeout(bounce);
			}
		};
	}, [rippleCount, duration, cleanUpFunction]);
};

const Ripple: FC<RippleProps> = ({ duration = 850, color = "#fff" }) => {
	const [rippleArray, setRippleArray] = useState<RippleState[]>([]);

	useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
		setRippleArray([]);
	});

	const addRipple = (event: MouseEvent<HTMLDivElement>) => {
		const rippleContainer = event.currentTarget.getBoundingClientRect();
		const size =
			rippleContainer.width > rippleContainer.height
				? rippleContainer.width
				: rippleContainer.height;
		const x = event.pageX - rippleContainer.x - size / 2;
		const y = event.pageY - rippleContainer.y - size / 2;
		const newRipple: RippleState = {
			x,
			y,
			size,
		};

		setRippleArray((prevState) => [...prevState, newRipple]);
	};

	return (
		<RippleContainer
			duration={duration} // Assuming styled-components convention for transient props
			color={color} // Assuming styled-components convention for transient props
			onMouseDown={addRipple}
		>
			{rippleArray.length > 0 &&
				rippleArray.map((ripple, index) => {
					const style: CSSProperties = {
						top: ripple.y,
						left: ripple.x,
						width: ripple.size,
						height: ripple.size,
					};
					return <span key={"span" + index} style={style} />;
				})}
		</RippleContainer>
	);
};

export default memo(Ripple);
