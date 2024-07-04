<svelte:head>
	<title>Products</title>
	<meta name="description" content="Products page" />
</svelte:head>


<script>
  // export let data../products/$types.js;
  // let { categoryId, products } = data;

</script>
<style>
  * {
    box-sizing: border-box;
  }


  .product-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 120px 4%;
  }

  .product-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
    justify-items: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: relative;
    padding: 24px;
    background: #fff;
    border-radius: 0;
    width: 100%;
    max-width: 420px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .card-pill {
    position: absolute;
    padding: 6px 12px;
    border-radius: 0;
    color: #fff;
    background: #000;
    right: 0;
    top: 0;
    margin-right: 32px;
    margin-top: 32px;
    line-height: 1;
    font-size: 14px;
    font-weight: 700;
  }

  .card-img {
    display: block;
    width: 100%;
    max-height: 320px;
    object-fit: cover;
    margin-bottom: 16px;
  }

  .product-brand {
    font-size: 12px;
    line-height: 1;
    margin-top: 12px;
    margin-bottom: 0;
    color: #646464;
  }

  .product-cat {
    font-size: 12px;
    line-height: 1;
    margin-top: 12px;
    margin-bottom: 0;
    color: #646464;
    background: #f5f5f5;
    padding: 6px 12px;
    border-radius: 0;
  }

  .product-name {
    font-size: 1.7rem;
    line-height: 1;
    margin-bottom: 6px;
    margin-top: 0;
    color: #000;
  }

  .flex-row {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .w-full {
    width: 100%;
  }

  .mb-sm {
    margin-bottom: 8px;
  }

  .price {
    margin-right: 12px;
  }

  .strike {
    text-decoration: line-through;
    opacity: 0.4;
  }

  .btn-col {
    width: 100%;
    margin-top: 24px;
  }

  .icon-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #fff;
    background: #000;
    padding: 1.4em 0;
    border-radius: 0;
    transition: background 0.3s ease;
    text-decoration: none;
    line-height: 1;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .rubicons {
    width: 24px;
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  .icon-link:hover {
    background: #333;
  }

  .icon-link:hover > .rubicons {
    transform: translate(3px, -3px);
  }

  .hide {
    display: none;
  }

  @media screen and (min-width: 640px) {
    .product-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>

<main>
  <section class="product-section">
    <div class="product-grid">
        <!-- {#each products as product}
        <div class="card">
            <div class="card-pill">Sale </div>

            <img class="card-img" src="https://assets.diamondnexus.com/image/upload/f_auto,q_auto,w_1200,c_scale/media/catalog/product/d/i/diamond-diva-round-whiteview-1.jpg" alt="product-image">
            <div class="flex-row space-between w-full mb-sm">
              <p class="product-brand">SKU: {product.sku}</p>
              <p class="product-cat hide">{product.name}</p>
            </div>
            <h1 class="product-name">{product.name}</h1>
            <div class="flex-row">
              <p class="price strike">$<span>94.95</span></p>
              <p class="price">$<span>79.95</span></p>
            </div>
            <div class="btn-col">
              <a href="/" class="icon-link">
                Purchase
                <svg fill="none" class="rubicons arrow-right-up" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M17.9645 12.9645l.071-7h-7.071" stroke-linecap="round"></path>
                  <path d="M5.9645 17.9645l12-12" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
            
        {/each} -->
      
        <div class="card">
        <div class="card-pill hide">Sale</div>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="card-img" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c15bdccf-e742-4ad2-9110-e50940765f66/sb-charge-canvas-skate-shoe-80KN54.jpg" alt="product-image">
        <div class="flex-row space-between w-full mb-sm">
          <p class="product-brand">Nike SB</p>
          <p class="product-cat hide">Skateboarding</p>
        </div>
        <h1 class="product-name">Charge Canvas</h1>
        <div class="flex-row">
          <p class="price strike hide">$<span>94.95</span></p>
          <p class="price">$<span>65</span></p>
        </div>
        <div class="btn-col">
          <a href="/" class="icon-link">
            Purchase
            <svg fill="none" class="rubicons arrow-right-up" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M17.9645 12.9645l.071-7h-7.071" stroke-linecap="round"></path>
              <path d="M5.9645 17.9645l12-12" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </div>
      <!-- <div class="card">
        <div class="card-pill hide">Sale</div>
        <img class="card-img" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/8968297e-7aa4-447b-88e9-d79ba90b6fc3/sb-shane-skate-shoe-m56jq0.jpg" alt="product-image">
        <div class="flex-row space-between w-full mb-sm">
          <p class="product-brand">Nike SB</p>
          <p class="product-cat hide">Skateboarding</p>
        </div>
        <h1 class="product-name">Shane O'Neill</h1>
        <div class="flex-row">
          <p class="price strike hide">$<span>94.95</span></p>
          <p class="price">$<span>80</span></p>
        </div>
        <div class="btn-col">
          <a href="#" class="icon-link">
            Purchase
            <svg fill="none" class="rubicons arrow-right-up" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M17.9645 12.9645l.071-7h-7.071" stroke-linecap="round"></path>
              <path d="M5.9645 17.9645l12-12" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="card">
        <div class="card-pill hide">Sale</div>
        <img class="card-img" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3db0b166-c4c0-4321-9ef4-800314582af3/sb-blzr-court-skate-shoe-R6bVLk.jpg" alt="product-image">
        <div class="flex-row space-between w-full mb-sm">
          <p class="product-brand">Nike SB</p>
          <p class="product-cat hide">Skateboarding</p>
        </div>
        <h1 class="product-name">BLZR Court</h1>
        <div class="flex-row">
          <p class="price strike hide">$<span>94.95</span></p>
          <p class="price">$<span>65</span></p>
        </div>
        <div class="btn-col">
          <a href="#" class="icon-link">
            Purchase
            <svg fill="none" class="rubicons arrow-right-up" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M17.9645 12.9645l.071-7h-7.071" stroke-linecap="round"></path>
              <path d="M5.9645 17.9645l12-12" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </div> -->
    </div>
  </section>
</main>
