<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	
	// import welcomeImage from '$lib/images/hp-hero-1920.jpg'; // Update the path as needed

	onMount(() => {
		document.title = 'Home';
		
	});


	function handleRedirect() {
		goto('/categories');
	}
</script>

<svelte:head>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="hero">
	<div class="content">
		<img src="https://assets.diamondnexus.com/images/w_1302,h_460/f_auto,q_auto/v1718748420/diamond_nexus/homepage/2024/june/18/home-page-text-desktop-1/home-page-text-desktop-1.png?_i=AA" alt="">
		<!-- <h1>Creators of the Nexus Diamond™</h1>
		<p>Up to 50% off sitewide</p> -->
		<button class="explore-button" on:click={handleRedirect}>Explore Collections</button>
	</div>
</section>

<style>
	:global(body) {
		margin: 0;
		font-family: Arial, sans-serif;
	}

	.hero {
		position: relative;
		background-image: url('https://assets.diamondnexus.com/images/w_2560,h_1009/f_auto,q_auto/v1718749356/diamond_nexus/homepage/2024/june/18/hp-hero-1920/hp-hero-1920.jpg?_i=AA');
		background-size: cover;
		background-position: center;
		height: 100vh;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		color: #fff;
		text-align: center;
		
	}

	.content {
		/* background: rgba(0, 0, 0, 0.5); */
		padding: 4rem;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
	}
	.content img{
		width: 500px;
	}

	/* h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.5rem;
		margin-bottom: 2rem;
	} */

	.explore-button {
		background-color: #ff6600;
		color: #fff;
		border: none;
		padding: 1rem 2rem;
		font-size: 1rem;
		cursor: pointer;
		border-radius: 5px;
		text-transform: uppercase;
	}

	.explore-button:hover {
		background-color: #e55d00;
	}
</style>
