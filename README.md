# Demo Anthropic Claude Sonnet SDK with TypeScript

Demonstration of Anthropic Claude Sonnet SDK with TypeScript.


## Create your Anthropic API key

Sign up for an Anthropic account at https://anthropic.com/

Create your Anthropic API key at https://console.anthropic.com/dashboard

Run:

```sh
export ANTHROPIC_API_KEY="your-api-key"
```


## Hello world

Run:

```sh
pnpm install --global tsm
pnpm install
./demo.ts
```

Output:

```json
{
  id: 'msg_01SkY9rzAgvM1NGjboUGTGqm',
  type: 'message',
  role: 'assistant',
  model: 'claude-3-7-sonnet-20250219',
  content: [
    {
      type: 'text',
      text: "Hello! How can I assist you today? I'm here to help with questions, provide information, or discuss topics you're interested in. What would you like to talk about?"
    }
  ],
  stop_reason: 'end_turn',
  stop_sequence: null,
  usage: {
    input_tokens: 10,
    cache_creation_input_tokens: 0,
    cache_read_input_tokens: 0,
    output_tokens: 39
  }
}
```


## Aider AI pair programming (optional)

Aider lets you pair program with LLMs, to edit code in your local git repository. 

Run:

```sh
python -m pip install aider-install
aider-install
aider --model sonnet --api-key anthropic=your-api-key
```


## How we created this project

Run:

```sh
pnpm self-update
pnpm init
pnpm install @anthropic-ai/sdk
curl -o .gitignore https://raw.githubusercontent.com/microsoft/TypeScript/refs/heads/main/.gitignore
```


## Tracking

* Package: demo-anthropic-claude-sonnet-sdk-with-typescript
* Version: 1.0.0
* Created: 2025-02-25T04:59:23Z
* Updated: 2025-02-25T04:59:23Z
* License: Any of BSD, GPL, LGPL, MIT
* Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
