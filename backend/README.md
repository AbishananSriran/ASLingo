# ASLingo

Run the following to get the hand landmarker model?

```shell
$ curl -O https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task
```

Create virtual environment, and inside it, run `pip install -r requirements.txt`.

Put your input image in `image.jpg`, run `python landmarks.py`, and the output annotated image is named `annotated.jpg`
