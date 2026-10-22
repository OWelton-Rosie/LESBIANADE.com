
<svelte:head>
	<title>Research &amp; Development - LESBIANADE™</title>
	<meta
		name="description"
		content="Explore the classified research, proprietary formulation, and hydration science behind LESBIANADE™. Certain findings remain commercially inconvenient to disclose."
	/>
</svelte:head>

<script>
	const researchMetrics = [
		{ value: '67', label: 'ACTIVE INGREDIENTS', note: 'One more than necessary' },
		{ value: '59', label: 'YEARS OF RESEARCH', note: 'Since the original incident' },
		{ value: '0', label: 'PEER-REVIEWED PAPERS', note: 'Peer review remains pending' },
		{ value: '∞', label: 'PROPRIETARY SYNERGIES', note: 'Internal estimate' }
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
	<div class="science-topline">
		<span>LESBIANADE™ RESEARCH &amp; DEVELOPMENT</span>
		<span>EST. 1967 · LESBOS RESEARCH COMPLEX</span>
	</div>

	<div class="science-hero-content">
		<p class="eyebrow">THE LESBIANADE™ DIFFERENCE / TECHNICAL BRIEFING 067</p>

		<h1>WE DON'T<br />ASK <span>WHY.</span><br />WE ADD<br />INGREDIENTS.</h1>

		<div class="science-hero-footer">
			<p>
				Advancing the frontier of hydration through proprietary
				science, strategic ambiguity, and a research budget that
				has never been independently audited.
			</p>
			<span>DOCUMENT REF. LSN-RD-067-A</span>
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
			The formulation is reviewed quarterly by the Internal
			Committee for Ingredient Accountability, which meets
			irregularly and has never reached a unanimous conclusion.
		</p>

		<div class="science-callout">
			<span class="callout-mark">!</span>
			<p>
				<strong>IMPORTANT SCIENTIFIC DISCLAIMER</strong>
				Our proprietary terminology should not be interpreted as
				evidence of independently verified performance benefits.
				LESBIANADE™ takes its science seriously. The science has
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
			Following extensive research, the committee has determined
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
	<p class="eyebrow">LESBIANADE™ / COMMITMENT TO INNOVATION</p>
	<h2>THE FUTURE IS<br /><span>PROPRIETARY.</span></h2>
	<p>
		We remain committed to pushing boundaries, challenging paradigms,
		and introducing additional terminology to the hydration sector
		without compromising our competitive advantage.
	</p>
	<span class="closing-signoff">END OF BRIEFING · NO FURTHER DISCLOSURE AUTHORISED</span>
</section>
