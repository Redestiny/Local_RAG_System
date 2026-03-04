# ---- 第一阶段：构建车间 (使用完整版镜像，自带 C++ 编译器) ----
FROM python:3.10 AS builder

WORKDIR /build

# 1. 创建一个独立的 Python 虚拟环境
RUN python -m venv /opt/venv
# 激活这个虚拟环境
ENV PATH="/opt/venv/bin:$PATH"

# 2. 复制采购清单
COPY requirements.txt .

# 3. 升级 pip 并安装依赖（全部安装到虚拟环境里）
# 完整版镜像自带底层环境，极少会爆内存崩溃
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# ---- 第二阶段：运行车间 (极其纯净的 slim 镜像) ----
FROM python:3.10-slim AS runner

WORKDIR /app

# 1. 把第一阶段编译好的环境端过来
COPY --from=builder /opt/venv /opt/venv

# 2. 告诉系统使用这个拿来的虚拟环境
ENV PATH="/opt/venv/bin:$PATH"

# 3. 把外面的核心业务代码搬进来
COPY . .

# 4. 启动 FastAPI
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]