# GETE AI Assistant architecture

## Monorepo plan

- `apps/web`: user-facing dashboard and assistant frontend
- `apps/assistant-api`: REST API for chat and orchestration
- `packages/core`: shared interfaces and business logic
- `packages/skills`: registry of supported assistant skills
- `packages/ui`: reusable visual tokens and components
- `services/assistant-service`: future microservice expansion
- `infra`: deployment and infrastructure
- `docs`: product documentation
- `tests`: smoke and integration tests

## MVP

- Web shell dashboard
- Assistant API with conversation endpoint
- Core assistant class
- Skills registry
- Basic test coverage

## Next phases

- Multi-language conversations
- Voice and SMS support
- Notifications and proactive reminders
- Human handoff and memory systems
- Analytics and experimentation
