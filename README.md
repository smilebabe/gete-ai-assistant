# GETE AI Assistant

A starter monorepo for the GETE AI Assistant platform.

## Overview

This repository lays the foundation for a sovereign, multilingual, multi-channel AI assistant for Ethiopia.

## Included

- Web frontend in `apps/web`
- REST API backend in `apps/assistant-api`
- Shared core logic in `packages/core`
- Skills registry in `packages/skills`
- Shared UI package in `packages/ui`
- Deployment scaffolding in `infra`
- Docs and roadmap in `docs`

## Quick start

```bash
npm install
npm run dev:web
npm run dev:api
```

## Architecture themes

- Chat + web assistant interface
- Multi-language support
- Skill-based orchestration
- Secure and extensible backend
- Future support for voice, SMS, USSD, AR, and PSTN

## Roadmap

1. MVP: core assistant + chat + skills
2. Multi-language + personalization
3. Voice/SMS/USSD interfaces
4. Memory, handoff, emotion intelligence
5. Notifications, analytics, and marketplace
