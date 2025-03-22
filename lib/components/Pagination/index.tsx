import clsx from "clsx";
import Button from "../Button";
import {
	FaAnglesRight,
	FaAngleRight,
	FaAngleLeft,
	FaAnglesLeft,
} from "react-icons/fa6";
import { motion } from "motion/react";
import { memo } from "react";
import { Color } from "../../types";

interface PaginationProps {
	currentPage: number;
	onPageChange: (page: number) => void;
	length: number;
	itemsPerPage: number;
	isRounded?: boolean;
	color?: Color;
}

const variants = {
	colors: {
		default: "bg-gray-100 dark:!text-black",
		primary: "!text-blue-600 !bg-blue-200",
		secondary: "!text-indigo-600 !bg-indigo-200",
		success: "!text-green-600 !bg-green-200",
		warning: "!text-amber-600 !bg-amber-200",
		danger: "!text-red-600 !bg-red-200",
	},
};

const Pagination = ({
	currentPage,
	onPageChange,
	length,
	itemsPerPage,
	isRounded,
	color = "default",
}: PaginationProps) => {
	const handlePageChange = (page: number) => {
		onPageChange(page);
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1);
		}
	};

	const handleFirstPage = () => {
		handlePageChange(1);
	};

	const handleLastPage = () => {
		handlePageChange(totalPages);
	};

	const totalPages = Math.ceil(length / itemsPerPage);
	const fixedArray = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="flex items-center justify-center gap-1">
			<Button isIconOnly variant="light" onClick={handleFirstPage}>
				<FaAnglesLeft />
			</Button>

			<Button isIconOnly variant="light" onClick={handlePrevPage}>
				<FaAngleLeft />
			</Button>

			{fixedArray.slice(currentPage - 1, currentPage + 4).map((page) => {
				const isActive = page === currentPage;

				return (
					<motion.button
						key={page}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95, opacity: 0.7 }}
						className={clsx(
							"block shrink-0 dark:text-white py-2 px-4 transition-colors rounded-md",
							isRounded && "!rounded-full",
							isActive && variants.colors[color],
						)}
						onClick={() => handlePageChange(page)}
					>
						{page}
					</motion.button>
				);
			})}

			<Button isIconOnly variant="light" onClick={handleNextPage}>
				<FaAngleRight />
			</Button>

			<Button isIconOnly variant="light" onClick={handleLastPage}>
				<FaAnglesRight />
			</Button>
		</div>
	);
};

export default memo(Pagination);
