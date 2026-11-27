from pydantic import PostgresDsn
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    DATABASE_URL: PostgresDsn = PostgresDsn(
        "postgresql+asyncpg://postgres:postgres@localhost:5432/student_council"
    )
    ECHO_DB: bool = False


settings: Settings = Settings()
