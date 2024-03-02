<template>
  <div :class="['card', `card--${shape}`]">
    <div class="card__orb">
      <img :src="orbs[color]" class="card__orb__image" />
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/49240/hand-8.png"
        alt=""
        class="card__orb__value"
      />
    </div>
    <div class="card__banner">
      <img :src="banners[accent]" alt="" class="card__banner" />
      <div class="card__banner__text">Neutral Monster</div>
    </div>
    <div class="card__image">
      <img :src="frames[`${shape}-${accent}`]" alt="" class="card__image__border" />
      <svg
        class="card__image__svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 260 222.2"
        style="enable-background: new 0 0 260 222.2"
        xml:space="preserve"
      >
        <clipPath :id="`mask-${shape}`" v-html="paths[shape]"></clipPath>
        <image
          :clip-path="`url(#mask-${shape})`"
          height="100%"
          width="100%"
          :y="shape === 'round' ? 20 : 0"
          xlink:href="https://i.redd.it/2s0y7grd1ro21.jpg"
        ></image>
        <image
          v-if="shiny"
          :clip-path="`url(#mask-${shape})`"
          width="100%"
          xlink:href="@/assets/images/hand-sparkles.gif"
          class="card__image__sparkles"
        />
      </svg>
    </div>
    <div class="card__description">
      <div class="card__description__text">
        Uma breve descrição sobre a carta com opção para <strong> destaques.</strong>
      </div>
    </div>
    <!-- <div class="card__orb2">
      <img :src="orbs['blood']" class="card__orb2__image" />
      <div class="card__orb2__value">8</div>
    </div> -->
    <img :src="backs[`${color}__${shape}`]" alt="" class="card__background" />
  </div>
</template>

<script setup lang="ts">
type Shapes = 'round' | 'square' | 'pointy'
type Colors = 'green' | 'red' | 'black'
type Accent = 'gold' | 'blue' | 'black'

interface GameCard {
  shape: Shapes
  color: Colors
  accent: Accent
  shiny: boolean
}

defineProps<GameCard>()

const paths: Record<string, string> = {
  round: '<ellipse cx="130" cy="111.1" rx="130" ry="111.1"/>',
  square: '<polygon points="0,0 0,158.7 15.3,172.7 239.3,172.7 251.7,160.3 251.7,0 "/>',
  pointy: '<polygon points="0,0 0,141.3 105.3,177.3 149.3,177.3 250.7,142 250.7,0 "/>'
}

const orbs: Record<string, string> = {
  black: new URL('@/assets/images/hand-orb-black.png', import.meta.url).href,
  blood: new URL('@/assets/images/hand-orb-blood.png', import.meta.url).href,
  green: new URL('@/assets/images/hand-orb-green.png', import.meta.url).href,
  red: new URL('@/assets/images/hand-orb-red.png', import.meta.url).href
}

const banners: Record<string, string> = {
  black: new URL('@/assets/images/hand-banner-black.png', import.meta.url).href,
  blue: new URL('@/assets/images/hand-banner-blue.png', import.meta.url).href,
  gold: new URL('@/assets/images/hand-banner-gold.png', import.meta.url).href
}

const frames: Record<string, string> = {
  'pointy-black': new URL('@/assets/images/hand-frame-pointy-black.png', import.meta.url).href,
  'pointy-blue': new URL('@/assets/images/hand-frame-pointy-blue.png', import.meta.url).href,
  'pointy-gold': new URL('@/assets/images/hand-frame-pointy-gold.png', import.meta.url).href,

  'round-black': new URL('@/assets/images/hand-frame-round-black.png', import.meta.url).href,
  'round-blue': new URL('@/assets/images/hand-frame-round-blue.png', import.meta.url).href,
  'round-gold': new URL('@/assets/images/hand-frame-round-gold.png', import.meta.url).href,

  'square-black': new URL('@/assets/images/hand-frame-square-black.png', import.meta.url).href,
  'square-blue': new URL('@/assets/images/hand-frame-square-blue.png', import.meta.url).href,
  'square-gold': new URL('@/assets/images/hand-frame-square-gold.png', import.meta.url).href
}

const backs: Record<string, string> = {
  black__square: new URL('@/assets/images/hand-card-back-black__square.png', import.meta.url).href,
  black__round: new URL('@/assets/images/hand-card-back-black__round.png', import.meta.url).href,
  black__pointy: new URL('@/assets/images/hand-card-back-black__pointy.png', import.meta.url).href,

  green__square: new URL('@/assets/images/hand-card-back-green__square.png', import.meta.url).href,
  green__round: new URL('@/assets/images/hand-card-back-green__round.png', import.meta.url).href,
  green__pointy: new URL('@/assets/images/hand-card-back-green__pointy.png', import.meta.url).href,

  red__square: new URL('@/assets/images/hand-card-back-red__square.png', import.meta.url).href,
  red__round: new URL('@/assets/images/hand-card-back-red__round.png', import.meta.url).href,
  red__pointy: new URL('@/assets/images/hand-card-back-red__pointy.png', import.meta.url).href
}
</script>

<style lang="scss">
.card {
  width: 180px;
  height: 230px;
  margin: 20px;
  position: relative;
  transition: transform 0.3s;
}

@media (max-width: 779px) {
  .card {
    margin: 10px;
  }
}

.card:hover {
  transform: scale(1.2);
  transition: transform 0.15s;
  cursor: pointer;
}

.card__background {
  width: 100%;
}

.card__banner {
  width: 100%;
  position: absolute;
  top: 2.5%;
  left: 50%;
  transform: translateX(-51.5%);
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/49240/hand-banner-gold.png') 0 0
    no-repeat;
  background-size: 100% auto;
  z-index: 20;
}

.card__banner__text {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-51%, 15%);
  z-index: 30;
  text-align: center;
  font-size: 0.8em;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}

.card__image {
  background: red;
  width: 82%;
  position: absolute;
  left: 47%;
  transform: translateX(-50%);
  z-index: 10;
}

.card--square .card__image {
  top: 13%;
}
.card--round .card__image {
  top: 2%;
}
.card--pointy .card__image {
  top: 13.5%;
  width: 79%;
  left: 46.5%;
}

.card__image__border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
}

.card__image__svg {
  width: calc(100% - 2px);
  position: absolute;
  top: -10px;
  left: 2px;
  z-index: 10;
}

.card--square .card__image__svg {
  top: -5px;
}
.card--round .card__image__svg {
  top: -0px;
}
.card--pointy .card__image__svg {
  top: -4px;
}

.card__image__sparkles {
  mix-blend-mode: color-dodge;
}

.card__description {
  width: 80%;
  height: 37%;
  position: absolute;
  bottom: 11%;
  left: 50%;
  transform: translateX(-53%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 7px;
  color: #eae3d1;
  font-size: 0.7em;
  line-height: 1.2;
  text-align: center;
  font-weight: 400;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.card__description strong {
  color: #efc851;
  font-weight: 400;
}

.card__orb {
  width: 23%;
  position: absolute;
  top: -4%;
  left: -6%;
  z-index: 50;
}

.card__orb__image {
  width: 100%;
}

.card__orb__value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -3px;
  margin-left: -1px;
  width: 40%;
  opacity: 0.9;
}

.card__orb2 {
  width: 23%;
  position: absolute;
  bottom: -1%;
  right: -1%;
  z-index: 50;
}

.card__orb2__image {
  width: 100%;
}

.card__orb2__value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: -3px;
  margin-left: -1px;
  width: 40%;
  opacity: 1;
  font-size: 1.2em;
  display: flex;
  justify-content: center;

	color: white;
	-webkit-text-stroke: 1px #F8F8F8;
	text-shadow: 0px 1px 4px #23430C;
}
</style>
