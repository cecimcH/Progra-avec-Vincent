function setup() {
  
}

function draw() {
	createCanvas(windowWidth,windowHeight);	
}

function adjustHue(val) {
  if (val < 0) val += Math.ceil(-val / 360) * 360;

  return val % 360;
}

function createScientificPalettes(baseColor) {
  const targetHueSteps = {
    analogous: [0, 30, 60],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplementary: [0, 150, 210]
  };

  const palettes = {};

  for (const type of Object.keys(targetHueSteps)) {
    palettes[type] = targetHueSteps[type].map((step) => ({
      l: baseColor.l,
      c: baseColor.c,
      h: adjustHue(baseColor.h + step),
      mode: "lch"
    }));
  }

  return palettes;
}

const baseColor = {
  l: 50,
  c: 100,
  h: 0,
  mode: "lch"
};

const palettes = createScientificPalettes(baseColor);

import { formatHex } from "https://cdn.skypack.dev/culori@2.0.0";

const baseColor = {
  l: 50,
  c: 100,
  h: 0,
  mode: "lch"
};

const palettes = createScientificPalettes(baseColor);
const triadicHex = palettes.triadic.map((colorLCH) => formatHex(colorLCH));

//LCH stands for lightness (how dark/light a color is), chroma (how vivid/saturated a color is), and hue (whether a color is red, green, blue…) --> it's a way of representing color just like RGB