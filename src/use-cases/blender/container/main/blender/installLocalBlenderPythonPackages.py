#
# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
# with the License. A copy of the License is located at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
# OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
# and limitations under the License.
#
import sys
import subprocess
import os

## Store arguments
packageNames = sys.argv[sys.argv.index("--") + 1:]  # get all args after "--"

# get Blender python exe
python_exe = os.path.join(sys.prefix, 'bin', 'python')

# upgrade pip
subprocess.call([python_exe, "-m", "ensurepip"])
subprocess.call([python_exe, "-m", "pip", "install", "--upgrade", "pip"])

# install required packages
for packageName in packageNames:
    subprocess.call([python_exe, "-m", "pip", "install", packageName])
