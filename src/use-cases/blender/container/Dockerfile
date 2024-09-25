# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: GPL-3.0-only

FROM --platform=linux/amd64 python:3.12-alpine

RUN apk add --no-cache blender 
#py3-numpy

# Copy the app to the root of the container
COPY ./ /

# upgrade pip
RUN pip install --upgrade pip

# install python app and deps
RUN pip3 install -r ./requirements.txt

# Install local blender python dependencies
## This is not needed with Blender v4.0+. Install numpy via alpine package.
RUN blender --background -P "/main/blender/installLocalBlenderPythonPackages.py" -- "numpy"


ENTRYPOINT [ "python3", "-m", "main" ]