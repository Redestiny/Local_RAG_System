# FastAPI 应用入口文件
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"status": "success", "message": "Hello, RAG System is running!"}