import styled, { keyframes } from "styled-components";

// Define keyframes separately for potential reuse and cleaner component definition
const rippleAnimation = keyframes`
		to {
				opacity: 0;
				transform: scale(2);
		}
`;

export const RippleContainer = styled.div<{
	color: string;
	duration: number;
}>`
	position: absolute;
	// Use inset shorthand for positioning
	inset: 0;
	overflow: hidden; // Contain the ripple effect within the bounds
	border-radius: inherit; // Inherit border-radius from parent if needed

	span {
		transform: scale(0);
		border-radius: 50%; // 50% is sufficient for a circle
		position: absolute;
		opacity: 0.75;
		background-color: ${({ color }) => color};
		// Use animation shorthand and reference the keyframes
		// Use will-change to hint browsers about upcoming animation for potential optimization
		will-change: transform, opacity;
		animation: ${rippleAnimation} ${({ duration }) => duration}ms ease-out; // Use ease-out for a common ripple feel
		pointer-events: none; // Ensure ripple doesn't interfere with interactions
	}
`;
