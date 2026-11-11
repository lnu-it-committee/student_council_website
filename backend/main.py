from fastapi import FastAPI


app = FastAPI(title="StudRada Site")


@app.get("/health")
async def health():
    return {"status": "ok"}



