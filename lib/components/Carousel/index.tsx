import clsx from "clsx";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { FC, memo, useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Button from "../Button";
import Image from "../Image";

interface CarouselProps {
	images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState<"next" | "prev">("next");
	const prevIndexRef = useRef(activeIndex);

	useEffect(() => {
		prevIndexRef.current = activeIndex;
	}, [activeIndex]);

	const handleNext = () => {
		setDirection("next");
		setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const handlePrev = () => {
		setDirection("prev");
		setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const slideVariants: Variants = {
		enter: (direction: "next" | "prev") => ({
			x: direction === "next" ? "100%" : "-100%",
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
		exit: (direction: "next" | "prev") => ({
			x: direction === "next" ? "-100%" : "100%",
			opacity: 0,
			transition: { duration: 0.5 },
		}),
	};

	return (
		<div className="relative w-full min-h-60 overflow-hidden rounded-lg">
			{/* Nút điều hướng */}
			<Button
				onClick={handlePrev}
				isIconOnly
				isRounded
				className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
			>
				<FaAngleLeft size={24} />
			</Button>

			<Button
				onClick={handleNext}
				isIconOnly
				isRounded
				className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
			>
				<FaAngleRight size={24} />
			</Button>

			<div className="w-full h-full">
				<AnimatePresence initial={false} custom={direction}>
					<motion.div
						key={images[activeIndex]}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						custom={direction}
						className="absolute flex items-center w-full h-full justify-center"
					>
						<Image
							src={images[activeIndex]}
							alt={`Slide ${activeIndex}`}
						/>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Dots điều hướng */}
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={clsx(
							"w-3 h-3 rounded-full bg-gray-900 transition-all",
							activeIndex === index && "scale-150 !bg-white"
						)}
					/>
				))}
			</div>
		</div>
	);
};

export default memo(Carousel);
