"use client";

import styled from "styled-components";

const Spinner = styled.div<{
	$width?: number;
	$height?: number;
	$color?: string;
}>`
	width: ${(props) => `${props.$width ?? 48}px`};
	height: ${(props) => `${props.$height ?? 48}px`};
	border-radius: 50%;
	position: relative;
	animation: rotate 1s linear infinite;

	&::before {
		content: "";
		box-sizing: border-box;
		position: absolute;
		inset: 0px;
		border-radius: 50%;
		border: 5px solid ${(props) => (props.$color ? props.$color : "#000")};
		animation: prixClipFix 2s linear infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes prixClipFix {
		0% {
			clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
		}
		25% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
		}
		50% {
			clip-path: polygon(
				50% 50%,
				0 0,
				100% 0,
				100% 100%,
				100% 100%,
				100% 100%
			);
		}
		75% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
		}
		100% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
		}
	}
`;

export default Spinner;
