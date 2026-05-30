import React, { useMemo, useState } from "react";
import { certificates } from "../shared/certificates";

const initialForm = {
	href: "",
	name: "",
	issuer: "",
	institute: "",
	credentialID: "",
	professor: "",
	tech: "",
	visible: true,
};

function AddCertificate() {
	const [form, setForm] = useState(initialForm);
	const [savedCertificate, setSavedCertificate] = useState(null);
	const [copyStatus, setCopyStatus] = useState("");

	const nextCertId = useMemo(() => {
		const maxId = certificates.reduce((max, cert) => Math.max(max, cert.certId || 0), 0);
		return maxId + 1;
	}, []);

	const handleChange = (event) => {
		const { name, type, value, checked } = event.target;
		setForm((current) => ({
			...current,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const buildCertificate = () => {
		const techArray = form.tech
			.split(",")
			.map((tag) => tag.trim())
			.filter(Boolean);

		const certificate = {
			certId: nextCertId,
			href: form.href.trim(),
			name: form.name.trim(),
			issuer: form.issuer.trim(),
			credentialID: form.credentialID.trim(),
			professor: form.professor.trim(),
			tech: techArray,
			visible: form.visible,
		};

		if (form.institute.trim()) {
			certificate.institute = form.institute.trim();
		}

		return certificate;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newCertificate = buildCertificate();
		setSavedCertificate(newCertificate);
	};

	const handleReset = () => {
		setForm(initialForm);
		setSavedCertificate(null);
		setCopyStatus("");
	};

	const handleCopy = async () => {
		if (!certificateText) {
			return;
		}

		try {
			await navigator.clipboard.writeText(certificateText);
			setCopyStatus("Copied to clipboard!");
			setTimeout(() => setCopyStatus(""), 2000);
		} catch (error) {
			setCopyStatus("Copy failed. Try again.");
			console.error("Copy failed:", error);
		}
	};

	const certificateText = savedCertificate
		? [
				"{",
				`  certId: ${savedCertificate.certId},`,
				`  href: "${savedCertificate.href}",`,
				`  name: "${savedCertificate.name}",`,
				`  issuer: "${savedCertificate.issuer}",`,
				...(savedCertificate.institute ? [`  institute: "${savedCertificate.institute}",`] : []),
				`  credentialID: "${savedCertificate.credentialID}",`,
				`  professor: "${savedCertificate.professor}",`,
				`  tech: [${savedCertificate.tech.map((tag) => `"${tag}"`).join(", ")}],`,
				`  visible: ${savedCertificate.visible},`,
				"},",
			].join("\n")
		: "";

	return (
		<section className="container mt-4">
			<h2>Add Certificate</h2>
			<p>Fill the fields below and generate a certificate object in the existing format.</p>

			<form onSubmit={handleSubmit} className="mb-4">
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Certificate Name
					</label>
					<input
						id="name"
						name="name"
						type="text"
						value={form.name}
						onChange={handleChange}
						className="form-control"
						placeholder="e.g. Front-End Web Development with React"
						required
					/>
				</div>

				<div className="mb-3 row">
					<div className="col-md-6 mb-3 mb-md-0">
						<label htmlFor="issuer" className="form-label">
							Issuer
						</label>
						<input
							id="issuer"
							name="issuer"
							type="text"
							value={form.issuer}
							onChange={handleChange}
							className="form-control"
							placeholder="LinkedIn, Coursera, freeCodeCamp"
							required
						/>
					</div>

					<div className="col-md-6">
						<label htmlFor="institute" className="form-label">
							Institute (optional)
						</label>
						<input
							id="institute"
							name="institute"
							type="text"
							value={form.institute}
							onChange={handleChange}
							className="form-control"
							placeholder="The Hong Kong University of Science and Technology"
						/>
					</div>
				</div>

				<div className="mb-3">
					<label htmlFor="href" className="form-label">
						Certificate Link
					</label>
					<input
						id="href"
						name="href"
						type="url"
						value={form.href}
						onChange={handleChange}
						className="form-control"
						placeholder="https://..."
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="credentialID" className="form-label">
						Credential ID
					</label>
					<input
						id="credentialID"
						name="credentialID"
						type="text"
						value={form.credentialID}
						onChange={handleChange}
						className="form-control"
						placeholder="Certificate credentialID"
					/>
				</div>

				<div className="mb-3 row">
					<div className="col-md-6 mb-3 mb-md-0">
						<label htmlFor="professor" className="form-label">
							Instructor / Professor
						</label>
						<input
							id="professor"
							name="professor"
							type="text"
							value={form.professor}
							onChange={handleChange}
							className="form-control"
							placeholder="e.g. Shaun Wassell"
						/>
					</div>

					<div className="col-md-6">
						<label htmlFor="tech" className="form-label">
							Tech tags (comma separated)
						</label>
						<input
							id="tech"
							name="tech"
							type="text"
							value={form.tech}
							onChange={handleChange}
							className="form-control"
							placeholder="React, JavaScript, CSS"
						/>
					</div>
				</div>

				<div className="mb-3">
					<div className="form-check mt-3">
						<input
							id="visible"
							name="visible"
							type="checkbox"
							checked={form.visible}
							onChange={handleChange}
							className="form-check-input"
						/>
						<label htmlFor="visible" className="form-check-label">
							Visible
						</label>
					</div>
				</div>

				<div className="d-flex gap-2">
					<button type="submit" className="btn btn-primary">
						Generate Object
					</button>
					<button type="button" className="btn btn-secondary" onClick={handleReset}>
						Reset
					</button>
				</div>
			</form>

			{savedCertificate && (
				<div className="card">
					<div className="card-body">
						<div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between mb-2 gap-2">
							<div>
								<h3 className="card-title mb-1">Generated Certificate Object</h3>
								<p className="small text-muted mb-0">
									Copy this object into <code>src/shared/certificates.js</code>.
								</p>
							</div>
							<div className="d-flex align-items-center gap-2">
								<button
									type="button"
									className="btn btn-sm btn-outline-secondary"
									onClick={handleCopy}
								>
									Copy object
								</button>
								{copyStatus && <span className="text-success small">{copyStatus}</span>}
							</div>
						</div>
						<pre className="bg-light p-3 rounded" style={{ overflowX: "auto" }}>
							{certificateText}
						</pre>
					</div>
				</div>
			)}
		</section>
	);
}

export default AddCertificate;
