<svelte:head>
	<title>Categories</title>
	<meta name="description" content="Categories page" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import { fetchCategories } from '../../graphql/client'; // Adjust the path as necessary
	import dimondImage from '../../lib/images/testDimond.jpg'
	/**
     * @type {string | any[]}
     */
	let categories = [];

	onMount(async () => {
		document.title = 'Categories';

		try {
		categories = await  fetchCategories();
		console.log(categories,'categories')
		} catch (error) {
			console.error('Failed to load categories:', error);
		}

	});
	/**
     * @param {string} path
     */
	 function getLastPathSegment(path) {
		const segments = path.split('/');
		return segments.length > 0 ? segments[segments.length - 1] : '';
	}
</script>

<section class="cards-section">
	<h1>Categories</h1>
	{#if categories.length > 0}
	<ul class="cards">
		
		{#each categories as category}
				{#each category.children as subcategory}
		<li>
		<a href={`products/?category=${getLastPathSegment(subcategory.path)}`} class="card">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<!-- <img src={subcategory.image ? subcategory.image : 'https://via.placeholder.com/150'} class="card__image" alt={subcategory.name} /> -->
				<img src={dimondImage} class="card__image" alt={subcategory.name} />
				<div class="card__overlay">
					<div class="card__header">
						<svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
						<!-- <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="User Image" /> -->
						<div class="card__header-text">
							<h3 class="card__title">{subcategory.name}</h3>
							<!-- <span class="card__status">1 hour ago</span> -->
						</div>
					</div>
					<p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
				</div>
			</a>
		</li>
		{/each}
		{/each}
	</ul>
	{:else}
		<!-- <p>Loading categories...</p> -->
	{/if}
</section>

<style>
	:root {
  --surface-color: #fff;
  --curve: 40;
}
	:global(body) {
		margin: 0;
		font-family: Arial, sans-serif;
		background-color: #fef8f8;
	}

	.cards-section {
		padding: 45px 0vw 0rem;
	}

	h1 {
		text-align: center;
		margin-bottom: 2rem;
	}

	
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 100%;  
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
}

.card__image {      
  width: 100%;
  height: auto;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;      
  border-radius: calc(var(--curve) * 1px);    
  background-color: var(--surface-color);      
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 2em;
    border-radius: calc(var(--curve)* 1px) 0 0 0;
    background-color: var(--surface-color);
    transform: translateY(-100%);
    transition: .2s ease-in-out;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;      
  z-index: 1;
}

.card__arc path {
  fill: var(--surface-color);
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}       

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%;      
}

.card__title {
  font-size: 1em;
  margin: 0 0 .3em;
  color: #6A515E;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";  
  font-size: .8em; 
  color: #D7BDCA;  
}

.card__status {
  font-size: .8em;
  color: #D7BDCA;
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: #D7BDCA;
  font-family: "MockFlowFont";   
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}    
</style>
