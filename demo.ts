#!/usr/bin/env tsm

import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  // apiKey defaults to process.env["ANTHROPIC_API_KEY"]
  // apiKey: 'my_api_key',
});

const msg = await anthropic.messages.create({
  model: "claude-3-7-sonnet-20250219",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Hello, Claude" }],
});
console.log(msg);