import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoins } from "@fortawesome/free-solid-svg-icons"

interface Props {
	totalCost: number
}

const TotalCostCard: React.FC<Props> = ({ totalCost }) => {
	const [isExpanded, setIsExpanded] = useState(true)

	const toggleExpanded = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div style={{ flexShrink: 0 }}>
			<style>
				{`
          .total-cost-card-item {
            background-color: color-mix(in srgb, var(--vscode-toolbar-hoverBackground) 65%, transparent);
            border-radius: 4px;
            position: relative;
            overflow: hidden;
            opacity: 0.8;
            cursor: pointer;
            margin-bottom: 12px;
          }
          .total-cost-card-item:hover {
            background-color: color-mix(in srgb, var(--vscode-toolbar-hoverBackground) 100%, transparent);
            opacity: 1;
            pointer-events: auto;
          }
          .total-cost-header {
            cursor: pointer;
            user-select: none;
          }
          .total-cost-header:hover {
            opacity: 0.8;
          }
        `}
			</style>

			<div
				className="total-cost-header"
				onClick={toggleExpanded}
				style={{
					color: "var(--vscode-descriptionForeground)",
					margin: "10px 20px 10px 20px",
					display: "flex",
					alignItems: "center",
				}}>
				<span
					className={`codicon codicon-chevron-${isExpanded ? "down" : "right"}`}
					style={{
						marginRight: "4px",
						transform: "scale(0.9)",
					}}></span>
				<FontAwesomeIcon
					icon={faCoins}
					style={{
						marginRight: "4px",
						transform: "scale(0.9)",
					}}
				/>
				<span
					style={{
						fontWeight: 500,
						fontSize: "0.85em",
						textTransform: "uppercase",
					}}>
					Total Cost
				</span>
			</div>

			{isExpanded && (
				<div style={{ padding: "0px 20px 0 20px" }}>
					<div className="total-cost-card-item">
						<div style={{ padding: "12px" }}>
							<p
								style={{
									fontSize: "var(--vscode-font-size)",
									color: "var(--vscode-descriptionForeground)",
									whiteSpace: "pre-wrap",
									wordBreak: "break-word",
									overflowWrap: "anywhere",
								}}>
								${totalCost.toFixed(2)}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default TotalCostCard
