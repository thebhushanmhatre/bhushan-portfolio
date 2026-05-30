import React, { useState, useEffect, useRef } from "react";
import { Container } from "reactstrap";
import ProjectBreadCrumb from "../../common/ProjectBreadcrumb";
import "./PomodoroClock.css";

const PomodoroClock = () => {
	const [breakLen, setBreakLen] = useState(5); // in minutes
	const [sessionLen, setSessionLen] = useState(25); // in minutes
	const [timeLeft, setTimeLeft] = useState(25 * 60); // in seconds
	const [timerStatus, setTimerStatus] = useState("Session");
	const [isRunning, setIsRunning] = useState(false);

	const beepRef = useRef(null);

	useEffect(() => {
		let interval = null;
		if (isRunning) {
			interval = setInterval(() => {
				setTimeLeft((prevTimeLeft) => {
					if (prevTimeLeft > 0) {
						return prevTimeLeft - 1;
					}

					if (beepRef.current) {
						beepRef.current.play();
					}

					if (timerStatus === "Session") {
						setTimerStatus("Break");
						return breakLen * 60;
					}

					setTimerStatus("Session");
					return sessionLen * 60;
				});
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isRunning, timerStatus, breakLen, sessionLen]);

	const formatTime = (seconds) => {
		const min = Math.floor(Math.max(0, seconds) / 60);
		const sec = Math.max(0, seconds) % 60;
		return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
	};

	const handleStartStop = () => {
		setIsRunning(!isRunning);
	};

	const handleReset = () => {
		setIsRunning(false);
		setBreakLen(5);
		setSessionLen(25);
		setTimeLeft(25 * 60);
		setTimerStatus("Session");
		if (beepRef.current) {
			beepRef.current.pause();
			beepRef.current.currentTime = 0;
		}
	};

	const adjustLength = (type, amount) => {
		if (isRunning) return;

		if (type === "break") {
			const next = breakLen + amount;
			if (next > 0 && next <= 60) {
				setBreakLen(next);
				if (timerStatus === "Break") {
					setTimeLeft(next * 60);
				}
			}
		} else {
			const next = sessionLen + amount;
			if (next > 0 && next <= 60) {
				setSessionLen(next);
				if (timerStatus === "Session") {
					setTimeLeft(next * 60);
				}
			}
		}
	};

	return (
		<Container className="text-center mt-2">
			<ProjectBreadCrumb projectName={"Pomodoro Clock"} />

			<div className="pomodoro-container">
				<h2 className="pomodoro-title text-center">Pomodoro Clock</h2>

				<audio
					id="beep"
					ref={beepRef}
					src="https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg"
					type="audio/ogg"
				></audio>

				<div className={`timer-card ${timerStatus.toLowerCase()} ${isRunning ? "running" : ""}`}>
					<div id="timer-label" className="timer-label">
						{timerStatus}
					</div>
					<div id="time-left" className="time-left">
						{formatTime(timeLeft)}
					</div>
				</div>

				<div className="controls-row">
					<div className="settings-box">
						<div id="break-label" className="settings-label">
							Break Length
						</div>
						<div className="d-flex align-items-center justify-content-center">
							<button
								id="break-decrement"
								className="settings-btn"
								onClick={() => adjustLength("break", -1)}
							>
								<i className="fa fa-minus"></i>
							</button>
							<span id="break-length" className="settings-value">
								{breakLen}
							</span>
							<button
								id="break-increment"
								className="settings-btn"
								onClick={() => adjustLength("break", 1)}
							>
								<i className="fa fa-plus"></i>
							</button>
						</div>
					</div>

					<div className="settings-box">
						<div id="session-label" className="settings-label">
							Session Length
						</div>
						<div className="d-flex align-items-center justify-content-center">
							<button
								id="session-decrement"
								className="settings-btn"
								onClick={() => adjustLength("session", -1)}
							>
								<i className="fa fa-minus"></i>
							</button>
							<span id="session-length" className="settings-value">
								{sessionLen}
							</span>
							<button
								id="session-increment"
								className="settings-btn"
								onClick={() => adjustLength("session", 1)}
							>
								<i className="fa fa-plus"></i>
							</button>
						</div>
					</div>
				</div>

				<div className="action-btns">
					<button id="start_stop" className="btn-main btn-start" onClick={handleStartStop}>
						<i className={`fa fa-${isRunning ? "pause" : "play"}`}></i>
						{isRunning ? "Pause" : "Start"}
					</button>
					<button id="reset" className="btn-main btn-reset" onClick={handleReset}>
						<i className="fa fa-refresh"></i>
						Reset
					</button>
				</div>
			</div>
		</Container>
	);
};

export { PomodoroClock };
