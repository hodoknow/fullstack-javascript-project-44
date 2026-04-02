#!/usr/bin/env node
import { greeting } from '../src/cli.js'
import { initGame } from '../games/brain-gcd.js'
import { processGame } from '../src/index.js'

const name = greeting()

processGame(initGame(), name)
