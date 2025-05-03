#!/usr/bin/env node
import { greeting } from "../src/cli.js";
import { initGame } from "../games/brain-even.js";
import { processGame } from "../src/index.js";

const name = greeting();

processGame(initGame(), name);
