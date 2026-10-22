
<svelte:head>
	<title>Research &amp; Development - LESBIANADE®</title>
	<meta
		name="description"
		content="Explore the classified research, proprietary formulation, and hydration science behind LESBIANADE®. Certain findings remain commercially inconvenient to disclose."
	/>
</svelte:head>

<script>
	const researchMetrics = [
		{ value: '67', label: 'ACTIVE INGREDIENTS', note: 'A deliberately distinctive formulation' },
		{ value: '59', label: 'YEARS OF RESEARCH', note: 'Since the brand was founded' },
		{ value: '0', label: 'PEER-REVIEWED PAPERS', note: 'Independent review not available' },
		{ value: '∞', label: 'PROPRIETARY FORMULATION', note: 'Internal estimate' }
	];

	const researchProgrammes = [
		{
			number: 'R&D-001',
			name: 'Hydration Optimisation',
			status: 'ONGOING',
			description:
				'Investigating the relationship between fluid intake, athletic output, and the number of reusable bottles a person can reasonably own.'
		},
		{
			number: 'R&D-014',
			name: 'Interpersonal Acceleration',
			status: 'RESTRICTED',
			description:
				'Studying the apparent correlation between shared outdoor equipment, mutual eye contact, and joint mortgage applications submitted within 42 days of meeting.'
		},
		{
			number: 'R&D-067',
			name: 'The Final Ingredient',
			status: 'EYES ONLY',
			description:
				'Research documentation exists. Research personnel deny the documentation exists. The documentation has been classified as a documentation-related security risk.'
		}
	];
</script>

<section class="science-header">
	<div class="science-hero-content">
		<p class="eyebrow">THE LESBIANADE® DIFFERENCE</p>

		<h1>WE DON'T<br />ASK <span>WHY.</span><br />WE ADD<br />INGREDIENTS.</h1>

		<div class="science-hero-footer">
			<p>
				Advancing the frontier of hydration through proprietary
				science, strategic ambiguity, and a research budget that
				has never been independently audited.
			</p>
		</div>
	</div>

	<div class="science-stamp" aria-hidden="true">
		<span>IN CONFIDENCE</span>
		<strong>67</strong>
		<span>INGREDIENTS DIVISION</span>
	</div>
</section>

<section class="science-metrics" aria-label="Research metrics">
	{#each researchMetrics as metric}
		<div class="science-metric">
			<p class="metric-value">{metric.value}</p>
			<p class="metric-label">{metric.label}</p>
			<p class="metric-note">{metric.note}</p>
		</div>
	{/each}
</section>

<section class="science-content">
	<div class="science-number-column">
		<p class="science-number">67</p>
		<p class="science-label">ACTIVE INGREDIENTS</p>
		<div class="science-classification">
			<span>FORMULATION STATUS</span>
			<strong>PROPRIETARY</strong>
			<span>PUBLIC DISCLOSURE: DENIED</span>
		</div>
	</div>

	<div class="science-copy">
		<p class="eyebrow">01 / FORMULATION PHILOSOPHY</p>
		<h2>Because 66 wasn't enough.</h2>

		<p>
			Our proprietary formulation contains 67 active ingredients,
			developed in our secure underground research facility beneath
			the Greek island of Lesbos. The facility has 14 floors, 19
			security checkpoints, and an employee wellness programme
			that consists primarily of additional security checkpoints.
		</p>

		<p>
			Our scientists have spent decades investigating the
			intersection of hydration, athletic performance, and the
			mysterious forces that compel two women to buy a house
			together after knowing each other for six weeks.
		</p>

		<p>
			Our preliminary findings indicate that hydration is important.
			Our subsequent findings indicate that further research is
			required. Our final findings have been escalated to senior
			management and have not been seen since.
		</p>

		<p>
			Our formulation is reviewed regularly as part of our ongoing product development process.
		</p>

		<div class="science-callout">
			<span class="callout-mark">!</span>
			<p>
				<strong>IMPORTANT SCIENTIFIC DISCLAIMER</strong>
				Our proprietary terminology should not be interpreted as
				evidence of independently verified performance benefits.
				LESBIANADE® takes its science seriously. The science has
				not yet responded to our correspondence.
			</p>
		</div>
	</div>
</section>

<section class="research-programmes">
	<div class="programmes-heading">
		<div>
			<p class="eyebrow">02 / ACTIVE RESEARCH PORTFOLIO</p>
			<h2>SCIENCE IN<br />THE PIPELINE.</h2>
		</div>
		<p>
			Three strategic research priorities. One underground facility.
			No further questions at this time.
		</p>
	</div>

	<div class="programme-list">
		{#each researchProgrammes as programme}
			<article class="programme-card">
				<div class="programme-number">{programme.number}</div>
				<div class="programme-details">
					<h3>{programme.name}</h3>
					<p>{programme.description}</p>
				</div>
				<div class="programme-status">
					<span class="status-indicator"></span>
					{programme.status}
				</div>
			</article>
		{/each}
	</div>

	<p class="programme-footnote">
		RESEARCH STATUS IS SELF-REPORTED AND HAS NOT BEEN INDEPENDENTLY VERIFIED.
	</p>
</section>

<section class="classified">
	<div class="classified-topline">
		<span>CLASSIFIED RESEARCH DIVISION</span>
		<span>UNAUTHORISED ACCESS WILL BE NOTED</span>
	</div>

	<p class="eyebrow">03 / FORMULATION SECURITY</p>
	<h2>THE 67TH<br />INGREDIENT.</h2>

	<div class="redacted-document" aria-label="Redacted research document">
		<div class="document-heading">
			<span>FORMULATION ADDENDUM 067-B</span>
			<span>SECURITY LEVEL: FLANNEL</span>
		</div>

		<p>
			Our research team has determined
			that ingredient number 67 is
			<span class="redacted">████████████████████</span>
			and may be activated only under
			<span class="redacted">████████████████</span>
			conditions.
		</p>

		<p>
			Any attempt to independently identify, replicate, or
			understand the formulation will be referred to
			<span class="redacted">████████████████████████</span>.
		</p>

		<div class="document-footer">
			<span>DOCUMENTS RELEASED: 0</span>
			<span>DOCUMENTS REQUESTED: 4,821</span>
		</div>
	</div>

	<p class="classified-message">
		You do not have sufficient clearance to view this information.
		Your curiosity has been logged as a potential commercial risk.
	</p>

	<span class="security-badge">SECURITY LEVEL: FLANNEL</span>
</section>

<section class="science-closing">
	<p class="eyebrow">LESBIANADE® / COMMITMENT TO INNOVATION</p>
	<h2>THE FUTURE IS<br /><span>PROPRIETARY.</span></h2>
	<p>
		We remain committed to pushing boundaries, challenging paradigms,
		and introducing additional terminology to the hydration sector
		without compromising our competitive advantage.
	</p>
	<span class="closing-signoff">END OF BRIEFING · NO FURTHER DISCLOSURE AUTHORISED</span>
</section>

<style>
.science-header {
	position: relative;
	overflow: hidden;
	padding: 1.2rem 8vw 7vw;
	background: var(--orange);
}

.science-hero-content {
	position: relative;
	z-index: 1;
	padding-top: 6vw;
	max-width: 1100px;
}

.science-header .eyebrow {
	font-size: 0.7rem;
	font-weight: 900;
	letter-spacing: 0.13em;
}

.science-header h1 {
	margin: 2rem 0 3rem;
	font-size: clamp(4.5rem, 11.5vw, 11rem);
	line-height: 0.79;
	font-weight: 950;
	letter-spacing: -0.09em;
	text-transform: uppercase;
}

.science-header h1 span {
	color: var(--white);
}

.science-hero-footer {
	max-width: 800px;
	align-items: flex-end;
	margin-top: 4rem;
	padding-top: 1.5rem;
	border-top: 1px solid rgb(0 0 0 / 25%);
}

.science-hero-footer p {
	max-width: 480px;
	margin: 0;
	font-family: inherit;
	font-size: 0.95rem;
	font-weight: 500;
	line-height: 1.7;
	letter-spacing: 0;
}

.science-stamp {
	position: absolute;
	right: 8vw;
	top: 24%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: clamp(110px, 15vw, 190px);
	aspect-ratio: 1;
	border: 2px solid rgb(255 255 255 / 65%);
	border-radius: 50%;
	color: var(--white);
	text-align: center;
	transform: rotate(12deg);
	opacity: 0.9;
}

.science-stamp strong {
	font-size: clamp(3rem, 7vw, 6rem);
	line-height: 1;
	letter-spacing: -0.08em;
}

.science-stamp span {
	font-family: monospace;
	font-size: clamp(0.45rem, 0.7vw, 0.65rem);
	font-weight: 900;
	letter-spacing: 0.08em;
}

.science-metrics {
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	background: var(--dark);
	color: var(--white);
}

.science-metric {
	padding: 2rem 1.5rem;
	border-right: 1px solid rgb(255 255 255 / 15%);
}

.science-metric:last-child {
	border-right: 0;
}

.metric-value {
	margin: 0 0 0.5rem;
	color: var(--pink);
	font-size: clamp(2.5rem, 5vw, 4.5rem);
	font-weight: 950;
	line-height: 1;
	letter-spacing: -0.08em;
}

.metric-label {
	margin: 0;
	font-size: 0.7rem;
	font-weight: 900;
	letter-spacing: 0.08em;
}

.metric-note {
	margin: 0.65rem 0 0;
	color: rgb(255 255 255 / 55%);
	font-size: 0.75rem;
	line-height: 1.5;
}

.science-content {
	display: grid;
	grid-template-columns: 0.8fr 1.2fr;
	gap: 8vw;
	padding: 9vw 8vw;
	background: var(--cream);
}

.science-number-column {
	min-width: 0;
}

.science-number {
	margin: 0;
	color: var(--hot-pink);
	font-size: clamp(8rem, 16vw, 16rem);
	font-weight: 950;
	line-height: 0.75;
	letter-spacing: -0.12em;
}

.science-label {
	margin-top: 2rem;
	font-size: 0.8rem;
	font-weight: 950;
	letter-spacing: 0.15em;
}

.science-classification {
	display: flex;
	flex-direction: column;
	gap: 0.65rem;
	max-width: 300px;
	margin-top: 3rem;
	padding: 1.25rem;
	border: 1px solid var(--dark);
	font-family: monospace;
	font-size: 0.65rem;
	letter-spacing: 0.05em;
}

.science-classification strong {
	font-size: 1.2rem;
	letter-spacing: 0.04em;
}

.science-classification span:last-child {
	color: var(--hot-pink);
	font-weight: 900;
}

.science-copy {
	max-width: 720px;
}

.science-copy > .eyebrow,
.programmes-heading .eyebrow,
.science-closing .eyebrow {
	font-family: monospace;
	font-size: 0.7rem;
	font-weight: 900;
	letter-spacing: 0.12em;
}

.science-copy h2 {
	margin: 1.5rem 0 2.5rem;
	font-size: clamp(2.8rem, 5vw, 5rem);
	line-height: 0.98;
	letter-spacing: -0.065em;
}

.science-copy p:not(.eyebrow) {
	margin-bottom: 1.7rem;
	font-size: 1.08rem;
	line-height: 1.8;
}

.science-callout {
	display: grid;
	grid-template-columns: 42px 1fr;
	gap: 1rem;
	margin-top: 3rem;
	padding: 1.5rem;
	border: 1px solid var(--hot-pink);
}

.callout-mark {
	display: grid;
	place-items: center;
	width: 38px;
	height: 38px;
	background: var(--hot-pink);
	color: var(--white);
	font-size: 1.5rem;
	font-weight: 900;
}

.science-callout p {
	margin: 0 !important;
	font-size: 0.9rem !important;
}

.science-callout strong {
	display: block;
	margin-bottom: 0.5rem;
	font-family: monospace;
	font-size: 0.7rem;
	letter-spacing: 0.05em;
}

.research-programmes {
	padding: 8vw;
	background: var(--white);
}

.programmes-heading {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 3rem;
	margin-bottom: 4rem;
}

.programmes-heading h2 {
	margin: 1rem 0 0;
	font-size: clamp(3rem, 7vw, 6.5rem);
	line-height: 0.85;
	letter-spacing: -0.08em;
}

.programmes-heading > p {
	max-width: 350px;
	font-size: 1rem;
	line-height: 1.7;
}

.programme-card {
	display: grid;
	grid-template-columns: 100px minmax(0, 1fr) 130px;
	gap: 2rem;
	align-items: start;
	padding: 2rem 0;
	border-top: 1px solid rgb(0 0 0 / 20%);
}

.programme-card:last-child {
	border-bottom: 1px solid rgb(0 0 0 / 20%);
}

.programme-number {
	font-family: monospace;
	font-size: 0.75rem;
	font-weight: 900;
	letter-spacing: 0.04em;
}

.programme-details h3 {
	margin: 0 0 0.7rem;
	font-size: clamp(1.4rem, 2.5vw, 2rem);
	letter-spacing: -0.04em;
}

.programme-details p {
	max-width: 650px;
	margin: 0;
	color: rgb(0 0 0 / 68%);
	font-size: 0.95rem;
	line-height: 1.7;
}

.programme-status {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	justify-content: flex-end;
	font-family: monospace;
	font-size: 0.62rem;
	font-weight: 900;
	letter-spacing: 0.04em;
	text-align: right;
}

.status-indicator {
	width: 8px;
	height: 8px;
	flex: 0 0 auto;
	border-radius: 50%;
	background: var(--hot-pink);
}

.programme-footnote {
	margin-top: 1.5rem;
	font-family: monospace;
	font-size: 0.62rem;
	line-height: 1.6;
	letter-spacing: 0.06em;
	opacity: 0.6;
}

.classified {
	padding: 1.2rem 8vw 8vw;
	background: var(--dark);
	color: var(--white);
	text-align: center;
}

.classified-topline {
	margin-bottom: 5rem;
	padding: 0.8rem 0;
	border-bottom: 1px solid rgb(255 255 255 / 20%);
	color: rgb(255 255 255 / 60%);
	text-align: left;
}

.classified .eyebrow {
	color: var(--pink);
	font-family: monospace;
	font-size: 0.7rem;
	font-weight: 900;
	letter-spacing: 0.13em;
}

.classified h2 {
	margin: 1.5rem 0 3rem;
	color: var(--pink);
	font-size: clamp(3.5rem, 9vw, 9rem);
	font-weight: 950;
	line-height: 0.83;
	letter-spacing: -0.08em;
}

.redacted-document {
	max-width: 750px;
	margin: 0 auto 3rem;
	padding: clamp(1.25rem, 4vw, 3rem);
	border: 1px solid rgb(255 255 255 / 25%);
	background: rgb(255 255 255 / 4%);
	color: rgb(255 255 255 / 75%);
	text-align: left;
}

.document-heading,
.document-footer {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1rem;
	font-family: monospace;
	font-size: 0.62rem;
	font-weight: 900;
	letter-spacing: 0.06em;
}

.document-heading {
	padding-bottom: 1rem;
	border-bottom: 1px solid rgb(255 255 255 / 20%);
}

.redacted-document p {
	margin: 1.5rem 0;
	font-family: monospace;
	font-size: 0.9rem;
	line-height: 2;
}

.redacted {
	display: inline;
	padding: 0.12rem 0.35rem;
	background: var(--pink);
	color: var(--pink);
	user-select: none;
}

.document-footer {
	padding-top: 1rem;
	border-top: 1px solid rgb(255 255 255 / 20%);
	color: var(--pink);
}

.classified-message {
	max-width: 600px;
	margin: 0 auto 2rem;
	font-size: 1.05rem;
	line-height: 1.7;
}

.security-badge {
	display: inline-block;
	padding: 0.8rem 1rem;
	border: 1px solid var(--pink);
	color: var(--pink);
	font-family: monospace;
	font-size: 0.65rem;
	font-weight: 900;
	letter-spacing: 0.14em;
}

.science-closing {
	padding: 9vw 8vw;
	background: var(--orange);
}

.science-closing h2 {
	margin: 2rem 0;
	font-size: clamp(3.5rem, 9vw, 8rem);
	line-height: 0.85;
	letter-spacing: -0.085em;
}

.science-closing h2 span {
	color: var(--white);
}

.science-closing > p:not(.eyebrow) {
	max-width: 650px;
	font-size: 1.05rem;
	line-height: 1.8;
}

.closing-signoff {
	display: inline-block;
	margin-top: 2rem;
	padding-top: 1rem;
	border-top: 1px solid rgb(0 0 0 / 25%);
	font-family: monospace;
	font-size: 0.65rem;
	font-weight: 900;
	letter-spacing: 0.08em;
}

@media (max-width: 1000px) {
	.science-stamp {
		right: 6vw;
		top: 15%;
		opacity: 0.35;
	}

	.science-content {
		grid-template-columns: 1fr;
		gap: 4rem;
	}

	.science-number {
		font-size: 28vw;
	}

	.science-classification {
		max-width: 420px;
	}

	.programmes-heading {
		align-items: flex-start;
		flex-direction: column;
		gap: 1rem;
	}

	.programme-card {
		grid-template-columns: 75px minmax(0, 1fr);
		gap: 1rem;
	}

	.programme-status {
		grid-column: 2;
		justify-content: flex-start;
	}
}

@media (max-width: 600px) {
	.science-header {
		padding: 1rem 7vw 15vw;
	}

	.science-header h1 {
		font-size: clamp(4rem, 15vw, 6rem);
	}

	.science-stamp {
		top: auto;
		right: 7vw;
		bottom: 15%;
		width: 95px;
	}

	.science-stamp strong {
		font-size: 3rem;
	}

	.science-stamp span {
		font-size: 0.4rem;
	}

	.science-hero-footer {
		align-items: flex-start;
		flex-direction: column;
		margin-top: 3rem;
	}

	.science-metrics {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.science-metric {
		padding: 1.5rem 1rem;
		border-bottom: 1px solid rgb(255 255 255 / 15%);
	}

	.science-metric:nth-child(2) {
		border-right: 0;
	}

	.science-metric:nth-child(3),
	.science-metric:nth-child(4) {
		border-bottom: 0;
	}

	.science-content,
	.research-programmes {
		padding: 18vw 7vw;
	}

	.science-number {
		font-size: 35vw;
	}

	.science-copy h2 {
		font-size: 3rem;
	}

	.science-copy p:not(.eyebrow) {
		font-size: 1rem;
	}

	.science-callout {
		grid-template-columns: 32px 1fr;
		padding: 1rem;
		gap: 0.75rem;
	}

	.callout-mark {
		width: 30px;
		height: 30px;
	}

	.programmes-heading h2 {
		font-size: 3.5rem;
	}

	.programme-card {
		grid-template-columns: 1fr;
		gap: 0.8rem;
		padding: 1.5rem 0;
	}

	.programme-status {
		grid-column: auto;
	}

	.classified {
		padding: 1rem 7vw 18vw;
	}

	.classified-topline {
		margin-bottom: 4rem;
		font-size: 0.55rem;
	}

	.classified h2 {
		font-size: 15vw;
	}

	.document-heading,
	.document-footer {
		flex-direction: column;
		gap: 0.5rem;
	}

	.redacted-document p {
		font-size: 0.8rem;
	}

	.science-closing {
		padding: 18vw 7vw;
	}
}

@media (prefers-reduced-motion: reduce) {
	.science-header *,
	.science-content *,
	.research-programmes *,
	.classified *,
	.science-closing * {
		scroll-behavior: auto !important;
	}
}

.science-header {
	position: relative;
	overflow: hidden;
	padding: 1.2rem 8vw 7vw;
	background: var(--orange);
}

.science-hero-content {
	position: relative;
	z-index: 1;
	padding-top: 6vw;
	max-width: 1100px;
}

.science-header .eyebrow {
	font-size: 0.7rem;
	font-weight: 900;
	letter-spacing: 0.13em;
}

.science-header h1 {
	margin: 2rem 0 3rem;
	font-size: clamp(4.5rem, 11.5vw, 11rem);
	line-height: 0.79;
	font-weight: 950;
	letter-spacing: -0.09em;
	text-transform: uppercase;
}

.science-header h1 span {
	color: var(--white);
}

.science-hero-footer {
	max-width: 800px;
	align-items: flex-end;
	margin-top: 4rem;
	padding-top: 1.5rem;
	border-top: 1px solid rgb(0 0 0 / 25%);
}

.science-hero-footer p {
	max-width: 480px;
	margin: 0;
	font-family: inherit;
	font-size: 0.95rem;
	font-weight: 500;
	line-height: 1.7;
	letter-spacing: 0;
}

.science-stamp {
	position: absolute;
	right: 8vw;
	top: 24%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: clamp(110px, 15vw, 190px);
	aspect-ratio: 1;
	border: 2px solid rgb(255 255 255 / 65%);
	border-radius: 50%;
	color: var(--white);
	text-align: center;
	transform: rotate(12deg);
	opacity: 0.9;
}

.science-stamp strong {
	font-size: clamp(3rem, 7vw, 6rem);
	line-height: 1;
	letter-spacing: -0.08em;
}

.science-stamp span {
	font-family: monospace;
	font-size: clamp(0.45rem, 0.7vw, 0.65rem);
	font-weight: 900;
	letter-spacing: 0.08em;
}

.science-metrics {
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	background: var(--dark);
	color: var(--white);
}

.science-metric {
	padding: 2rem 1.5rem;
	border-right: 1px solid rgb(255 255 255 / 15%);
}

.science-metric:last-child {
	border-right: 0;
}

.metric-value {
	margin: 0 0 0.5rem;
	color: var(--pink);
	font-size: clamp(2.5rem, 5vw, 4.5rem);
	font-weight: 950;
	line-height: 1;
	letter-spacing: -0.08em;
}

.metric-label {
	margin: 0;
	font-size: 0.7rem;
	font-weight: 900;
	letter-spacing: 0.08em;
}

.metric-note {
	margin: 0.65rem 0 0;
	color: rgb(255 255 255 / 55%);
	font-size: 0.75rem;
	line-height: 1.5;
}

.science-content {
	display: grid;
	grid-template-columns: 0.8fr 1.2fr;
	gap: 8vw;
	padding: 9vw 8vw;
	background: var(--cream);
}

.science-number-column {
	min-width: 0;
}

.science-number {
	margin: 0;
	color: var(--hot-pink);
	font-size: clamp(8rem, 16vw, 16rem);
	font-weight: 950;
	line-height: 0.75;
	letter-spacing: -0.12em;
}

.science-label {
	margin-top: 2rem;
	font-size: 0.8rem;
	font-weight: 950;
	letter-spacing: 0.15em;
}

.science-classification {
	display: flex;
	flex-direction: column;
	gap: 0.65rem;
	max-width: 300px;
	margin-top: 3rem;
	padding: 1.25rem;
	border: 1px solid var(--dark);
	font-family: monospace;
	font-size: 0.65rem;
	letter-spacing: 0.05em;
}

.science-classification strong {
	font-size: 1.2rem;
	letter-spacing: 0.04em;
}

.science-classification span:last-child {
	color: var(--hot-pink);
	font-weight: 900;
}

.science-copy {
	max-width: 720px;
}

.science-copy > .eyebrow,
.programmes-heading .eyebrow,
.science-closing .eyebrow {
	font-family: monospace;
	font-size: 0.7rem;
	font-weight: 900;
	letter-spacing: 0.12em;
}

.science-copy h2 {
	margin: 1.5rem 0 2.5rem;
	font-size: clamp(2.8rem, 5vw, 5rem);
	line-height: 0.98;
	letter-spacing: -0.065em;
}

.science-copy p:not(.eyebrow) {
	margin-bottom: 1.7rem;
	font-size: 1.08rem;
	line-height: 1.8;
}

.science-callout {
	display: grid;
	grid-template-columns: 42px 1fr;
	gap: 1rem;
	margin-top: 3rem;
	padding: 1.5rem;
	border: 1px solid var(--hot-pink);
}

.callout-mark {
	display: grid;
	place-items: center;
	width: 38px;
	height: 38px;
	background: var(--hot-pink);
	color: var(--white);
	font-size: 1.5rem;
	font-weight: 900;
}

.science-callout p {
	margin: 0 !important;
	font-size: 0.9rem !important;
}

.science-callout strong {
	display: block;
	margin-bottom: 0.5rem;
	font-family: monospace;
	font-size: 0.7rem;
	letter-spacing: 0.05em;
}

.research-programmes {
	padding: 8vw;
	background: var(--white);
}

.programmes-heading {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 3rem;
	margin-bottom: 4rem;
}

.programmes-heading h2 {
	margin: 1rem 0 0;
	font-size: clamp(3rem, 7vw, 6.5rem);
	line-height: 0.85;
	letter-spacing: -0.08em;
}

.programmes-heading > p {
	max-width: 350px;
	font-size: 1rem;
	line-height: 1.7;
}

.programme-card {
	display: grid;
	grid-template-columns: 100px minmax(0, 1fr) 130px;
	gap: 2rem;
	align-items: start;
	padding: 2rem 0;
	border-top: 1px solid rgb(0 0 0 / 20%);
}

.programme-card:last-child {
	border-bottom: 1px solid rgb(0 0 0 / 20%);
}

.programme-number {
	font-family: monospace;
	font-size: 0.75rem;
	font-weight: 900;
	letter-spacing: 0.04em;
}

.programme-details h3 {
	margin: 0 0 0.7rem;
	font-size: clamp(1.4rem, 2.5vw, 2rem);
	letter-spacing: -0.04em;
}

.programme-details p {
	max-width: 650px;
	margin: 0;
	color: rgb(0 0 0 / 68%);
	font-size: 0.95rem;
	line-height: 1.7;
}

.programme-status {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	justify-content: flex-end;
	font-family: monospace;
	font-size: 0.62rem;
	font-weight: 900;
	letter-spacing: 0.04em;
	text-align: right;
}

.status-indicator {
	width: 8px;
	height: 8px;
	flex: 0 0 auto;
	border-radius: 50%;
	background: var(--hot-pink);
}

.programme-footnote {
	margin-top: 1.5rem;
	font-family: monospace;
	font-size: 0.62rem;
	line-height: 1.6;
	letter-spacing: 0.06em;
	opacity: 0.6;
}

.classified {
	padding: 1.2rem 8vw 8vw;
	background: var(--dark);
	color: var(--white);
	text-align: center;
}

.classified-topline {
	margin-bottom: 5rem;
	padding: 0.8rem 0;
	border-bottom: 1px solid rgb(255 255 255 / 20%);
	color: rgb(255 255 255 / 60%);
	text-align: left;
}

.classified .eyebrow {
	color: var(--pink);
	font-family: monospace;
	font-size: 0.7rem;
	font-weight: 900;
	letter-spacing: 0.13em;
}

.classified h2 {
	margin: 1.5rem 0 3rem;
	color: var(--pink);
	font-size: clamp(3.5rem, 9vw, 9rem);
	font-weight: 950;
	line-height: 0.83;
	letter-spacing: -0.08em;
}

.redacted-document {
	max-width: 750px;
	margin: 0 auto 3rem;
	padding: clamp(1.25rem, 4vw, 3rem);
	border: 1px solid rgb(255 255 255 / 25%);
	background: rgb(255 255 255 / 4%);
	color: rgb(255 255 255 / 75%);
	text-align: left;
}

.document-heading,
.document-footer {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1rem;
	font-family: monospace;
	font-size: 0.62rem;
	font-weight: 900;
	letter-spacing: 0.06em;
}

.document-heading {
	padding-bottom: 1rem;
	border-bottom: 1px solid rgb(255 255 255 / 20%);
}

.redacted-document p {
	margin: 1.5rem 0;
	font-family: monospace;
	font-size: 0.9rem;
	line-height: 2;
}

.redacted {
	display: inline;
	padding: 0.12rem 0.35rem;
	background: var(--pink);
	color: var(--pink);
	user-select: none;
}

.document-footer {
	padding-top: 1rem;
	border-top: 1px solid rgb(255 255 255 / 20%);
	color: var(--pink);
}

.classified-message {
	max-width: 600px;
	margin: 0 auto 2rem;
	font-size: 1.05rem;
	line-height: 1.7;
}

.security-badge {
	display: inline-block;
	padding: 0.8rem 1rem;
	border: 1px solid var(--pink);
	color: var(--pink);
	font-family: monospace;
	font-size: 0.65rem;
	font-weight: 900;
	letter-spacing: 0.14em;
}

.science-closing {
	padding: 9vw 8vw;
	background: var(--orange);
}

.science-closing h2 {
	margin: 2rem 0;
	font-size: clamp(3.5rem, 9vw, 8rem);
	line-height: 0.85;
	letter-spacing: -0.085em;
}

.science-closing h2 span {
	color: var(--white);
}

.science-closing > p:not(.eyebrow) {
	max-width: 650px;
	font-size: 1.05rem;
	line-height: 1.8;
}

.closing-signoff {
	display: inline-block;
	margin-top: 2rem;
	padding-top: 1rem;
	border-top: 1px solid rgb(0 0 0 / 25%);
	font-family: monospace;
	font-size: 0.65rem;
	font-weight: 900;
	letter-spacing: 0.08em;
}

@media (max-width: 1000px) {
	.science-stamp {
		right: 6vw;
		top: 15%;
		opacity: 0.35;
	}

	.science-content {
		grid-template-columns: 1fr;
		gap: 4rem;
	}

	.science-number {
		font-size: 28vw;
	}

	.science-classification {
		max-width: 420px;
	}

	.programmes-heading {
		align-items: flex-start;
		flex-direction: column;
		gap: 1rem;
	}

	.programme-card {
		grid-template-columns: 75px minmax(0, 1fr);
		gap: 1rem;
	}

	.programme-status {
		grid-column: 2;
		justify-content: flex-start;
	}
}

@media (max-width: 600px) {
	.science-header {
		padding: 1rem 7vw 15vw;
	}


	.science-header h1 {
		font-size: clamp(4rem, 15vw, 6rem);
	}

	.science-stamp {
		top: auto;
		right: 7vw;
		bottom: 15%;
		width: 95px;
	}

	.science-stamp strong {
		font-size: 3rem;
	}

	.science-stamp span {
		font-size: 0.4rem;
	}

	.science-hero-footer {
		align-items: flex-start;
		flex-direction: column;
		margin-top: 3rem;
	}

	.science-metrics {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.science-metric {
		padding: 1.5rem 1rem;
		border-bottom: 1px solid rgb(255 255 255 / 15%);
	}

	.science-metric:nth-child(2) {
		border-right: 0;
	}

	.science-metric:nth-child(3),
	.science-metric:nth-child(4) {
		border-bottom: 0;
	}

	.science-content,
	.research-programmes {
		padding: 18vw 7vw;
	}

	.science-number {
		font-size: 35vw;
	}

	.science-copy h2 {
		font-size: 3rem;
	}

	.science-copy p:not(.eyebrow) {
		font-size: 1rem;
	}

	.science-callout {
		grid-template-columns: 32px 1fr;
		padding: 1rem;
		gap: 0.75rem;
	}

	.callout-mark {
		width: 30px;
		height: 30px;
	}

	.programmes-heading h2 {
		font-size: 3.5rem;
	}

	.programme-card {
		grid-template-columns: 1fr;
		gap: 0.8rem;
		padding: 1.5rem 0;
	}

	.programme-status {
		grid-column: auto;
	}

	.classified {
		padding: 1rem 7vw 18vw;
	}

	.classified-topline {
		margin-bottom: 4rem;
		font-size: 0.55rem;
	}

	.classified h2 {
		font-size: 15vw;
	}

	.document-heading,
	.document-footer {
		flex-direction: column;
		gap: 0.5rem;
	}

	.redacted-document p {
		font-size: 0.8rem;
	}

	.science-closing {
		padding: 18vw 7vw;
	}
}

@media (prefers-reduced-motion: reduce) {
	.science-header *,
	.science-content *,
	.research-programmes *,
	.classified *,
	.science-closing * {
		scroll-behavior: auto !important;
	}
}
</style>
