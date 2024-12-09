
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import './_progressBar.scss';

export default function ProgressBar({ label, rating, color, height = "10px", backgroundColor = "#e0e0e0", }) {

    return (
        <div className="progress-bar-container" style={{ marginBottom: "16px" }}>
            {label && (
                <span
                    className="progress-bar-label"
                >
                    {label}
                </span>
            )}
            <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={Math.min(Math.max(rating, 0), 100)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${label || "Progress"}: ${rating}%`}
                    style={{
                        flexGrow: 1,
                        height,
                        backgroundColor,
                        borderRadius: "4px",
                        overflow: "hidden",
                        position: "relative",
                        marginRight: "8px",
                    }}
                >
                    <div
                        className="progress-bar-filled"
                        style={{
                            height: "100%",
                            width: `${Math.min(Math.max(rating, 0), 100)}%`,
                            backgroundColor: color,
                            transition: "width 0.3s ease-in-out",
                        }}
                    ></div>
                </div>
                <div
                    className="progress-bar-rating"
                    style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        minWidth: "40px",
                        textAlign: "right",
                    }}
                >
                    {rating}%
                </div>
            </div>
        </div>
    )
}

ProgressBar.propTypes = {
    label: PropTypes.string,
    rating: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    height: PropTypes.string,
    backgroundColor: PropTypes.string,
};
