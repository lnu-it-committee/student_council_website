from sqlalchemy.ext.asyncio import (
    create_async_engine,
    async_sessionmaker,
    AsyncSession
)
from sqlalchemy.orm import DeclarativeBase

from config import settings


engine = create_async_engine(
    str(settings.DATABASE_URL),
    echo=settings.ECHO_DB,
    pool_pre_ping=True
)



SessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False
)


class Base(DeclarativeBase):
    pass


async def get_db():
    async with SessionLocal() as session:
        yield session



async def close_db() -> None:
    await engine.dispose()