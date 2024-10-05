import io
import typing
import json

import uvicorn
import fastapi
import mediapipe as mp
import numpy as np
import cv2

import landmarks

app = fastapi.FastAPI()

@app.post("/api/landmarks")
async def _landmarks(image: typing.Annotated[bytes, fastapi.File()]):
    bgr_data = cv2.imdecode(np.frombuffer(image, dtype="u1"), cv2.IMREAD_COLOR)
    rgb_data = cv2.cvtColor(bgr_data, cv2.COLOR_BGR2RGB)
    frame = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb_data)
    result = landmarks.detector.detect(frame)
    annotated_image = landmarks.draw_landmarks_on_image(bgr_data, result)
    return [
        [landmark.x, landmark.y, landmark.z]
        for landmark in result.hand_world_landmarks[0]
    ]

@app.post("/api/normalize")
async def _normalize(positions: typing.Annotated[bytes, fastapi.File()]) -> list[list[float]]:
    positions = json.loads(positions.decode("utf-8"))
    return landmarks.normalize(positions)

@app.post("/api/closeness")
async def _closeness(positions: typing.Annotated[bytes, fastapi.File()], positions2: typing.Annotated[bytes, fastapi.File()]):
    positions = json.loads(positions.decode("utf-8"))
    positions2 = json.loads(positions2.decode("utf-8"))
    positions = landmarks.normalize(positions)
    positions2 = landmarks.normalize(positions2)
    return landmarks.closeness(positions, positions2)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8765)
