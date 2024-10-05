import io
import typing

import uvicorn
import fastapi
import mediapipe as mp
import numpy as np
import cv2

import landmarks

app = fastapi.FastAPI()

@app.post("/api/landmarks")
async def _landmarks(image: typing.Annotated[bytes, fastapi.File()]):
    data = cv2.imdecode(np.frombuffer(image, dtype="u1"), cv2.IMREAD_COLOR)
    frame = mp.Image(image_format=mp.ImageFormat.SRGB, data=data)
    return landmarks.detector.detect(frame)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8765)
